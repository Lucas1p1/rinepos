import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--secondary))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1 md:py-1">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-[hsl(var(--primary))]/10 rounded-full">
              <span className="text-[hsl(var(--primary))] font-semibold text-sm">Trusted by 50,000+ Businesses</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Grow Your Business With
              <span className="text-[hsl(var(--primary))] block"> RinePOS</span>
            </h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8 leading-relaxed max-w-lg">
              Cloud-based and offline POS system. Manage every aspect of your business, drive growth, and enhance
              customer experience with incredible ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:shadow-lg transition-all"
              >
                Request Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] bg-transparent"
              >
                Watch Video
              </Button>
            </div>
          </div>
          <div className="relative h-96 md:h-auto rounded-2xl overflow-hidden shadow-2xl">
            <img src="/modern-pos-dashboard-with-blue-interface.jpg" alt="RinePOS Dashboard" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
