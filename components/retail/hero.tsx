import { Button } from "@/components/ui/button"

export function RetailHero() {
  return (
    <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--secondary))]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-[hsl(var(--primary))]/10 rounded-full">
              <span className="text-[hsl(var(--primary))] font-semibold text-sm">For Retail</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-6 leading-tight">
              Retail Selling Made Easy
            </h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8 max-w-lg">
              A complete omnichannel POS system for retail with inventory management, loyalty programs, and multi-store
              support to scale your retail business.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-[hsl(var(--foreground))]">
                <span className="text-[hsl(var(--primary))] font-bold">✓</span> Retail Point of Sale (POS)
              </li>
              <li className="flex items-center gap-3 text-[hsl(var(--foreground))]">
                <span className="text-[hsl(var(--primary))] font-bold">✓</span> Inventory Management
              </li>
              <li className="flex items-center gap-3 text-[hsl(var(--foreground))]">
                <span className="text-[hsl(var(--primary))] font-bold">✓</span> Sales Analytics & Reporting
              </li>
              <li className="flex items-center gap-3 text-[hsl(var(--foreground))]">
                <span className="text-[hsl(var(--primary))] font-bold">✓</span> Multi-Store Management
              </li>
              <li className="flex items-center gap-3 text-[hsl(var(--foreground))]">
                <span className="text-[hsl(var(--primary))] font-bold">✓</span> Employee Management
              </li>
            </ul>
            <Button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:shadow-lg transition-all">
              Discover Our Retail POS System
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/retail-pos-system-inventory-management.jpg"
              alt="Retail POS System"
              className="w-full h-96 md:h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
