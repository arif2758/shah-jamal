"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  House,
  User,
  Building2,
  HeartHandshake,
  Phone,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const scrollDirection = useScrollDirection();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = DATA[language].nav;

  const navItems = useMemo(
    () => [
      { key: "home", label: t.home, href: "#home", icon: House },
      {
        key: "business",
        label: t.business,
        href: "#business",
        icon: Building2,
      },
      { key: "social", label: t.social, href: "#social", icon: HeartHandshake },
      { key: "about", label: t.about, href: "#about", icon: User },
      { key: "contact", label: t.contact, href: "#contact", icon: Phone },
    ],
    [t]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (
          section instanceof HTMLElement &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b border-transparent",
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-border/40 shadow-sm supports-backdrop-filter:bg-background/60"
          : "bg-transparent",
        scrollDirection === "down" && isScrolled
          ? "-translate-y-full"
          : "translate-y-0"
      )}
    >
      {/* ✅ Compact Navbar: h-14 (56px) minimum height */}
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        {/* Logo - Maximum size within navbar */}
        <Link
          href="#home"
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          {/* ✅ Logo: h-12 (48px) - максимальный размер с 4px padding сверху/снизу */}
          <div className="relative h-12 w-12 overflow-hidden rounded-lg flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Shah Jamal Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Text компактнее */}
          <div className="hidden md:flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-primary">
              Shah Jamal
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Compact */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <Icon
                  className="h-3.5 w-3.5 transition-transform group-hover:scale-110"
                  strokeWidth={2}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions - Compact */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="h-8 w-8 p-0 font-bold text-muted-foreground hover:text-primary"
          >
            {language === "en" ? "BN" : "EN"}
          </Button>
          <ModeToggle />

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-14 border-b border-border/40 bg-background/95 backdrop-blur-xl md:hidden animate-in slide-in-from-top-5 shadow-xl">
          <nav className="container flex flex-col gap-1 p-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}