"use client";

import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-black border-t border-border mt-auto">
      <div className="container px-4 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          &copy; {year} <span className="text-foreground font-bold">Md. Shah Jamal Bachar</span>. 
          {language === 'en' ? " All rights reserved." : " সর্বস্বত্ব সংরক্ষিত।"}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground/60">
           <span>Business Portfolio</span>
           <span>•</span>
           <span>Chairman & Entrepreneur</span>
        </div>
      </div>
    </footer>
  );
}