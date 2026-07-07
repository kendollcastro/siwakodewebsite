import { useLanguage } from '../hooks/useLanguage'
import useScrollReveal from '../hooks/useScrollReveal'

function HeroSection() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-48 md:pb-40 bg-[#0D1F18] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none dot-pattern" />
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="lg:col-span-7">
            <p className="text-primary-fixed text-small font-bold tracking-widest mb-6">
              {t.hero.badge}
            </p>
            <h1 className="text-display-lg-mobile md:text-display-lg text-white mb-8">
              {t.hero.title}{' '}
              <span className="scribble-accent">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-body-lg text-white opacity-80 mb-10 max-w-xl">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                {t.hero.ctaPrimary}
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
              <a
                href="#proyectos"
                className="border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0D1F18] active:scale-95 transition-all duration-200"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden border-4 border-primary-fixed shadow-2xl rotate-3">
              <img
                alt="Modern workspace with natural light"
                className="w-full aspect-square object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1aF8N3ESogkTyNiL0cvUtcizPUWI7GRF7udWGk34lbkdmZa7R2Qo9mpOmSwVBy6kgBsc4dVyg4OBA1o0pmEnnL4O-qQD3kBh9kXLGlNrdJFO36I1DR1mYZlz3RlJFWuRvOLDEKcD0cZN8FMqROaBu6wDEUEZPt55jq0Mp9zg2TedDfxE3HnMVHYWMfvkGxBTfO4T62_Sj9JNwl3RdYPgbEDR-eKt09tQV-IsLJQIcjOPCA9Dl5W45wFppiqyZfRfngMTsnybE1Xc9"
                width="600"
                height="600"
                fetchpriority="high"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-fixed p-6 rounded-xl text-on-primary-fixed hidden md:block animate-bounce shadow-xl motion-reduce:animate-none">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden="true"
                >
                  bolt
                </span>
                <div>
                  <p className="font-bold text-headline-md">{t.hero.performanceBadge}</p>
                  <p className="text-label-md">{t.hero.performanceLabel}</p>
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
