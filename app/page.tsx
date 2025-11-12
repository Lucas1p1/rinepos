import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { AllInOne } from "@/components/sections/all-in-one"
import { WhyTrust } from "@/components/sections/why-trust"
import { Features } from "@/components/sections/features"
import { Stats } from "@/components/sections/stats"
import { Resources } from "@/components/sections/resources"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "RinePOS - Modern POS Solutions",
  description: "Cloud-based and offline POS system for restaurants, retail, and hotels",
}

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <AllInOne />
      <Features />
      <WhyTrust />
      <Stats />
      <Resources />
      <CTA />
      <Footer />
    </>
  )
}
