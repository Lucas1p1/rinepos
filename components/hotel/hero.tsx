import { Button } from "@/components/ui/button"

export function HotelHero() {
  return (
    <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--secondary))]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-[hsl(var(--primary))]/10 rounded-full">
              <span className="text-[hsl(var(--primary))] font-semibold text-sm">For Hotels</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-6 leading-tight">
              Hotel Management System
            </h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8 max-w-lg">
              A robust hotel technology suite integrating POS, reservations, room management, and guest services to
              streamline your entire property operation.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-[hsl(var(--foreground))]">
                <span className="text-[hsl(var(--primary))] font-bold">✓</span> Hotel POS System
              </li>
              <li className="flex items-center gap-3 text-[hsl(var(--foreground))]">
                <span className="text-[hsl(var(--primary))] font-bold">✓</span> Reservation Management
              </li>
              <li className="flex items-center gap-3 text-[hsl(var(--foreground))]">
                <span className="text-[hsl(var(--primary))] font-bold">✓</span> Room Service Management
              </li>
              <li className="flex items-center gap-3 text-[hsl(var(--foreground))]">
                <span className="text-[hsl(var(--primary))] font-bold">✓</span> Guest Management & CRM
              </li>
              <li className="flex items-center gap-3 text-[hsl(var(--foreground))]">
                <span className="text-[hsl(var(--primary))] font-bold">✓</span> Billing & Analytics
              </li>
            </ul>
            <Button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:shadow-lg transition-all">
              Discover Our Hotel System
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/hotel-management-system-booking-interface.jpg"
              alt="Hotel Management System"
              className="w-full h-96 md:h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
