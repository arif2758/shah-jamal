"use client";

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

// ✅ 10 Unique Professional Palettes (Cycling)
const uniquePalettes: ColorTheme[] = [
  // 1. Ocean Blue (Marine)
  {
    cardBg:
      "bg-linear-to-br from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-900/30",
    iconBg: "bg-white dark:bg-sky-900/50",
    iconColor: "text-sky-600 dark:text-sky-400",
    badgeBg: "bg-sky-100 dark:bg-sky-900/60",
    badgeText: "text-sky-700 dark:text-sky-300",
    borderColor: "border-sky-100 dark:border-sky-800/30",
  },
  // 2. Sunset Orange (Oil/Energy)
  {
    cardBg:
      "bg-linear-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-900/30",
    iconBg: "bg-white dark:bg-orange-900/50",
    iconColor: "text-orange-600 dark:text-orange-400",
    badgeBg: "bg-orange-100 dark:bg-orange-900/60",
    badgeText: "text-orange-800 dark:text-orange-300",
    borderColor: "border-orange-100 dark:border-orange-800/30",
  },
  // 3. Mint Green (Nature/Travel)
  {
    cardBg:
      "bg-linear-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-900/30",
    iconBg: "bg-white dark:bg-emerald-900/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-100 dark:bg-emerald-900/60",
    badgeText: "text-emerald-800 dark:text-emerald-300",
    borderColor: "border-emerald-100 dark:border-emerald-800/30",
  },
  // 4. Royal Purple (Retail/Luxury)
  {
    cardBg:
      "bg-linear-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-900/30",
    iconBg: "bg-white dark:bg-purple-900/50",
    iconColor: "text-purple-600 dark:text-purple-400",
    badgeBg: "bg-purple-100 dark:bg-purple-900/60",
    badgeText: "text-purple-800 dark:text-purple-300",
    borderColor: "border-purple-100 dark:border-purple-800/30",
  },
  // 5. Cyan Tech (Agency/Protocol)
  {
    cardBg:
      "bg-linear-to-br from-cyan-50 to-sky-50 dark:from-cyan-950/30 dark:to-sky-900/30",
    iconBg: "bg-white dark:bg-cyan-900/50",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    badgeBg: "bg-cyan-100 dark:bg-cyan-900/60",
    badgeText: "text-cyan-800 dark:text-cyan-300",
    borderColor: "border-cyan-100 dark:border-cyan-800/30",
  },
  // 6. Rose Red (Shipping)
  {
    cardBg:
      "bg-linear-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-900/30",
    iconBg: "bg-white dark:bg-rose-900/50",
    iconColor: "text-rose-600 dark:text-rose-400",
    badgeBg: "bg-rose-100 dark:bg-rose-900/60",
    badgeText: "text-rose-800 dark:text-rose-300",
    borderColor: "border-rose-100 dark:border-rose-800/30",
  },
  // 7. Amber Gold (Construction/Convention)
  {
    cardBg:
      "bg-linear-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-900/30",
    iconBg: "bg-white dark:bg-amber-900/50",
    iconColor: "text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-100 dark:bg-amber-900/60",
    badgeText: "text-amber-800 dark:text-amber-300",
    borderColor: "border-amber-100 dark:border-amber-800/30",
  },
  // 8. Indigo Corporate (General Business)
  {
    cardBg:
      "bg-linear-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-900/30",
    iconBg: "bg-white dark:bg-indigo-900/50",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    badgeBg: "bg-indigo-100 dark:bg-indigo-900/60",
    badgeText: "text-indigo-800 dark:text-indigo-300",
    borderColor: "border-indigo-100 dark:border-indigo-800/30",
  },
  // 9. Lime Fresh (Eco/Green)
  {
    cardBg:
      "bg-linear-to-br from-lime-50 to-green-50 dark:from-lime-950/30 dark:to-green-900/30",
    iconBg: "bg-white dark:bg-lime-900/50",
    iconColor: "text-lime-600 dark:text-lime-400",
    badgeBg: "bg-lime-100 dark:bg-lime-900/60",
    badgeText: "text-lime-800 dark:text-lime-300",
    borderColor: "border-lime-100 dark:border-lime-800/30",
  },
  // 10. Fuchsia Vibrant (Shopping/Mart)
  {
    cardBg:
      "bg-linear-to-br from-fuchsia-50 to-purple-50 dark:from-fuchsia-950/30 dark:to-purple-900/30",
    iconBg: "bg-white dark:bg-fuchsia-900/50",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    badgeBg: "bg-fuchsia-100 dark:bg-fuchsia-900/60",
    badgeText: "text-fuchsia-800 dark:text-fuchsia-300",
    borderColor: "border-fuchsia-100 dark:border-fuchsia-800/30",
  },
];

export default function BusinessSection() {
  const { language } = useLanguage();
  const t = DATA[language].business;

  return (
    <section
      id="business"
      className="py-20 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-200 bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-in slide-in-from-bottom-5 fade-in duration-700">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.portfolio.map((item, index) => {
            const theme = uniquePalettes[index % uniquePalettes.length];
            const Icon = iconMap[item.icon] || Briefcase;
            const roleKey = item.role.toLowerCase().split(" ")[0];
            // @ts-expect-error - Dynamic key access
            const displayRole = t.roles[roleKey] || item.role;
            return (
              <BusinessCard
                key={index}
                // ✅ UPDATE: Select name based on language
                title={item.name[language]}
                role={displayRole}
                // ✅ UPDATE: Select sub-title if it exists and has language keys
                sub={
                  typeof item.sub === "object" ? item.sub[language] : item.sub
                }
                icon={Icon}
                theme={theme}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ✅ Props Interface
interface BusinessCardProps {
  title: string;
  role: string;
  sub?: string;
  icon: LucideIcon;
  theme: ColorTheme;
  index: number;
}

function BusinessCard({
  title,
  role,
  sub,
  icon: Icon,
  theme,
  index,
}: BusinessCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between p-6 rounded-3xl transition-all duration-300",
        "border backdrop-blur-sm",
        theme.cardBg,
        theme.borderColor,
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/20",
        "animate-in fade-in slide-in-from-bottom-8"
      )}
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
    >
      <div className="space-y-6">
        {/* Icon Circle */}
        <div
          className={cn(
            "flex items-center justify-center size-14 rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
            theme.iconBg,
            theme.iconColor
          )}
        >
          <Icon className="size-7" strokeWidth={1.5} />
        </div>

        {/* Text Content */}
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

      {/* Badge at Bottom */}
      <div className="pt-6 mt-auto">
        <span
          className={cn(
            "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wide",
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
