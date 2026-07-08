import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import useScrollReveal from '../hooks/useScrollReveal'

function Testimonials() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)
  const testimonial = t.testimonials.list[index]
  const total = t.testimonials.list.length

  const resetInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i === total - 1 ? 0 : i + 1))
    }, 5000)
  }

  const prev = () => {
    setIndex((i) => (i === 0 ? total - 1 : i - 1))
    resetInterval()
  }
  const next = () => {
    setIndex((i) => (i === total - 1 ? 0 : i + 1))
    resetInterval()
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i === total - 1 ? 0 : i + 1))
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [total])

  return (
    <section
      className="py-section-gap bg-[#0A1410] relative overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      <div className="absolute inset-0 pointer-events-none tech-grid opacity-30" />
      <div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-fixed/5 blur-3xl animate-blob pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="testimonials-title" className="text-headline-xl text-white">
            {t.testimonials.sectionTitle}{' '}
            <span className="text-primary-fixed">{t.testimonials.sectionTitleAccent}</span>
          </h2>
        </div>
        <div
          className={`max-w-4xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-3xl relative shadow-2xl transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-6 mb-10">
            <div className="w-20 h-20 rounded-full border border-primary-fixed/30 overflow-hidden bg-white/5 shrink-0 flex items-center justify-center text-primary-fixed text-headline-md font-bold">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-headline-md font-bold text-white">{testimonial.name}</h3>
              <p className="text-primary-fixed/80 font-bold">{testimonial.role}</p>
            </div>
          </div>
          <blockquote className="min-h-[200px] md:min-h-[160px]">
            <p className="text-headline-md text-white/90 leading-relaxed italic">
              {testimonial.quote}
            </p>
          </blockquote>
          <div className="mt-12 flex justify-between items-center">
            <div className="flex gap-1" aria-label={t.testimonials.starsLabel}>
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-primary-fixed"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden="true"
                >
                  star
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/60 text-small">
                {index + 1} / {total}
              </span>
              <div className="flex gap-2">
                <button
                  className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-primary-fixed hover:text-on-primary-fixed active:scale-90 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary-fixed"
                  type="button"
                  onClick={prev}
                  aria-label={t.testimonials.prevLabel}
                >
                  <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
                </button>
                <button
                  className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-primary-fixed hover:text-on-primary-fixed active:scale-90 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary-fixed"
                  type="button"
                  onClick={next}
                  aria-label={t.testimonials.nextLabel}
                >
                  <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
