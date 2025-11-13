import Link from "next/link"

export function Resources() {
  const resources = [
    {
      title: "Maximizing Efficiency in Fast Food Restaurants",
      description: "Learn proven strategies to boost sales and reduce costs",
      category: "Restaurant",
      link: "#",
    },
    {
      title: "The Complete Retailer's Success Guide",
      description: "Master inventory management and customer retention",
      category: "Retail",
      link: "#",
    },
    {
      title: "Modern Loyalty Programs for Hotel Guests",
      description: "Build recurring revenue with customer loyalty strategies",
      category: "Hospitality",
      link: "#",
    },
  ]

  return (
    <section className="py-12 bg-[hsl(var(--secondary))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Learn From Industry Experts</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">Access resources, guides, and best practices</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <Link
              key={idx}
              href={resource.link}
              className="bg-[hsl(var(--card))] p-8 rounded-xl border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:shadow-lg transition-all group"
            >
              <div className="inline-block px-3 py-1 bg-[hsl(var(--primary))]/10 rounded-full mb-4">
                <span className="text-[hsl(var(--primary))] text-xs font-semibold">{resource.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[hsl(var(--primary))] transition-colors">
                {resource.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">{resource.description}</p>
              <span className="text-[hsl(var(--primary))] font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
