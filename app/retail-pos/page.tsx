import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RetailHero } from "@/components/retail/hero"
import { RetailFeatures } from "@/components/retail/features"
import { RetailShowcase } from "@/components/retail/showcase"

export const metadata = {
  title: "Retail POS System | RinePOS",
  description: "Retail management made simple. Inventory, sales, and customer analytics in one platform.",
}

export default function RetailPOS() {
  return (
    <>
      <Navigation />
      <RetailHero />
      <RetailFeatures />
      <RetailShowcase />
      <Footer />
    </>
  )
}
