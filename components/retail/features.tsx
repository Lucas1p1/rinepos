export function RetailFeatures() {
  const categoryFeatures = [
    { icon: "🛒", label: "Supermarket" },
    { icon: "👕", label: "Clothing Store" },
    { icon: "💻", label: "Electronic Store" },
    { icon: "🎁", label: "Gift & Toy" },
    { icon: "🔧", label: "Hardware Store" },
    { icon: "💅", label: "Beauty Salon" },
    { icon: "📚", label: "Book Shop" },
    { icon: "🧺", label: "Laundry" },
  ]

  const keyFeatures = [
    {
      title: "Manage item serial numbers",
      description: "Track individual items with unique identifiers",
    },
    {
      title: "Integrate with payment gateways",
      description: "Accept all major payment methods securely",
    },
    {
      title: "Organize product color & size",
      description: "Manage inventory variants efficiently",
    },
    {
      title: "Connect with multiple retail locations",
      description: "Sync inventory across all store locations",
    },
    {
      title: "Generate and print barcode labels",
      description: "Print and manage product barcodes",
    },
    {
      title: "Sync with accounting systems",
      description: "Automate financial reconciliation",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[hsl(var(--foreground))] mb-2">
          All-in-One POS System for Retail
        </h2>
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-20">
          {categoryFeatures.map((cat) => (
            <div key={cat.label} className="flex flex-col items-center text-center group cursor-pointer">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 border-2 border-[hsl(var(--primary))]/30 group-hover:scale-110 transition-transform duration-300 group-hover:border-[hsl(var(--primary))]">
                <span className="text-3xl">{cat.icon}</span>
              </div>
              <p className="text-sm font-medium text-[hsl(var(--foreground))]">{cat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[hsl(var(--secondary))] rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-8 text-center">
            Leading POS System For Retail
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mt-1">
                  <span className="text-[hsl(var(--primary-foreground))] text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-[hsl(var(--foreground))] font-medium">{feature.title}</p>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
