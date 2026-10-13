import { createContext, useContext, useEffect, useState } from "react";
import en from "./en";
import es from "./es";

const LanguageContext = createContext(null);
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("portfolio-language") === "es" ? "es" : "en";
    } catch {
      return "en";
    }
  });
  const copy = language === "es" ? es : en;
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.meta.title;
    for (const selector of [
      'meta[name="description"]',
      'meta[property="og:description"]',
    ]) {
      document
        .querySelector(selector)
        ?.setAttribute("content", copy.meta.description);
    }
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", copy.meta.title);
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* Storage may be disabled. */
    }
  }, [language, copy]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, copy }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  return useContext(LanguageContext);
}
