"use client"

import { useState } from "react"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import IntroSplash from "@/components/intro-splash"

export default function Home() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && <IntroSplash onDone={() => setIntroDone(true)} logoSrc="/LOGOCODE-LRJ.png" />}

      <main
        className="min-h-screen bg-background"
      >
        <div>
          <Header />
          <HeroSection introDone={introDone} />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  )
}
