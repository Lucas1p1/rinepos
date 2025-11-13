"use client"

import {
  UserCheck,
  Layers,
  DollarSign,
  CreditCard,
  MonitorSmartphone,
  QrCode,
  CalendarCheck,
  Tablet,
  Star,
} from "lucide-react"

export function RestaurantFeatures() {
  const features = [
    {
      title: "Enhanced Customer Experience",
      description: "Elevate interactions for lasting customer satisfaction",
      icon: <UserCheck className="w-10 h-10 text-[hsl(var(--primary))]" />,
      bullets: [
        "Digital menu with real-time updates",
        "QR code ordering and payment",
        "Table management automation",
        "Online reservation system",
      ],
    },
    {
      title: "Manage Multiple Branches",
      description: "Provide a seamless multichannel experience",
      icon: <Layers className="w-10 h-10 text-[hsl(var(--primary))]" />,
      bullets: [
        "Centralized menu management",
        "Multi-location inventory sync",
        "Unified reporting dashboard",
        "Branch-level analytics",
      ],
    },
    {
      title: "Boost Sales & Reduce Cost",
      description: "Optimize profitability through strategic efficiency",
      icon: <DollarSign className="w-10 h-10 text-[hsl(var(--primary))]" />,
      bullets: [
        "Labor cost optimization",
        "Waste reduction tracking",
        "Dynamic pricing capabilities",
        "Promotion management tools",
      ],
    },
  ]

  const systemFeatures = [
    {
      title: "Restaurant Point of Sale (POS)",
      icon: <CreditCard className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--primary))]" />,
    },
    {
      title: "Kitchen Display System",
      icon: <MonitorSmartphone className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--primary))]" />,
    },
    {
      title: "Digital Menu - QR Menu",
      icon: <QrCode className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--primary))]" />,
    },
    {
      title: "Table Reservation Software",
      icon: <CalendarCheck className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--primary))]" />,
    },
    {
      title: "Self-Ordering Kiosk",
      icon: <Tablet className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--primary))]" />,
    },
    {
      title: "Loyalty Program Management",
      icon: <Star className="w-8 h-8 mx-auto mb-2 text-[hsl(var(--primary))]" />,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-[hsl(var(--foreground))] mb-2">
          Rine Software: All-in-One Restaurant POS and CRM Solution
        </h2>
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col bg-[hsl(var(--card))] rounded-xl p-6 border border-[hsl(var(--border))] hover:shadow-lg hover:border-[hsl(var(--primary))] transition-all"
            >
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-[hsl(var(--primary))]/10 border-2 border-[hsl(var(--primary))]/30 hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-2">{feature.title}</h3>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[hsl(var(--primary))] font-bold mt-0.5">+</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* System Features */}
        <div>
          <h3 className="text-2xl font-bold text-center text-[hsl(var(--foreground))] mb-12">
            Core Restaurant Management Features
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {systemFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[hsl(var(--secondary))] p-6 rounded-lg text-center hover:shadow-lg hover:bg-[hsl(var(--card))] transition-all hover:border-[hsl(var(--primary))] border border-[hsl(var(--border))]"
              >
                {feature.icon}
                <p className="font-semibold text-[hsl(var(--foreground))]">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
