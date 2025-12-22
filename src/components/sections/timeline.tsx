"use client";

import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { DATA } from "@/lib/data";
import { Calendar, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";

export default function Timeline() {
  const { language } = useLanguage();
  const timelineData = DATA.timeline;

  return (
    <section
      id="timeline"
      className="py-20 bg-muted/30 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeader
          icon={Calendar}
          badgeLabel={language === "en" ? "Milestones" : "অর্জনসমূহ"}
          title={language === "en" ? "My Journey" : "আমার পথচলা"}
          description={
            language === "en"
              ? "A timeline of milestones and achievements throughout the years."
              : "বছরজুড়ে অর্জন এবং মাইলফলকগুলোর একটি সময়রেখা।"
          }
          className="mb-16"
          gradient="from-primary to-orange-600"
        >
          <div className="w-20 h-1.5 bg-primary/20 mx-auto rounded-full mt-4" />
        </SectionHeader>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/20 via-primary/50 to-primary/20 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                language={language}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: {
    year: string;
    title: { en: string; bn: string };
    desc: { en: string; bn: string };
  };
  index: number;
  language: "en" | "bn";
}

function TimelineItem({ item, index, language }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-start md:items-center gap-6 md:gap-0 transition-opacity duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Date Badge (Left for Even, Right for Odd on Desktop) */}
      <div
        className={cn(
          "hidden md:flex flex-1 justify-end",
          !isEven && "justify-start"
        )}
      >
        <div
          className={cn(
            "bg-background border border-border/50 shadow-md py-2 px-4 rounded-full font-bold text-primary flex items-center gap-2",
            !isEven && "flex-row-reverse"
          )}
        >
          <Calendar className="w-4 h-4" />
          {item.year}
        </div>
      </div>

      {/* Center Icon */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-lg z-10 ring-4 ring-background">
        <Award className="w-4 h-4" />
      </div>

      {/* Content Card (Right for Even, Left for Odd on Desktop) */}
      <div
        className={cn(
          "flex-1 ml-10 md:ml-0 md:px-8",
          isVisible ? "animate-in slide-in-from-bottom-4 duration-700" : ""
        )}
      >
        <div className="bg-card hover:shadow-xl border border-border/50 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 group">
          {/* Mobile Year Badge */}
          <div className="md:hidden inline-flex items-center gap-2 text-sm font-bold text-primary mb-2 bg-primary/10 px-2 py-1 rounded-md">
            <Calendar className="w-3 h-3" />
            {item.year}
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {item.title[language]}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {item.desc[language]}
          </p>
        </div>
      </div>
    </div>
  );
}
