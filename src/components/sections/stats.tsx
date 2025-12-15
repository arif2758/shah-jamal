"use client";

import { Building, Calendar, Users, Heart, type LucideIcon } from "lucide-react";
import { STATS_DATA } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";


const iconMap: Record<string, LucideIcon> = {
  Calendar, Building, Users, Heart
};

export default function Stats() {
  const { language } = useLanguage();

  return (
    <section className="py-10 bg-primary/5 border-y border-primary/10 relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS_DATA.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center text-center space-y-2 group"
              >
                <div className="p-3 rounded-full bg-white dark:bg-white/10 shadow-sm mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="size-6 text-primary" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                   {stat.value}
                </h3>
                
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}