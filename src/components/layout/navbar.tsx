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
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 transition-transform hover:scale-105"
        >
          {/* ✅ Fixed: Valid Tailwind size */}
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image
              src="/logo.svg"
              alt="Shah Jamal Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden md:flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-primary">
              Shah Jamal
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                {/* ✅ FIX: Removed fill-current, only stroke color */}
                <Icon
                  className="h-4 w-4 transition-transform group-hover:scale-110"
                  strokeWidth={2} // ✅ Optional: Better stroke visibility
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="w-10 font-bold text-muted-foreground hover:text-primary"
          >
            {language === "en" ? "BN" : "EN"}
          </Button>
          <ModeToggle />

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-16 border-b border-border/40 bg-background/95 backdrop-blur-xl md:hidden animate-in slide-in-from-top-5 shadow-xl">
          <nav className="container flex flex-col gap-2 p-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {/* ✅ FIX: Removed fill-current from mobile too */}
                  <Icon className="h-5 w-5" strokeWidth={2} />
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