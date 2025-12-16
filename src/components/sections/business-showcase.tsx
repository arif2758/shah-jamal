"use client";

import { useEffect, useRef, useState } from "react";
import {
  Anchor,
  Briefcase,
  Building,
  Compass,
  Container,
  Droplet,
  Flame,
  Footprints,
  Navigation,
  Plane,
  Ship,
  ShipWheel,
  ShoppingBasket,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import { DATA } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

// ✅ Icon Mapping
const iconMap: Record<string, LucideIcon> = {
  Anchor,
  Ship,
  Droplet,
  Compass,
  ShipWheel,
  Plane,
  Ticket,
  Briefcase,
  Navigation,
  Building,
  ShoppingBasket,
  Container,
  Fuel: Flame,
  Footprints,
};

// ✅ Theme Interface
interface ColorTheme {
  cardBg: string;
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
}

// ✅ Single Theme - Emerald/Teal (৩য় আইটেমের কালার)
const professionalTheme: ColorTheme = {
  cardBg:
    "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-900/30",
  iconBg: "bg-white dark:bg-emerald-900/50",
  iconColor: "text-emerald-600 dark:text-emerald-400",
  badgeBg: "bg-emerald-100 dark:bg-emerald-900/60",
  badgeText: "text-emerald-800 dark:text-emerald-300",
  borderColor: "border-emerald-100 dark:border-emerald-800/30",
};

// ✅ Optimized Custom Hook for Scroll Detection
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return { ref, isInView };
}

export default function BusinessSection() {
  const { language } = useLanguage();
  const t = DATA[language].business;

  const { ref, isInView } = useInView(0.15);

  return (
    <section
      id="business" 
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-200 bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="container px-4 md:px-6 mx-auto">
        {/* Header Animation */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ease-out transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* ✅ Original Title Color রাখা হলো */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-primary to-orange-600 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {language === "en"
              ? "Leading multiple industries with integrity and excellence."
              : "সততা এবং দক্ষতার সাথে একাধিক শিল্প প্রতিষ্ঠানের নেতৃত্ব প্রদান।"}
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.portfolio.map((item, index) => {
            const Icon = iconMap[item.icon] || Briefcase;
            const roleKey = item.role.toLowerCase().split(" ")[0];
            // @ts-expect-error - Dynamic key access
            const displayRole = t.roles[roleKey] || item.role;
            return (
              <BusinessCard
                key={index}
                title={item.name[language]}
                role={displayRole}
                sub={
                  typeof item.sub === "object" ? item.sub[language] : item.sub
                }
                icon={Icon}
                theme={professionalTheme} // ✅ Emerald/Teal theme for all
                index={index}
                parentInView={isInView}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface BusinessCardProps {
  title: string;
  role: string;
  sub?: string;
  icon: LucideIcon;
  theme: ColorTheme;
  index: number;
  parentInView: boolean;
}

function BusinessCard({
  title,
  role,
  sub,
  icon: Icon,
  theme,
  index,
  parentInView,
}: BusinessCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between p-6 rounded-3xl",
        "border backdrop-blur-sm",
        theme.cardBg,
        theme.borderColor,
        "hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/20",
        "transition-all duration-700 ease-out",
        parentInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20 pointer-events-none"
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="space-y-6">
        <div
          className={cn(
            "flex items-center justify-center size-14 rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
            theme.iconBg,
            theme.iconColor
          )}
        >
          <Icon className="size-7" strokeWidth={1.5} />
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-bold leading-tight text-foreground/90 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          {sub && (
            <p className="text-xs font-medium text-muted-foreground opacity-80">
              {sub}
            </p>
          )}
        </div>
      </div>

      <div className="pt-6 mt-auto">
        <span
          className={cn(
            "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-colors duration-300 group-hover:opacity-90",
            theme.badgeBg,
            theme.badgeText
          )}
        >
          {role}
        </span>
      </div>
    </article>
  );
}
