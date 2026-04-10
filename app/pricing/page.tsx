import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingPlans } from "@/components/pricing/plans"
import { PricingFAQ } from "@/components/pricing/faq"

export const metadata = {
  title: "Pricing | RinePOS",
  description: "Choose the perfect plan for your business. Flexible pricing for restaurants, retail, and hotels.",
}

export default function Pricing() {
  return (
    <>
      <Navigation />
      <PricingPlans />
      <PricingFAQ />
      <Footer />
    </>
  )
}
