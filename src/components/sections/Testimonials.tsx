"use client";

import { useLanguage } from "@/contexts/language-context";
import { DATA } from "@/lib/data";
import { Quote, MessageSquareDashed, Star } from "lucide-react";
import styles from "./Testimonials.module.css";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";

export function Testimonials() {
  const { language } = useLanguage();
  const testimonialsData = DATA.testimonials;

  // Duplicate data to create a seamless loop effect
  // We repeat the data 4 times to ensure we have enough items for the marquee
  const repeatedTestimonials = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ].map((item, idx) => ({ ...item, id: idx }));

  const midPoint = Math.ceil(repeatedTestimonials.length / 2);
  const firstRow = repeatedTestimonials.slice(0, midPoint);
  const secondRow = repeatedTestimonials.slice(midPoint);

  return (
    <section className="py-20 overflow-hidden bg-background relative">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionHeader
          icon={MessageSquareDashed}
          badgeLabel="Testimonials"
          title={language === "en" ? "Success Stories" : "সাফল্যর গল্প"}
          description={
            language === "en"
              ? "What our partners say about us"
              : "আমাদের পার্টনাররা আমাদের সম্পর্কে যা বলেন"
          }
          className="mb-10"
          gradient="from-primary to-orange-600"
        >
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex text-orange-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} fill="currentColor" className="size-5" />
              ))}
            </div>
            <span className="font-bold text-lg">5.0/5.0</span>
          </div>
        </SectionHeader>

        {/* Marquee Rows */}
        <div className={cn("relative", styles.maskGradient)}>
          {/* Row 1: Left Scroll */}
          <div className={cn(styles.scrollContainer, styles.scrollLeft)}>
            {firstRow.map((item, idx) => (
              <ReviewCard key={`row1-${idx}`} item={item} language={language} />
            ))}
          </div>

          {/* Row 2: Right Scroll */}
          <div
            className={cn(styles.scrollContainer, styles.scrollRight, "mt-6")}
          >
            {secondRow.map((item, idx) => (
              <ReviewCard key={`row2-${idx}`} item={item} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ReviewCardProps {
  item: (typeof DATA.testimonials)[0];
  language: "en" | "bn";
}

function ReviewCard({ item, language }: ReviewCardProps) {
  return (
    <div className="w-[350px] shrink-0">
      <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 h-full group hover:-translate-y-1 shadow-sm hover:shadow-xl cursor-default relative">
        <Quote
          className="absolute top-6 right-8 text-primary/10 size-12"
          fill="currentColor"
        />

        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="size-12 rounded-full bg-linear-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
            {item.name.en.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-lg truncate pr-8">
              {item.name[language]}
            </h4>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              {item.role[language]}
            </p>
          </div>
        </div>

        <div className="flex gap-1 mb-4 text-orange-500">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} fill="currentColor" className="size-4" />
          ))}
        </div>

        <p className="text-muted-foreground leading-relaxed italic text-sm">
          &quot;{item.text[language]}&quot;
        </p>
      </div>
    </div>
  );
}
