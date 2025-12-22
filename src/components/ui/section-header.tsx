"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  badgeLabel: string;
  title: string;
  description: string;
  className?: string;
  gradient?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  icon: Icon,
  badgeLabel,
  title,
  description,
  className,
  gradient = "from-primary via-blue-600 to-orange-600",
  children,
}: SectionHeaderProps) {
  // const { language } = useLanguage(); (removed)

  return (
    <div
      className={cn("text-center max-w-3xl mx-auto mb-16 space-y-4", className)}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide border border-primary/20 backdrop-blur-sm shadow-xs">
        <Icon className="size-4" />
        <span>{badgeLabel}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        <span
          className={cn(
            "bg-linear-to-r bg-clip-text text-transparent",
            gradient
          )}
        >
          {title}
        </span>
      </h2>
      <p className="text-muted-foreground text-lg">{description}</p>
      {children}
    </div>
  );
}
