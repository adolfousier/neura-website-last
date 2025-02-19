"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CaseStudies } from "@/components/case-studies"
import { About } from "@/components/about"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-full overflow-hidden">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <Features />
        <Stats />
        <Testimonials />
        <CaseStudies />
        <About />
        <CTASection />
      </main>
    </div>
  )
}

