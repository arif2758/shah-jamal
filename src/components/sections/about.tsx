"use client";

import { 
  User, 
  MapPin, 
  Calendar, 
  Heart, 
  Globe, 
  Users, 
  type LucideIcon // ✅ Import specific type
} from "lucide-react";
import { DATA } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";

export default function About() {
  const { language } = useLanguage();
  const t = DATA[language].about;

  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 size-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Biography & Values */}
          <div className="space-y-8 animate-in slide-in-from-left-6 duration-700">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide">
                <User className="size-4" />
                <span>{t.title}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {/* Tailwind v4 Linear Gradient */}
                <span className="bg-linear-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                    {language === 'en' ? "Personal Life & Values" : "ব্যক্তিগত জীবন ও দর্শন"}
                </span>
                </h2>
            </div>

            <div className="space-y-6">
                {/* Values Card */}
                <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-border/50 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center justify-center size-12 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 shrink-0">
                        <Heart className="size-6" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-1">{language === 'en' ? "Core Values" : "মূল্যবোধ"}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            {t.values}
                        </p>
                    </div>
                </div>

                {/* Travel Card */}
                <div className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-border/50 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center justify-center size-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 shrink-0">
                        <Globe className="size-6" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-1">{language === 'en' ? "Travel & Spirituality" : "ভ্রমণ ও আধ্যাত্মিকতা"}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            {t.travel}
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Side: Family & Info Glass Card */}
          <div className="relative animate-in slide-in-from-right-6 duration-700 delay-200">
             {/* Gradient Border Effect */}
             <div className="absolute -inset-0.5 bg-linear-to-br from-primary to-orange-300 rounded-3xl blur opacity-30" />
             
             <div className="relative bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-border/50 flex items-center gap-2">
                  <Users className="text-primary size-5" />
                  {language === 'en' ? "Personal Information" : "পারিবারিক তথ্য"}
                </h3>

                <ul className="space-y-5">
                  <InfoItem icon={Calendar} label={language === 'en' ? "Born" : "জন্ম"} text={t.born} />
                  <InfoItem icon={Users} label={language === 'en' ? "Family" : "পরিবার"} text={t.family} />
                  <InfoItem icon={User} label={language === 'en' ? "Children" : "সন্তান"} text={t.children} />
                  <InfoItem icon={MapPin} label={language === 'en' ? "Hometown" : "জন্মস্থান"} text={language === 'en' ? "Vikrampur, Munshiganj" : "বিক্রমপুর, মুন্সীগঞ্জ"} />
                </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ✅ Fix: Use interface with LucideIcon type instead of 'any'
interface InfoItemProps {
  icon: LucideIcon; 
  label: string;
  text: string;
}

function InfoItem({ icon: Icon, label, text }: InfoItemProps) {
  return (
    <li className="flex items-start gap-4 group">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
        <span className="text-base font-medium text-foreground/90">{text}</span>
      </div>
    </li>
  );
}