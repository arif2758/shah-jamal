"use client";

import { useLanguage } from "@/contexts/language-context";
import { DATA } from "@/lib/data";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30 py-6 text-center text-sm text-muted-foreground">
      <div className="container px-4">
        <p>
          &copy; {currentYear} {DATA[language].hero.name}.{" "}
          {language === "en" ? "All rights reserved." : "সর্বস্বত্ব সংরক্ষিত।"}
        </p>
      </div>
    </footer>
  );
}
