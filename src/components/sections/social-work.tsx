"use client";

import { Handshake, Award, Building2, CheckCircle2 } from "lucide-react";
import { DATA } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";

export default function Social() {
  const { language } = useLanguage();
  const t = DATA[language].social;

  return (
    <section
      id="social"
      className="py-20 relative overflow-hidden bg-background"
    >
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 size-96 bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-4 fade-in duration-700">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {t.title}
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-primary to-orange-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Column 1: Specific Roles */}
          <div className="space-y-8 animate-in slide-in-from-left-8 fade-in duration-700 delay-100">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-foreground">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600">
                <Award className="size-6" />
              </div>
              {language === "en" ? "Key Contributions" : "প্রধান অবদানসমূহ"}
            </h3>

            <div className="grid gap-4">
              {DATA.socialWork.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 p-5 bg-white dark:bg-white/5 border border-border rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300"
                >
                  <div className="size-14 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                    <Building2 className="size-7" />
                  </div>
                  <div>
                    {/* ✅ FIX: Access the specific language string */}
                    <p className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                      {item.role[language]}
                    </p>
                    {/* ✅ FIX: Access the specific language string */}
                    <p className="text-muted-foreground text-sm font-medium">
                      {item.org[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Memberships */}
          <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-700 delay-200">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-foreground">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                <Handshake className="size-6" />
              </div>
              {language === "en"
                ? "Memberships & Associations"
                : "সদস্যপদ ও সংগঠন"}
            </h3>

            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-border">
              <ul className="space-y-5">
                {DATA.memberships.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <CheckCircle2 className="size-6 text-primary shrink-0 group-hover:scale-110 transition-transform mt-0.5" />
                    {/* ✅ FIX: Access the specific language string, NOT the whole object */}
                    <span className="text-lg font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                      {item[language]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
