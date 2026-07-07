import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import useScrollReveal from '../hooks/useScrollReveal'

const PLACEHOLDER_GRADIENTS = [
  'linear-gradient(135deg, #1B3D2F 0%, #A8E63D 100%)',
  'linear-gradient(135deg, #0D1F18 0%, #1B3D2F 100%)',
  'linear-gradient(135deg, #A8E63D 0%, #6BAE1A 100%)',
  'linear-gradient(135deg, #2D5A4A 0%, #1B3D2F 100%)',
  'linear-gradient(135deg, #3D7A5F 0%, #A8E63D 50%, #0D1F18 100%)',
  'linear-gradient(135deg, #0D1F18 0%, #A8E63D 50%, #1B3D2F 100%)',
]

function PlaceholderProjectCard({ project, index }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl aspect-[4/3] flex flex-col justify-end p-8 border-4 border-transparent hover:border-primary-fixed focus-within:border-primary-fixed transition-all duration-500">
      <div
        className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 motion-reduce:transform-none"
        style={{ background: PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length] }}
      />
      <div className="absolute inset-0 bg-[#0D1F18]/30" />
      <div className="relative z-10 bg-[#0D1F18]/90 p-6 rounded-xl backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 motion-reduce:transform-none">
        <h3 className="text-headline-md font-bold mb-2">{project.title}</h3>
        <p className="text-body-md opacity-80">{project.description}</p>
      </div>
    </article>
  )
}

const INITIAL_COUNT = 2

function ProjectsBento() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()
  const [showAll, setShowAll] = useState(false)
  const items = showAll ? t.projects.items : t.projects.items.slice(0, INITIAL_COUNT)

  return (
    <section
      id="proyectos"
      className="py-section-gap bg-[#0D1F18] text-white relative overflow-hidden"
      aria-labelledby="projects-title"
    >
      <div className="absolute inset-0 bg-primary-fixed opacity-5 mesh-bg" />
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div
          className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl">
            <p className="text-primary-fixed text-small font-bold tracking-widest mb-4">
              {t.projects.sectionTitle}
            </p>
            <h2 id="projects-title" className="text-headline-xl mb-6">
              {t.projects.sectionTitle}{' '}
              <span className="scribble-accent">{t.projects.sectionTitleAccent}</span>
            </h2>
            <div className="flex flex-wrap gap-3" role="list" aria-label="Project categories">
              {t.projects.tags.map((tag, i) => (
                <span
                  key={tag}
                  role="listitem"
                  className={`px-4 py-1 rounded-full text-label-md ${
                    i === 0
                      ? 'border border-primary-fixed text-primary-fixed'
                      : 'border border-white/20'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-primary-fixed font-bold flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-primary-fixed cursor-pointer"
            aria-expanded={showAll}
          >
            {showAll ? t.projects.viewLess : t.projects.viewAll}{' '}
            <span className={`material-symbols-outlined transition-transform duration-300 motion-reduce:transform-none ${
              showAll ? 'rotate-180' : 'group-hover:translate-x-2'
            }`} aria-hidden="true">
              {showAll ? 'expand_less' : 'arrow_forward'}
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((project, i) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <PlaceholderProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsBento
