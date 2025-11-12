import { Button } from "@/components/ui/button"

export function Features() {
  const features = [
    {
      title: "Restaurant POS System",
      category: "Restaurant Management",
      description: "Complete restaurant operations management with everything from order taking to customer loyalty",
      features: [
        "Restaurant Point of Sale (POS)",
        "Kitchen Display System",
        "Digital Menu & QR Code Ordering",
        "Table Reservation Software",
        "Self-Ordering Kiosk",
        "Real-time Inventory Tracking",
      ],
      image: "/restaurant-pos-system-dashboard.jpg",
      cta: "Explore Restaurant POS",
      link: "/restaurant-pos",
    },
    {
      title: "Retail POS System",
      category: "Retail Management",
      description: "Complete retail management across multiple store locations with integrated inventory and analytics",
      features: [
        "Retail Point of Sale (POS)",
        "Inventory Management System",
        "Loyalty Program Management",
        "Sales Analytics & Reporting",
        "Multi-Store Management",
        "Employee & Staff Management",
      ],
      image: "/retail-inventory-system.png",
      cta: "Explore Retail POS",
      link: "/retail-pos",
    },
    {
      title: "Hotel Management System",
      category: "Hospitality",
      description: "Integrated hotel technology suite for reservations, operations, and guest management",
      features: [
        "Hotel POS & Point of Sale",
        "Property Management System",
        "Online Reservation System",
        "Room Service Management",
        "Guest Management & CRM",
        "Billing & Financial Analytics",
      ],
      image: "/hotel-management-system.jpg",
      cta: "Explore Hotel System",
      link: "/hotel-pos",
    },
  ]

  return (
    <section className="py-24 bg-[hsl(var(--background))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Leading Business Solutions</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Comprehensive POS and management systems for every type of business
          </p>
        </div>
        <div className="space-y-24">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "md:grid-cols-2" : ""}`}
            >
              <div className={idx % 2 === 1 ? "md:order-last" : ""}>
                <div className="inline-block px-3 py-1 bg-[hsl(var(--primary))]/10 rounded-full mb-4">
                  <span className="text-[hsl(var(--primary))] text-xs font-semibold">{feature.category}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">{feature.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {feature.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[hsl(var(--primary))] font-bold mt-1">✓</span>
                      <span className="text-[hsl(var(--foreground))]">{f}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:shadow-lg transition-all">
                  {feature.cta}
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
