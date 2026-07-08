import { useLanguage } from '../hooks/useLanguage'
import useScrollReveal from '../hooks/useScrollReveal'

function ServiceCard({ service, cta }) {
  const cardClasses = service.popular
    ? 'p-8 md:p-10 bg-black/40 backdrop-blur-xl border border-primary-fixed/30 rounded-xl scale-[1.02] md:scale-105 relative z-10 text-white glow-green-sm'
    : 'p-8 md:p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 active:scale-[1.02] transition-all duration-300'

  return (
    <article className={cardClasses}>
      {service.popular && (
        <div className="absolute -top-4 right-8 bg-primary-fixed text-on-primary-fixed px-4 py-1 rounded-full text-label-md font-bold">
          {cta.popular}
        </div>
      )}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 ${
          service.popular ? 'bg-primary-fixed' : 'bg-white/10'
        }`}
      >
        <span className={`material-symbols-outlined text-3xl ${
          service.popular ? 'text-on-primary-fixed' : 'text-primary-fixed'
        }`} aria-hidden="true">
          {service.icon}
        </span>
      </div>
      <h3 className="text-headline-md font-headline-md mb-4">{service.title}</h3>
      <p
        className={`text-body-md mb-8 ${
          service.popular ? 'text-white/70' : 'text-white/60'
        }`}
      >
        {service.description}
      </p>
      <ul className="space-y-3 mb-10">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-label-md"
          >
            <span
              className="material-symbols-outlined text-primary-fixed/80 shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden="true"
            >
              check_circle
            </span>
            <span className="text-white/70">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contacto"
        className={`block text-center py-3.5 rounded-full font-bold text-body transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-primary-fixed ${
          service.popular
            ? 'bg-primary-fixed text-on-primary-fixed hover:brightness-110'
            : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
        }`}
      >
        {cta.cta}
      </a>
    </article>
  )
}

function ServicesSection() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()

  return (
    <section
      id="servicios"
      className="py-section-gap bg-[#0A1410] relative overflow-hidden"
      aria-labelledby="services-title"
    >
      <div className="absolute inset-0 pointer-events-none tech-grid opacity-50" />
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="services-title" className="text-headline-xl text-white mb-4">
            {t.services.sectionTitle}{' '}
            <span className="scribble-accent">{t.services.sectionTitleAccent}</span>
          </h2>
          <p className="text-body-lg text-white/50 max-w-2xl mx-auto">
            {t.services.sectionSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.list.map((service, i) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <ServiceCard
                service={service}
                cta={{ popular: t.services.popular, cta: t.services.cta }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
