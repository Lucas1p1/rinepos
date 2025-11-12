export function RestaurantFeatures() {
  const features = [
    {
      title: "Enhanced Customer Experience",
      description: "Elevate interactions for lasting customer satisfaction",
      icon: "👥",
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
      icon: "⚙️",
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
      icon: "📈",
      bullets: [
        "Labor cost optimization",
        "Waste reduction tracking",
        "Dynamic pricing capabilities",
        "Promotion management tools",
      ],
    },
  ]

  const systemFeatures = [
    { title: "Restaurant Point of Sale (POS)", icon: "🛒" },
    { title: "Kitchen Display System", icon: "📺" },
    { title: "Digital Menu - QR Menu", icon: "📱" },
    { title: "Table Reservation Software", icon: "📅" },
    { title: "Self-Ordering Kiosk", icon: "🖥️" },
    { title: "Loyalty Program Management", icon: "🎁" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[hsl(var(--foreground))] mb-2">
          Omega Software: All-in-One Restaurant POS and CRM Solution
        </h2>
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col">
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-[hsl(var(--primary))]/10 border-2 border-[hsl(var(--primary))]/30">
                <span className="text-4xl">{feature.icon}</span>
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
                <div className="text-3xl mb-3">{feature.icon}</div>
                <p className="font-semibold text-[hsl(var(--foreground))]">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
