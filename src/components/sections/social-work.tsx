"use client";

import {
  Handshake,
  Heart,
  Users,
  GraduationCap,
  MoonStar,
  Trophy,
  CheckCircle2,
  type LucideIcon,
  Crown,
} from "lucide-react";
import { DATA } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";

// Category Icons Mapping
const categoryIcons: Record<string, LucideIcon> = {
  Community: Users,
  Education: GraduationCap,
  Religious: MoonStar,
  Social: Heart,
  Sports: Trophy,
};

// Category Colors
const categoryColors: Record<string, string> = {
  Community: "text-blue-600 bg-blue-50 dark:bg-blue-900/20 ring-blue-500/20",
  Education:
    "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 ring-emerald-500/20",
  Religious:
    "text-amber-600 bg-amber-50 dark:bg-amber-900/20 ring-amber-500/20",
  Social: "text-rose-600 bg-rose-50 dark:bg-rose-900/20 ring-rose-500/20",
  Sports:
    "text-orange-600 bg-orange-50 dark:bg-orange-900/20 ring-orange-500/20",
};

export default function Social() {
  const { language } = useLanguage();
  const t = DATA[language].social;

  return (
    <section
      id="social"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Main Header */}
        <SectionHeader
          icon={Heart}
          badgeLabel="Philanthropy & Leadership"
          title={t.title}
          description={
            language === "en"
              ? "Dedicated to serving the community through impactful leadership in religious, educational, and social organizations."
              : "বিভিন্ন ধর্মীয়, শিক্ষামূলক এবং সামাজিক সংগঠনের মাধ্যমে মানুষের সেবায় ও নেতৃত্ব প্রদানে নিয়োজিত।"
          }
          className="mb-20"
          gradient="from-primary to-orange-600"
        />

        {/* Section 1: Organizational Roles (Grid) */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <div className="p-2.5 rounded-xl bg-linear-to-br from-rose-100 to-orange-100 dark:from-rose-900/30 dark:to-orange-900/30 text-rose-600 shadow-sm">
              <Crown className="size-6" />
            </div>
            <h3 className="text-2xl font-bold">
              {language === "en"
                ? "Key Leadership Roles"
                : "প্রধান সাংগঠনিক দায়িত্বসমূহ"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.socialWork.map((item, index) => {
              const category = item.category || "Social";
              const Icon = categoryIcons[category] || Users;
              const colorClass =
                categoryColors[category] || categoryColors.Social;

              return (
                <div
                  key={index}
                  className="group relative flex flex-col p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Background Glow on Hover */}
                  <div
                    className={cn(
                      "absolute -top-20 -right-20 size-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none",
                      colorClass.replace("text-", "bg-").split(" ")[0]
                    )}
                  />

                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={cn(
                        "size-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner ring-1",
                        colorClass
                      )}
                    >
                      <Icon className="size-7" />
                    </div>
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ring-1",
                        colorClass
                      )}
                    >
                      {category}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {item.role[language]}
                    </h4>
                    <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                      {item.org[language]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Memberships (Grid) */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <div className="p-2.5 rounded-xl bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 shadow-sm">
              <Handshake className="size-6" />
            </div>
            <h3 className="text-2xl font-bold">
              {language === "en"
                ? "Affiliations & Memberships"
                : "সংগঠন ও সদস্যপদ"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DATA.memberships.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="shrink-0 p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="size-5" />
                </div>
                <span className="font-semibold text-foreground/90 group-hover:text-foreground">
                  {item[language]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
