import { createContext, useState, useCallback, useMemo, useEffect } from 'react'
import { getTranslations, defaultLang } from '../i18n'

const STORAGE_KEY = 'siwakode_lang'

function getInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') return stored
  } catch { /* localStorage not available */ }
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language?.slice(0, 2)
    if (browserLang === 'es') return 'es'
  }
  return defaultLang
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch { /* localStorage not available */ }
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'))
  }, [])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: getTranslations(lang),
    }),
    [lang, toggleLang],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export default LanguageContext
