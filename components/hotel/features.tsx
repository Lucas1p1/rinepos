import { Button } from "@/components/ui/button"
import { Package, Star, BookOpen } from "lucide-react"

export function HotelFeatures() {
  const features = [
    {
      title: "Hotel Inventory Management",
      icon: Package,
      bullets: [
        "Track Purchases",
        "Expiry Date Management",
        "Multiple Branches Stock",
        "Low stock alerts",
        "Inventory forecasting",
      ],
      cta: "Explore Inventory Management",
    },
    {
      title: "Hotel Loyalty Program",
      icon: Star,
      bullets: [
        "Turn visitors into Clients",
        "Centrally Managed Customer Profiles",
        "Complete Reservation History",
        "Reward point system",
        "Member tier management",
      ],
      cta: "Explore Loyalty Program",
    },
    {
      title: "Accounting System",
      icon: BookOpen,
      bullets: [
        "Accounting Transactions in One Place",
        "Cloud-based Accounting System",
        "Business Insights Made Simple",
        "Financial reporting",
        "Budget tracking",
      ],
      cta: "Explore Accounting System",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[hsl(var(--foreground))] mb-2">
          A Complete Hotel Management System
        </h2>
        <div className="flex justify-center mb-14">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-[hsl(var(--card))] rounded-xl border border-[hsl(var(--border))] overflow-hidden hover:border-[hsl(var(--primary))] hover:shadow-lg transition-all"
              >
                <div className="bg-[hsl(var(--primary))]/10 p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 border-2 border-[hsl(var(--primary))]/30 mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--foreground))]">{feature.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2.5 mb-6">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[hsl(var(--primary))] font-bold mt-0.5 text-sm">✓</span>
                        <span className="text-[hsl(var(--foreground))] text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 bg-transparent"
                  >
                    {feature.cta}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}