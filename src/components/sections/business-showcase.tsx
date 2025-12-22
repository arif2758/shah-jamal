"use client";

import { useEffect, useRef, useState } from "react";
import {
  Anchor,
  Briefcase,
  Building,
  Compass,
  Container,
  Factory,
  Footprints,
  Fuel,
  Navigation,
  Plane,
  Ship,
  ShipWheel,
  ShoppingBasket,
  Ticket,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { DATA } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";

// ✅ Icon Mapping
const iconMap: Record<string, LucideIcon> = {
  Anchor,
  Ship,
  Fuel,
  Compass,
  ShipWheel,
  Plane,
  Ticket,
  Briefcase,
  Navigation,
  Building,
  ShoppingBasket,
  Container,
  Factory,
  Wrench,
  Footprints,
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-200 bg-emerald-500/5 rounded-full blur-[150px] -z-10" />

      <div className="container px-4 md:px-6 mx-auto">
        {/* Header Animation */}
        <div
          className={cn(
            "transition-all duration-1000 ease-out transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <SectionHeader
            icon={Briefcase}
            badgeLabel="Portfolio"
            title={t.title}
            description={
              language === "en"
                ? "Leading multiple industries with integrity and excellence."
                : "সততা এবং দক্ষতার সাথে একাধিক শিল্প প্রতিষ্ঠানের নেতৃত্ব প্রদান।"
            }
            gradient="from-emerald-600 to-teal-600"
          />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                image={item.image}
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
  image?: string;
  index: number;
  parentInView: boolean;
}

function BusinessCard({
  title,
  role,
  sub,
  icon: Icon,
  image,
  index,
  parentInView,
}: BusinessCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col h-full rounded-3xl overflow-hidden",
        "border backdrop-blur-md bg-white/40 dark:bg-emerald-950/10",
        "border-emerald-200/40 dark:border-emerald-800/20",
        "hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-black/60",
        "transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
        parentInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20 pointer-events-none"
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Image Section - Top Aligned for Clarity */}
      <div className="relative aspect-16/10 overflow-hidden bg-emerald-100/10 dark:bg-emerald-900/10">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <Icon className="size-20" strokeWidth={1} />
          </div>
        )}

        {/* Subtle Gradient Overlay on Image Bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Floating Industry Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center justify-center size-10 rounded-xl bg-white/90 dark:bg-emerald-950/80 backdrop-blur-md shadow-sm border border-emerald-100/50 dark:border-emerald-800/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
            <Icon className="size-5" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground/90 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
            {title}
          </h3>

          {sub && (
            <div className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-emerald-500/40" />
              <p className="text-[0.65rem] font-bold text-muted-foreground/60 uppercase tracking-widest">
                {sub}
              </p>
            </div>
          )}
        </div>

        {/* Footer Role Badge */}
        <div className="pt-4 mt-auto border-t border-emerald-100/50 dark:border-emerald-800/10 flex items-center justify-between">
          <span
            className={cn(
              "inline-flex items-center px-4 py-1.5 rounded-lg text-[0.65rem] font-bold uppercase tracking-widest transition-all duration-300",
              "bg-emerald-500/5 text-emerald-700 dark:bg-emerald-400/5 dark:text-emerald-300 border border-emerald-200/30 dark:border-emerald-800/20 group-hover:bg-emerald-500/10 group-hover:border-emerald-400/30 shadow-xs"
            )}
          >
            {role}
          </span>
        </div>
      </div>

      {/* Hover Light Sweep (Over-Image Progressive Enhancement) */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out bg-linear-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-[-20deg] pointer-events-none z-30" />
    </article>
  );
}
