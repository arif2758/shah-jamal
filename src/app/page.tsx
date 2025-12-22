import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";

import About from "@/components/sections/about";
import Timeline from "@/components/sections/timeline";


import Social from "@/components/sections/social-work";
import BusinessSection from "@/components/sections/business-showcase";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <BusinessSection />
      <Social />
      <About />
      <Timeline />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
