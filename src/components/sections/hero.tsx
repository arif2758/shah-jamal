"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { DATA } from "@/lib/data";

export default function Hero() {
  const { language } = useLanguage();
  const t = DATA[language].hero;

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-background pt-20 md:pt-0"
    >
      {/* Background Decor: Dot Pattern (Tailwind v4) */}
      <div className="absolute inset-0 -z-10 size-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]">
        {/* Mask */}
        <div className="absolute inset-0 bg-background/50 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="container relative z-10 grid gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6 lg:items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start gap-6 text-left animate-in slide-in-from-bottom-8 fade-in duration-1000">
          
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-foreground">{language === 'en' ? "I'm" : "আমি"}</span>
              {/* Tailwind v4 Linear Gradient */}
              <span className="bg-linear-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
                {t.name}
              </span>
            </h1>
            <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl">
              {t.title}
            </h2>
          </div>

          <p className="max-w-150 text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed">
            {t.desc}
          </p>

          <div className="flex flex-col gap-3 min-[400px]:flex-row pt-2">
            <Button asChild size="lg" className="rounded-full font-semibold shadow-lg shadow-primary/20">
              <Link href="#business">
                {t.cta} <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/5">
              <Link href="#contact">
                Contact Me <Download className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Column: Image / Visual */}
        <div className="relative mx-auto flex w-full max-w-125 items-center justify-center animate-in slide-in-from-right-8 fade-in duration-1000 delay-200">
            {/* Abstract Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-75 bg-primary/20 rounded-full blur-[100px] opacity-50" />
            
            {/* Image Container */}
            <div className="relative aspect-square w-full max-w-100 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-black/10">
              
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50 text-muted-foreground">
                <Image
                  src="/profileImage.svg"
                  alt="Md. Shah Jamal Bachar"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                  priority
                /> 
              </div>
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 -left-6 hidden md:block">
               <div className="flex items-center gap-3 rounded-xl border border-border bg-card/80 p-4 shadow-lg backdrop-blur-md">
                 <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl">🏆</span>
                 </div>
                 <div>
                   <p className="text-sm font-medium text-muted-foreground">Experience</p>
                   <p className="text-lg font-bold text-foreground">20+ Years</p>
                 </div>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
}