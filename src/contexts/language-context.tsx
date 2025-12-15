"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "bn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // ১. ডিফল্ট ভাষা 'bn' সেট করা হলো (সার্ভার ও ক্লায়েন্ট দুই জায়গাতেই প্রথমে এটা থাকবে)
  const [language, setLanguage] = useState<Language>("bn");

  // ২. শুধুমাত্র ক্লায়েন্ট সাইডে লোকাল স্টোরেজ চেক হবে
  useEffect(() => {
    // ব্রাউজার এনভায়রনমেন্ট চেক (নিরাপত্তার জন্য)
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      // যদি সেভ করা ভাষা থাকে এবং সেটা বর্তমান ভাষার চেয়ে আলাদা হয়, তবেই আপডেট হবে
      if (saved && (saved === "en" || saved === "bn") && saved !== language) {
        setLanguage(saved);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // এটি কেবল একবার রান হবে

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "bn" : "en";
    handleSetLanguage(newLang);
  };

  // ৩. 'mounted' চেক রিমুভ করা হয়েছে যাতে SEO ভালো হয় এবং এরর চলে যায়
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}