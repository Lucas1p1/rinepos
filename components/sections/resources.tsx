import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
    <section className="py-16 bg-[hsl(var(--secondary))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Learn From Industry Experts</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">Access resources, guides, and best practices</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, idx) => (
            <Link
              key={idx}
              href={resource.link}
              className="bg-[hsl(var(--card))] p-7 rounded-xl border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:shadow-lg transition-all group"
            >
              <div className="inline-block px-2.5 py-1 bg-[hsl(var(--primary))]/10 rounded-md mb-4">
                <span className="text-[hsl(var(--primary))] text-xs font-semibold tracking-wide uppercase">{resource.category}</span>
              </div>
              <h3 className="text-lg font-bold mb-2.5 group-hover:text-[hsl(var(--primary))] transition-colors leading-snug">
                {resource.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] mb-5 text-sm leading-relaxed">{resource.description}</p>
              <span className="text-[hsl(var(--primary))] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
