import { useState, useEffect, useCallback } from 'react'
import logoSrc from '../assets/siwakode-logo-header.svg'
import { useLanguage } from '../hooks/useLanguage'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggleLang, t } = useLanguage()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (!mobileOpen) return
    const close = () => setMobileOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-[#0A1410]/80 backdrop-blur-2xl shadow-lg'
          : 'py-4 bg-[#0A1410]/60 backdrop-blur-2xl'
      }`}
    >
      <nav className="flex justify-between items-center w-full px-6 py-2 max-w-7xl mx-auto">
        <a href="#hero" className="flex items-center gap-2 group" aria-label={t.header.logoLabel}>
          <img alt="" className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(168,230,61,0.5)]" src={logoSrc} />
          <span className="text-headline-md font-bold text-white">Siwakode</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {t.header.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/85 hover:text-primary-fixed text-label-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary-fixed relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-primary-fixed after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-white/70 hover:text-primary-fixed text-small font-bold transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary-fixed"
            aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            type="button"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>

          <a
            href="#contacto"
            className="hidden md:inline-flex bg-primary-fixed text-on-primary-fixed px-6 py-2.5 rounded-full font-bold text-label-md hover:brightness-110 active:scale-95 transition-all duration-200 glow-green-sm"
          >
            {t.header.cta}
          </a>

          <button
            className="md:hidden text-white ml-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary-fixed"
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            onKeyDown={(e) => e.key === 'Escape' && setMobileOpen(false)}
            aria-label={t.header.menuLabel}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.header.menuLabel}
          className="md:hidden glass-dark px-6 pb-6 pt-4 space-y-4"
          onKeyDown={(e) => e.key === 'Escape' && setMobileOpen(false)}
        >
          {t.header.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-white/80 hover:text-primary-fixed text-body py-2 min-h-[44px] flex items-center transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="block text-center bg-primary-fixed text-on-primary-fixed px-6 py-3 rounded-full font-bold"
            onClick={() => setMobileOpen(false)}
          >
            {t.header.cta}
          </a>
          <button
            onClick={toggleLang}
            className="w-full text-center text-white/70 hover:text-primary-fixed text-small font-bold py-2 transition-colors cursor-pointer"
            type="button"
          >
            {t.hero.langToggleFull}
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
