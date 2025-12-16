import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";

import About from "@/components/sections/about";

import Footer from "@/components/sections/footer";
import Social from "@/components/sections/social-work";
import BusinessSection from "@/components/sections/business-showcase";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <BusinessSection />

      <Social />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
