import { useState, useRef, useEffect, useCallback } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import useScrollReveal from '../hooks/useScrollReveal'

function ProjectCard({ project, index }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <article className="group relative overflow-hidden rounded-2xl aspect-[4/3] flex flex-col justify-end p-8 border border-white/10 hover:border-primary-fixed/40 focus-within:border-primary-fixed/40 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(168,230,61,0.2)] shrink-0 w-full">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 motion-reduce:transform-none ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!loaded && (
        <div
          className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 motion-reduce:transform-none"
          style={{
            background:
              [
                'linear-gradient(135deg, #1B3D2F 0%, #A8E63D 100%)',
                'linear-gradient(135deg, #0D1F18 0%, #1B3D2F 100%)',
                'linear-gradient(135deg, #A8E63D 0%, #6BAE1A 100%)',
                'linear-gradient(135deg, #2D5A4A 0%, #1B3D2F 100%)',
                'linear-gradient(135deg, #3D7A5F 0%, #A8E63D 50%, #0D1F18 100%)',
                'linear-gradient(135deg, #0D1F18 0%, #A8E63D 50%, #1B3D2F 100%)',
              ][index % 6]
          }}
        ></div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="relative z-10 bg-black/60 backdrop-blur-sm p-6 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 motion-reduce:transform-none border border-white/5">
        <h3 className="text-headline-md font-bold mb-2">{project.title}</h3>
        <p className="text-body-md opacity-80">{project.description}</p>
      </div>
    </article>
  )
}

function ProjectsBento() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()
  const [activeTag, setActiveTag] = useState(null)
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const items = activeTag !== null
    ? t.projects.items.filter((p) => p.tag === t.projects.tags[activeTag])
    : t.projects.items

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollButtons, { passive: true })
    return () => el.removeEventListener('scroll', updateScrollButtons)
  }, [updateScrollButtons])

  return (
    <section
      id="proyectos"
      className="py-section-gap bg-[#0D1F18] text-white relative overflow-hidden"
      aria-labelledby="projects-title"
    >
      <div className="absolute inset-0 bg-primary-fixed opacity-5 mesh-bg" />
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div
          className={`flex flex-col md:flex-row justify-between items-end mb-12 gap-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl w-full">
            <p className="text-primary-fixed text-small font-bold tracking-widest mb-4">
              {t.projects.sectionTitle}
            </p>
            <h2 id="projects-title" className="text-headline-xl mb-6">
              {t.projects.sectionTitle}{' '}
              <span className="scribble-accent">{t.projects.sectionTitleAccent}</span>
            </h2>
            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Project categories">
              <button
                role="tab"
                aria-selected={activeTag === null}
                onClick={() => setActiveTag(null)}
                className={`px-4 py-1.5 rounded-full text-label-md cursor-pointer transition-all duration-200 ${
                  activeTag === null
                    ? 'bg-primary-fixed text-on-primary-fixed'
                    : 'border border-white/20 text-white/60 hover:text-white hover:border-white/40'
                }`}
              >
                All
              </button>
              {t.projects.tags.map((tag, i) => (
                <button
                  key={tag}
                  role="tab"
                  aria-selected={activeTag === i}
                  onClick={() => setActiveTag(activeTag === i ? null : i)}
                  className={`px-4 py-1.5 rounded-full text-label-md cursor-pointer transition-all duration-200 ${
                    activeTag === i
                      ? 'bg-primary-fixed text-on-primary-fixed'
                      : 'border border-white/20 text-white/60 hover:text-white hover:border-white/40'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-200 cursor-pointer -ml-5"
              aria-label="Previous projects"
            >
              <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-200 cursor-pointer -mr-5"
              aria-label="Next projects"
            >
              <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {items.map((project, i) => (
              <div
                key={project.title}
                className={`snap-start shrink-0 w-[85%] md:w-[45%] lg:w-[30%] transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsBento
