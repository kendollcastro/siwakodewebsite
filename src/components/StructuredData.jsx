import { useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'

function StructuredData() {
  const { lang } = useLanguage()

  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Siwakode',
      url: 'https://siwakode.com',
      logo: 'https://siwakode.com/favicon.svg',
      description:
        lang === 'es'
          ? 'Agencia de desarrollo web y soluciones digitales con sede en Jacó, Costa Rica.'
          : 'Web development and digital solutions agency based in Jacó, Costa Rica.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jacó',
        addressCountry: 'CR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'kendollcastro@gmail.com',
        telephone: '+506-6017-1996',
        contactType: 'sales',
      },
      sameAs: [
        'https://instagram.com/siwakode',
        'https://linkedin.com/company/siwakode',
      ],
    }

    let script = document.getElementById('ld-json')
    if (!script) {
      script = document.createElement('script')
      script.id = 'ld-json'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(data)
  }, [lang])

  return null
}

export default StructuredData
