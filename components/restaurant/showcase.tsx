import { Badge } from "@/components/ui/badge"

export function RestaurantShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Features Showcase</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">See It in Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience how our restaurant POS system transforms your dining operations with real-time kitchen management
            and seamless customer experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
            <img
              src="/restaurant-pos-system-kitchen-display.jpg"
              alt="Kitchen Display System"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 bg-card border-t border-border">
              <h3 className="font-bold text-lg text-foreground mb-2">Kitchen Display System</h3>
              <p className="text-muted-foreground">Real-time order management with visual queue handling</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
            <img src="/restaurant-pos-system-interface.jpg" alt="POS Interface" className="w-full h-96 object-cover" />
            <div className="p-6 bg-card border-t border-border">
              <h3 className="font-bold text-lg text-foreground mb-2">Smart POS Interface</h3>
              <p className="text-muted-foreground">Intuitive ordering and payment processing system</p>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">Key Capabilities</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">+</span>
              <div>
                <p className="font-semibold text-foreground">Multiple Payment Methods</p>
                <p className="text-sm text-muted-foreground">Accept cash, card, mobile, and online payments</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">+</span>
              <div>
                <p className="font-semibold text-foreground">Digital Menu System</p>
                <p className="text-sm text-muted-foreground">QR code ordering with real-time updates</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">+</span>
              <div>
                <p className="font-semibold text-foreground">Table Management</p>
                <p className="text-sm text-muted-foreground">Reservations and seating optimization</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">+</span>
              <div>
                <p className="font-semibold text-foreground">Analytics & Reports</p>
                <p className="text-sm text-muted-foreground">Real-time sales data and inventory insights</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
