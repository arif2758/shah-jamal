"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Calendar,
  Building,
  Users,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { DATA, STATS_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import styles from "./hero.module.css";

// Counter Animation Hook (Same as before)
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return { count, ref };
}

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Building,
  Users,
  Heart,
};

// Stat Item Component
function StatItem({
  value,
  label,
  iconStr,
  index,
  totalItems,
}: {
  value: string;
  label: string;
  iconStr: string;
  index: number;
  totalItems: number;
}) {
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const { count, ref } = useCountUp(numericValue, 2500);
  const Icon = iconMap[iconStr] || Building;

  return (
    <div className="relative flex flex-col items-center justify-center py-2 md:py-0">
      <div
        ref={ref}
        className={cn(
          styles.animateFloat,
          "flex flex-col items-center text-center z-10"
        )}
        style={{ animationDelay: `${index * 0.5}s` }}
      >
        <div className="mb-1.5 text-primary/80">
          <Icon className="size-5 md:size-6" strokeWidth={1.5} />
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-0.5 leading-none tracking-tight">
          {count}
          <span className="text-orange-500">{suffix}</span>
        </div>
        <div className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
          {label}
        </div>
      </div>
      {/* Divider only for Desktop */}
      {index < totalItems - 1 && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-border/60 translate-x-[50%]" />
      )}
    </div>
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const t = DATA[language].hero;

  return (
    // ✅ FIX: Mobile uses min-h-screen (scrollable), Desktop uses h-screen (fixed)
    <section
      id="home"
      className="relative flex flex-col w-full overflow-hidden bg-background pt-24 pb-10 min-h-dvh lg:h-screen lg:pt-24 lg:pb-4"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 size-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]">
        <div className="absolute inset-0 bg-background/50 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col h-full justify-between">
        {/* Main Content */}
        <div className="flex-1 flex items-center py-6 lg:py-0">
          <div className="grid gap-10 lg:grid-cols-12 items-center w-full">
            {/* Left: Text */}
            {/* Mobile: Centered text, Desktop: Left aligned */}
            <div
              className={cn(
                "order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6",
                styles.fadeInUp
              )}
            >
              <div className="space-y-1 w-full">
                {/* "I'm" / "আমি" */}
                <span className="text-foreground text-lg md:text-2xl font-semibold block mb-1">
                  {language === "en" ? "I'm" : "আমি"}
                </span>

                {/* Name Title */}
                {/* ✅ FIX: Mobile gets normal wrapping, Desktop gets whitespace-nowrap */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-tight lg:leading-none lg:whitespace-nowrap">
                  <span className="bg-linear-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                    {t.name}
                  </span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-center text-lg md:text-2xl font-medium text-muted-foreground pt-2">
                  {t.title}
                </h2>
              </div>

              {/* Description */}
              <p className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed line-clamp-none md:line-clamp-3 lg:line-clamp-none">
                {t.desc}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 w-full">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full font-semibold shadow-lg shadow-primary/20 h-11 px-8"
                >
                  <Link href="#business">
                    {t.cta} <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary/20 hover:bg-primary/5 h-11 px-8"
                >
                  <Link href="#contact">
                    Contact Me <Download className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            {/* ✅ FIX: Mobile Order 1 (Top), Desktop Order 2 (Right) */}
            <div
              className={cn(
                "order-1 lg:order-2 lg:col-span-5 relative mx-auto flex w-full items-center justify-center",
                styles.fadeInUp,
                styles.delay2
              )}
            >
              {/* Responsive Size: Smaller on mobile, Larger on desktop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-56 md:size-80 bg-primary/20 rounded-full blur-[80px] opacity-40" />

              <div className="relative aspect-square w-65 md:w-87.5 lg:w-100 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-black/10">
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50 text-muted-foreground">
                  <Image
                    src="/profileImage.svg"
                    alt="Md. Shah Jamal Bachar"
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Area */}
        {/* ✅ FIX: Mobile has margin-top for spacing, Desktop uses mt-auto to stick bottom */}
        <div
          className={cn(
            "w-full pt-8 pb-4 lg:pt-4 border-t border-border/40 mt-10 lg:mt-auto",
            styles.fadeInUp,
            styles.delay4
          )}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {STATS_DATA.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                label={stat.label[language]}
                iconStr={stat.icon}
                index={index}
                totalItems={STATS_DATA.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
