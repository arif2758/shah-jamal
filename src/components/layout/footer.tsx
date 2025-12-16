// src/components/layout/footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { DATA } from "@/lib/data";
import { Mail, MapPin, Phone, Send, Heart, ArrowUp } from "lucide-react";
import {
  FacebookIcon,
  WhatsAppIcon,
  ImoIcon,
  XIcon,
} from "@/socialCustomSVGIcon/SocialCustomSVGIcon";

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const t = DATA[language];

  return (
    <footer className="bg-linear-to-b from-background to-muted/20 border-t border-border/40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-16">
          {/* Brand Section */}
          <section className="space-y-6" aria-labelledby="brand-heading">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
              aria-label="Shah Jamal Home"
            >
              <div className="relative size-16 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logo.svg"
                  alt="Shah Jamal Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span
                id="brand-heading"
                className="text-xl font-bold tracking-tight bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              >
                Shah Jamal
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {language === "en"
                ? "Entrepreneur, Social Worker & Community Leader dedicated to positive change."
                : "একজন উদ্যোক্তা, সমাজসেবক এবং কমিউনিটি লিডার যিনি ইতিবাচক পরিবর্তনে নিবেদিত।"}
            </p>

            {/* Contact Info - Compact */}
            <address className="not-italic space-y-3">
              <a
                href={`tel:${t.contact.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="size-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>{t.contact.phone}</span>
              </a>
              <a
                href={`mailto:${t.contact.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="size-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate">{t.contact.email}</span>
              </a>
            </address>
          </section>

          {/* Quick Links */}
          <nav className="space-y-6" aria-labelledby="quick-links-heading">
            <h3
              id="quick-links-heading"
              className="text-base font-semibold text-foreground"
            >
              {language === "en" ? "Quick Links" : "দ্রুত লিংক"}
            </h3>
            <ul className="space-y-3" role="list">
              <FooterLink href="#home" label={t.nav.home} />
              <FooterLink href="#about" label={t.nav.about} />
              <FooterLink href="#business" label={t.nav.business} />
              <FooterLink href="#social" label={t.nav.social} />
              <FooterLink href="#contact" label={t.nav.contact} />
            </ul>
          </nav>

          {/* Social Media Links */}
          <nav className="space-y-6" aria-labelledby="social-links-heading">
            <h3
              id="social-links-heading"
              className="text-base font-semibold text-foreground"
            >
              {language === "en" ? "Connect With Me" : "যোগাযোগ করুন"}
            </h3>
            <ul className="space-y-3" role="list">
              <SocialLink
                href={t.socialLinks.facebook}
                icon={FacebookIcon}
                label="Facebook"
                color="hover:text-[#1877F2]"
              />
              <SocialLink
                href={t.socialLinks.whatsapp}
                icon={WhatsAppIcon}
                label="WhatsApp"
                color="hover:text-[#25D366]"
              />
              <SocialLink
                href={t.socialLinks.imo}
                icon={ImoIcon}
                label="Imo"
                color="hover:text-[#FF5E3A]"
              />
              <SocialLink
                href={t.socialLinks.telegram}
                icon={Send}
                label="Telegram"
                color="hover:text-[#0088cc]"
              />
              <SocialLink
                href={t.socialLinks.x}
                icon={XIcon}
                label="Twitter"
                color="hover:text-foreground dark:hover:text-white"
              />
            </ul>
          </nav>

          {/* Address & CTA */}
          <section className="space-y-6" aria-labelledby="location-heading">
            <h3
              id="location-heading"
              className="text-base font-semibold text-foreground"
            >
              {language === "en" ? "Location" : "অবস্থান"}
            </h3>

            <address className="not-italic">
              <a
                href="https://maps.google.com/?q=Khulna,Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <MapPin className="size-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">{t.contact.address}</span>
              </a>
            </address>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <Mail className="size-4 group-hover:rotate-12 transition-transform" />
              {language === "en" ? "Get In Touch" : "যোগাযোগ করুন"}
            </Link>
          </section>
        </div>

        {/* Bottom Bar - Professional & Optimized */}
        <div className="border-t border-border/40">
          <div className="py-6 md:py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              {/* Copyright - Left */}
              <div className="flex flex-col sm:flex-row items-center gap-2 text-center md:text-left order-2 md:order-1">
                <p className="text-sm text-muted-foreground inline-flex items-center gap-2 flex-wrap justify-center md:justify-start">
                  <span className="inline-flex items-center gap-1.5">
                    &copy; {currentYear}
                    <span className="font-semibold text-foreground">
                      {t.hero.name}
                    </span>
                  </span>
                  <span className="hidden sm:inline text-border/60">•</span>
                  <span className="text-xs">
                    {language === "en"
                      ? "All rights reserved"
                      : "সর্বস্বত্ব সংরক্ষিত"}
                  </span>
                </p>
              </div>

              {/* Tagline - Center */}
              <div className="flex items-center justify-center order-1 md:order-2">
                <p className="text-xs md:text-sm text-muted-foreground inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 dark:bg-muted/20 border border-border/30">
                  <span>
                    {language === "en" ? "Made with" : "তৈরি করা হয়েছে"}
                  </span>
                  <Heart className="size-3.5 md:size-4 text-red-500 fill-red-500 animate-pulse" />
                  <span>
                    {language === "en" ? "for the community" : "কমিউনিটির জন্য"}
                  </span>
                </p>
              </div>

              {/* Back to Top - Right */}
              <div className="flex items-center justify-center md:justify-end order-3">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-muted/50 group"
                  aria-label="Scroll to top"
                >
                  <span className="font-medium">
                    {language === "en" ? "Back to Top" : "উপরে ফিরুন"}
                  </span>
                  <ArrowUp className="size-4 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Extra Info Bar */}
          <div className="border-t border-border/20 py-4 hidden md:block">
            <p className="text-center text-xs text-muted-foreground/70">
              {language === "en"
                ? "Empowering communities through entrepreneurship and social impact"
                : "উদ্যোক্তা এবং সামাজিক প্রভাবের মাধ্যমে সম্প্রদায়কে ক্ষমতায়ন"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Social Link Component - Clean & Minimal
function SocialLink({
  href,
  icon: Icon,
  label,
  color,
}: {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  color: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Connect on ${label}`}
        className={`flex items-center gap-3 text-sm text-muted-foreground ${color} transition-all duration-300 group`}
      >
        <span className="flex items-center justify-center size-9 rounded-lg bg-muted/50 dark:bg-muted/30 group-hover:scale-110 transition-all duration-300 group-hover:shadow-md">
          <Icon className="size-4" />
        </span>
        <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
          {label}
        </span>
      </a>
    </li>
  );
}

// Footer Link Component
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center group"
      >
        <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
        {label}
      </Link>
    </li>
  );
}
