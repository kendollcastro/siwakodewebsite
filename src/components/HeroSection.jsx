import { useLanguage } from '../hooks/useLanguage'
import useScrollReveal from '../hooks/useScrollReveal'

function HeroSection() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-48 md:pb-40 bg-[#0A1410] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none tech-grid" />
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-fixed/5 blur-3xl animate-blob pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-fixed/10 blur-3xl animate-blob-delayed pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="lg:col-span-7">
            <p className="inline-block text-primary-fixed/90 text-small font-bold tracking-[0.15em] mb-6 px-4 py-1.5 rounded-full border border-primary-fixed/20 bg-primary-fixed/5">
              {'>'} {t.hero.badge}
            </p>
            <h1 className="text-display-lg-mobile md:text-display-lg text-white mb-8">
              {t.hero.title}{' '}
              <span className="scribble-accent">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-body-lg text-white/70 mb-10 max-w-xl leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all duration-200 glow-green"
              >
                {t.hero.ctaPrimary}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
              <a
                href="#proyectos"
                className="border border-white/20 text-white/80 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0D1F18] hover:border-white active:scale-95 transition-all duration-200"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-2 glow-green-sm">
              <img
                alt="Tropical modern workspace — Siwakode Costa Rica"
                className="w-full aspect-square object-cover"
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop"
                width="600"
                height="600"
                fetchpriority="high"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#0A1410]/90 backdrop-blur-xl border border-white/10 p-5 rounded-xl hidden md:block shadow-xl">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary-fixed/10 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary-fixed text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    bolt
                  </span>
                </span>
                <div>
                  <p className="font-bold text-headline-md text-white">{t.hero.performanceBadge}</p>
                  <p className="text-label-md text-white/50">{t.hero.performanceLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
