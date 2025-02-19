"use client"

import { useLanguage } from "@/components/language-provider"

export function useTranslation() {
  const { language, translations } = useLanguage()

  const t = (key: string) => {
    return translations[key] || key
  }

  return { t, language }
}

