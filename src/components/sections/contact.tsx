// src/components/sections/contact.tsx
"use client";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  MessageCircle,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import { DATA } from "@/lib/data";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { sendContactMessage } from "@/app/actions/contact";

export default function Contact() {
  const { language } = useLanguage();
  const t = DATA[language].contact;
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    const result = await sendContactMessage(null, formData);

    setIsPending(false);

    if (result.success) {
      console.log("Form submission successful", result.message);
      toast.success(result.message);
      (event.target as HTMLFormElement).reset();
    } else {
      console.error("Form submission failed", result.message);
      toast.error(result.message);
    }
  }

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-secondary/20"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 size-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Contact Info */}
          <div className="space-y-8 animate-in slide-in-from-left-6 duration-700">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                {t.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                {t.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone Numbers - Multiple with Badge */}
              <ContactCard
                icon={Phone}
                title={language === "en" ? "Call Us" : "মোবাইল"}
                value={t.phone}
                badge={language === "en" ? "Primary" : "প্রধান"}
                badgeColor="bg-primary/10 text-primary"
                href={`tel:${t.phone}`}
              />
              
              <ContactCard
                icon={Phone}
                title={language === "en" ? "Alternative" : "বিকল্প"}
                value={t.phoneAlt}
                badge={language === "en" ? "Secondary" : "বিকল্প"}
                badgeColor="bg-orange-500/10 text-orange-600 dark:text-orange-500"
                href={`tel:${t.phoneAlt}`}
              />

              <ContactCard
                icon={Mail}
                title={language === "en" ? "Email Us" : "ইমেইল"}
                value={t.email}
                href={`mailto:${t.email}`}
              />
              
              <ContactCard
                icon={MessageCircle}
                title={language === "en" ? "WhatsApp" : "হোয়াটসঅ্যাপ"}
                value={t.phone}
                badge="WhatsApp"
                badgeColor="bg-green-500/10 text-green-600 dark:text-green-500"
                href={DATA.en.socialLinks.whatsapp}
              />
              
              <ContactCard
                icon={MapPin}
                title={language === "en" ? "Visit Us" : "ঠিকানা"}
                value={t.address}
              />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative animate-in slide-in-from-right-6 duration-700 delay-200">
            {/* Gradient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-orange-400 rounded-3xl blur opacity-20" />

            <div className="relative bg-white dark:bg-black/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">
                      {language === "en" ? "Name" : "আপনার নাম"}
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Ex: John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">
                      {language === "en" ? "Phone" : "মোবাইল"}
                    </label>
                    <input
                      name="phone"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+880..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">
                    {language === "en" ? "Email" : "ইমেইল"}
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="example@mail.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">
                    {language === "en" ? "Message" : "বার্তা"}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder={
                      language === "en"
                        ? "How can we help you?"
                        : "আপনার বার্তা লিখুন..."
                    }
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" />
                      {language === "en" ? "Sending..." : "পাঠানো হচ্ছে..."}
                    </>
                  ) : (
                    <>
                      {t.cta} <Send className="ml-2 size-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Enhanced Contact Card with Badge Support
interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  badge?: string;
  badgeColor?: string;
}

function ContactCard({ 
  icon: Icon, 
  title, 
  value, 
  href,
  badge,
  badgeColor = "bg-muted text-muted-foreground"
}: ContactCardProps) {
  const isExternal = href?.startsWith("http");

  const Content = (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:shadow-md">
      <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
        <Icon className="size-6" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            {title}
          </p>
          {badge && (
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeColor}`}>
              {badge}
            </span>
          )}
        </div>
        <p className="text-base md:text-lg font-medium text-foreground truncate">
          {value}
        </p>
      </div>
      {href && (
        <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 shrink-0" />
      )}
    </div>
  );

  return href ? (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="block"
    >
      {Content}
    </a>
  ) : (
    Content
  );
}