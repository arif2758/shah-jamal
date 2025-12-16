"use client";

import {
  Handshake,
  Award,
  Users, // ✅ Better: Represents care & community service
  CheckCircle2,
} from "lucide-react";
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
      {/* ✅ Professional Blue Background Decor */}
      <div className="absolute bottom-0 left-0 size-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-0 right-0 size-80 bg-blue-600/5 dark:bg-blue-400/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-4 fade-in duration-700">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 py-2 bg-linear-to-r from-primary to-orange-600 bg-clip-text text-transparent">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Column 1: Key Contributions */}
          <div className="space-y-8 animate-in slide-in-from-left-8 fade-in duration-700 delay-100">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-foreground">
              {/* ✅ Blue Icon Background */}
              <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
                <Award className="size-6" />
              </div>
              {language === "en" ? "Key Contributions" : "প্রধান অবদানসমূহ"}
            </h3>

            <div className="grid gap-4">
              {DATA.socialWork.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 p-5 glass-card hover:border-primary/30 transition-all duration-300"
                >
                  {/* ✅ Heart Icon - Perfect for Social/Community Work */}
                  <div className="size-14 rounded-2xl bg-linear-to-br from-primary/10 to-orange-600/10 dark:from-primary/20 dark:to-orange-400/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <Users className="size-7 group-hover:fill-primary/20 transition-all" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                      {item.role[language]}
                    </p>
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
              {/* ✅ Blue Icon Background */}
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                <Handshake className="size-6" />
              </div>
              {language === "en"
                ? "Memberships & Associations"
                : "সদস্যপদ ও সংগঠন"}
            </h3>

            {/* ✅ Professional Blue Card */}
            <div className="glass-card p-8 border-primary/10 dark:border-primary/20 hover:border-primary/30 transition-all duration-300">
              <ul className="space-y-5">
                {DATA.memberships.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    {/* ✅ Blue Checkmark with Hover Effect */}
                    <div className="mt-0.5 p-1 rounded-md bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                      <CheckCircle2 className="size-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-lg font-medium text-foreground/80 group-hover:text-foreground transition-colors leading-relaxed">
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
