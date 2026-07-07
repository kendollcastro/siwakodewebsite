import logoSrc from '../assets/siwakode-logo-header.svg'
import { useLanguage } from '../hooks/useLanguage'

const SOCIAL_ICONS = [
  { icon: 'camera_alt', label: 'Instagram', href: 'https://instagram.com/siwakode' },
  { icon: 'work', label: 'LinkedIn', href: 'https://linkedin.com/company/siwakode' },
  { icon: 'mail', label: 'Email', href: 'mailto:kendollcastro@gmail.com' },
]

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#0D1F18] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
        <div className="space-y-6">
          <a href="#hero" className="flex items-center gap-2" aria-label="Siwakode Home">
            <img alt="" className="h-10 w-10" src={logoSrc} />
            <span className="text-headline-lg font-black text-white">Siwakode</span>
          </a>
          <p className="text-body-md text-white/70 max-w-sm">
            {t.footer.description}
          </p>
          <div className="flex gap-4">
            {SOCIAL_ICONS.map(({ icon, label, href }) => (
              <a
                key={label}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/20 flex items-center justify-center hover:bg-primary-fixed hover:text-on-primary-fixed active:scale-90 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary-fixed"
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  {icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <nav aria-label={t.footer.exploreTitle}>
            <h5 className="text-label-md font-bold text-primary-fixed mb-6">
              {t.footer.exploreTitle}
            </h5>
            <ul className="space-y-4">
              {t.footer.exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-white/70 hover:text-primary-fixed transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary-fixed inline-block py-1"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={t.footer.legalTitle}>
            <h5 className="text-label-md font-bold text-primary-fixed mb-6">
              {t.footer.legalTitle}
            </h5>
            <ul className="space-y-4">
              {t.footer.legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-white/70 hover:text-primary-fixed transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary-fixed inline-block py-1"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <address className="space-y-6 not-italic">
          <h5 className="text-label-md font-bold text-primary-fixed mb-6">
            {t.footer.studioTitle}
          </h5>
          <p className="text-body-md opacity-70">{t.footer.address}</p>
          <p className="text-body-md opacity-70">
            kendollcastro@gmail.com
            <br />
            +506 6017 1996
          </p>
        </address>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-label-md opacity-50">
        <p>
          &copy; {new Date().getFullYear()} Siwakode. {t.footer.copyright}
        </p>
        <p>{t.footer.madeIn}</p>
      </div>
    </footer>
  )
}

export default Footer
