import { createContext, useContext, useEffect, useState } from 'react'
import { dict, languages } from '../i18n/translations'

const LanguageContext = createContext(null)
const KEY = 'trendz_lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(KEY)
    return saved && dict[saved] ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem(KEY, lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const t = (key) => dict[lang]?.[key] ?? dict.en[key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)