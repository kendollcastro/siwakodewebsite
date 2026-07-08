import { useState, useRef, useEffect, useCallback } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import useScrollReveal from '../hooks/useScrollReveal'

function TestimonialCard({ testimonial }) {
  return (
    <article className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shrink-0 w-[85%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col">
      <div className="flex items-center gap-4 mb-6 shrink-0">
        <div className="w-14 h-14 rounded-full border border-primary-fixed/30 overflow-hidden bg-white/5 shrink-0 flex items-center justify-center text-primary-fixed text-headline-md font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-headline-sm font-bold text-white">{testimonial.name}</h3>
          <p className="text-primary-fixed/80 text-label-md font-bold">{testimonial.role}</p>
        </div>
      </div>
      <blockquote className="flex-1">
        <p className="text-body-md text-white/80 leading-relaxed italic line-clamp-6">
          {testimonial.quote}
        </p>
      </blockquote>
      <div className="flex gap-1 mt-6 shrink-0" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className="material-symbols-outlined text-primary-fixed text-lg"
            style={{ fontVariationSettings: "'FILL' 1" }}
            aria-hidden="true"
          >
            star
          </span>
        ))}
      </div>
    </article>
  )
}

function Testimonials() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const autoPlayRef = useRef(null)

  const cards = t.testimonials.list
  const duplicated = [...cards, ...cards]

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 20)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20)
  }, [])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
    resetAutoPlay()
  }

  const resetAutoPlay = () => {
    clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      const el = scrollRef.current
      if (!el) return
      const cardWidth = el.querySelector('article')?.offsetWidth || 0
      const gap = 24
      const scrollAmount = cardWidth + gap
      const nextPos = el.scrollLeft + scrollAmount

      if (nextPos >= (el.scrollWidth - el.clientWidth) / 2 + el.clientWidth) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }, 5000)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollButtons, { passive: true })
    return () => el.removeEventListener('scroll', updateScrollButtons)
  }, [updateScrollButtons])

  useEffect(() => {
    resetAutoPlay()
    return () => clearInterval(autoPlayRef.current)
  }, [cards.length])

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

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-200 cursor-pointer -ml-5"
              aria-label={t.testimonials.prevLabel}
            >
              <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-200 cursor-pointer -mr-5"
              aria-label={t.testimonials.nextLabel}
            >
              <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {duplicated.map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${i}`}
                className={`snap-start transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i % cards.length) * 100}ms` }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
