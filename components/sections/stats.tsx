export function Stats() {
  const stats = [
    { number: "50K+", label: "Businesses Served", icon: "🏢" },
    { number: "100+", label: "Countries Worldwide", icon: "🌍" },
    { number: "30+", label: "Years of Innovation", icon: "🚀" },
    { number: "24/7", label: "Customer Support", icon: "💬" },
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-[hsl(var(--primary-foreground))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">By The Numbers</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Trusted by businesses worldwide</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center hover:transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
