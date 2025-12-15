"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light" // ✅ Change 2: Set default to "light"
      enableSystem={false} // Optional: এটি false করলে সিস্টেমের ডার্ক মোড ইগনোর করবে
      disableTransitionOnChange
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
