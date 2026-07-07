import { useLanguage } from '../hooks/useLanguage'
import useScrollReveal from '../hooks/useScrollReveal'

function ServiceCard({ service, cta }) {
  const cardClasses = service.popular
    ? 'p-8 md:p-10 bg-[#0D1F18] border border-primary-fixed rounded-xl shadow-xl scale-[1.02] md:scale-105 relative z-10 text-white'
    : 'p-8 md:p-10 bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-2xl hover:-translate-y-2 active:scale-[1.02] transition-all duration-200'

  return (
    <article className={cardClasses}>
      {service.popular && (
        <div className="absolute -top-4 right-8 bg-primary-fixed text-on-primary-fixed px-4 py-1 rounded-full text-label-md font-bold">
          {cta.popular}
        </div>
      )}
      <div
        className={`w-16 h-16 rounded-lg flex items-center justify-center mb-8 transition-transform duration-200 ${
          service.popular ? 'bg-primary-fixed' : 'bg-[#1B3D2F]'
        }`}
      >
        <span className="material-symbols-outlined text-4xl ${
          service.popular ? 'text-on-primary-fixed' : 'text-primary-fixed'
        }" aria-hidden="true">
          {service.icon}
        </span>
      </div>
      <h3 className="text-headline-md font-headline-md mb-4">{service.title}</h3>
      <p
        className={`text-body-md mb-8 ${
          service.popular ? 'text-white/80' : 'text-on-surface/80'
        }`}
      >
        {service.description}
      </p>
      <ul className="space-y-4 mb-10">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-label-md"
          >
            <span
              className="material-symbols-outlined text-primary-fixed shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden="true"
            >
              check_circle
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contacto"
        className={`block text-center py-3.5 rounded-full font-bold text-body transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-primary-fixed ${
          service.popular
            ? 'bg-primary-fixed text-on-primary-fixed hover:brightness-110'
            : 'bg-[#1B3D2F] text-white hover:bg-[#1B3D2F]/90'
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
      className="py-section-gap bg-surface"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="services-title" className="text-headline-xl mb-4">
            {t.services.sectionTitle}{' '}
            <span className="scribble-accent">{t.services.sectionTitleAccent}</span>
          </h2>
          <p className="text-body-lg text-on-surface max-w-2xl mx-auto opacity-80">
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
