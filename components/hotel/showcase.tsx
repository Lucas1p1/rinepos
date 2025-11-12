import { Badge } from "@/components/ui/badge"

export function HotelShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Features Showcase</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">See It in Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrate all hotel operations with a unified platform for bookings, guest services, and revenue management.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
            <img
              src="/hotel-management-system-booking-interface.jpg"
              alt="Booking System"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 bg-card border-t border-border">
              <h3 className="font-bold text-lg text-foreground mb-2">Booking Management</h3>
              <p className="text-muted-foreground">Centralized reservation and guest management</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
            <img
              src="/hotel-management-system-interface.jpg"
              alt="Guest Dashboard"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 bg-card border-t border-border">
              <h3 className="font-bold text-lg text-foreground mb-2">Property Dashboard</h3>
              <p className="text-muted-foreground">Real-time occupancy and revenue tracking</p>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">Key Capabilities</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">+</span>
              <div>
                <p className="font-semibold text-foreground">Channel Management</p>
                <p className="text-sm text-muted-foreground">Sync bookings across all OTA platforms</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">+</span>
              <div>
                <p className="font-semibold text-foreground">Room Service</p>
                <p className="text-sm text-muted-foreground">Seamless in-room dining and requests</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">+</span>
              <div>
                <p className="font-semibold text-foreground">Guest Profiles</p>
                <p className="text-sm text-muted-foreground">Personalized experiences and history</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">+</span>
              <div>
                <p className="font-semibold text-foreground">Revenue Optimization</p>
                <p className="text-sm text-muted-foreground">Dynamic pricing and yield management</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
