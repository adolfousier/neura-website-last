"use client"

import type React from "react"
import { createContext, useState, useEffect, useContext } from "react"
import en from "../locales/en.json"
import es from "../locales/es.json"
import pt from "../locales/pt.json"
import fr from "../locales/fr.json"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  translations: Record<string, string>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = { en, es, pt, fr }
const supportedLanguages = Object.keys(translations)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en")
  const [currentTranslations, setCurrentTranslations] = useState(translations.en)

  useEffect(() => {
    const detectLanguage = () => {
      const storedLang = localStorage.getItem("language")
      if (storedLang && supportedLanguages.includes(storedLang)) {
        return storedLang
      }

      // Always default to English
      return "en"
    }

    const detectedLang = detectLanguage()
    changeLanguage(detectedLang)
  }, [])

  const changeLanguage = (lang: string) => {
    if (supportedLanguages.includes(lang)) {
      setLanguage(lang)
      setCurrentTranslations(translations[lang as keyof typeof translations])
      localStorage.setItem("language", lang)
      document.documentElement.lang = lang
    } else {
      console.error(`Unsupported language: ${lang}`)
      // If an unsupported language is somehow selected, default to English
      setLanguage("en")
      setCurrentTranslations(translations.en)
      localStorage.setItem("language", "en")
      document.documentElement.lang = "en"
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, translations: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

