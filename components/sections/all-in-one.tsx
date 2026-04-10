import Link from "next/link"
<<<<<<< HEAD
import { UtensilsCrossed, ShoppingBag, Building2 } from "lucide-react"

const productIcons = {
  "Restaurant POS": UtensilsCrossed,
  "Retail POS": ShoppingBag,
  "Hotel Management": Building2,
}
=======
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367

export function AllInOne() {
  const products = [
    {
      title: "Restaurant POS",
      tagline: "Complete Restaurant Management",
      description: "Streamline operations with KDS, digital menus, table management, and more",
      href: "/restaurant-pos",
      image: "/restaurant-pos-dashboard.jpg",
      features: ["Kitchen Display System", "Digital Menu", "Table Reservation"],
    },
    {
      title: "Retail POS",
      tagline: "Omnichannel Retail Solutions",
      description: "Optimize inventory and sales across multiple store locations",
      href: "/retail-pos",
      image: "/retail-inventory-management.png",
      features: ["Inventory Sync", "Multi-Store", "Analytics"],
    },
    {
      title: "Hotel Management",
      tagline: "Complete Hotel Technology",
      description: "Manage bookings, guests, and operations seamlessly",
      href: "/hotel-pos",
      image: "/hotel-booking-system.png",
      features: ["Room Management", "Bookings", "Guest Services"],
    },
  ]

  return (
<<<<<<< HEAD
    <section className="py-16 bg-[hsl(var(--background))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">All-in-One Business Software</h2>
=======
    <section className="py-12 bg-[hsl(var(--background))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">All-in-One Business Software</h2>
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Complete solutions tailored for restaurants, retail, and hotels
          </p>
        </div>
<<<<<<< HEAD
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = productIcons[product.title as keyof typeof productIcons]
            return (
              <Link
                key={product.title}
                href={product.href}
                className="group bg-[hsl(var(--card))] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]"
              >
                <div className="relative h-48 overflow-hidden bg-[hsl(var(--muted))]">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-[hsl(var(--primary))]" />
                    <span className="text-sm text-[hsl(var(--primary))] font-semibold">{product.tagline}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )
          })}
=======
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group bg-[hsl(var(--card))] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]"
            >
              <div className="relative h-48 overflow-hidden bg-[hsl(var(--muted))]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-[hsl(var(--primary))] font-semibold mb-2">{product.tagline}</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                  {product.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
