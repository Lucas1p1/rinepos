import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HotelHero } from "@/components/hotel/hero"
import { HotelFeatures } from "@/components/hotel/features"
import { HotelShowcase } from "@/components/hotel/showcase"

export const metadata = {
  title: "Hotel Management System | RinePOS",
  description: "Complete hotel management solution with POS, reservations, and guest management.",
}

export default function HotelPOS() {
  return (
    <>
      <Navigation />
      <HotelHero />
      <HotelFeatures />
      <HotelShowcase />
      <Footer />
    </>
  )
}
