import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RestaurantHero } from "@/components/restaurant/hero"
import { RestaurantFeatures } from "@/components/restaurant/features"
import { RestaurantShowcase } from "@/components/restaurant/showcase"

export const metadata = {
  title: "Restaurant POS System | RinePOS",
  description: "All-in-one restaurant management system with kitchen display, table reservations, and digital menus.",
}

export default function RestaurantPOS() {
  return (
    <>
      <Navigation />
      <RestaurantHero />
      <RestaurantFeatures />
      <RestaurantShowcase />
      <Footer />
    </>
  )
}
