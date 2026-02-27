"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "mn" | "ja"

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("mn")

  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem("lang")
    if (stored === "mn" || stored === "ja") {
      setLangState(stored)
    }
  }, [])

  const setLang = (value: Language) => {
    setLangState(value)
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", value)
    }
  }

  const toggleLang = () => setLang(lang === "mn" ? "ja" : "mn")

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}

