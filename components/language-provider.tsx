"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import pt from "@/locales/pt.json";
import fr from "@/locales/fr.json";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  translations: Record<string, string>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// force a generic Record<string,string> shape for all locale objects
const translations: Record<string, Record<string, string>> = {
  en,
  es,
  pt,
  fr,
};

const supportedLanguages = Object.keys(translations);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>("en");
  // <- explicitly type as a map of string→string
  const [currentTranslations, setCurrentTranslations] = useState<Record<string, string>>(
    translations["en"]
  );

  useEffect(() => {
    const detectLanguage = (): string => {
      const storedLang = localStorage.getItem("language");
      if (storedLang && supportedLanguages.includes(storedLang)) {
        return storedLang;
      }
      // Always default to English
      return "en";
    };

    const detectedLang = detectLanguage();
    changeLanguage(detectedLang);
  }, []);

  const changeLanguage = (lang: string) => {
    if (supportedLanguages.includes(lang)) {
      setLanguage(lang);
      setCurrentTranslations(translations[lang]);
      localStorage.setItem("language", lang);
      document.documentElement.lang = lang;
    } else {
      console.error(`Unsupported language: ${lang}`);
      // fallback to English
      setLanguage("en");
      setCurrentTranslations(translations["en"]);
      localStorage.setItem("language", "en");
      document.documentElement.lang = "en";
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        translations: currentTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
