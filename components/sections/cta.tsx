import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-12 bg-gradient-to-r from-[hsl(var(--primary))]/10 to-[hsl(var(--primary))]/5 border-t border-[hsl(var(--border))]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-[hsl(var(--muted-foreground))] mb-8 leading-relaxed">
          Join thousands of successful businesses using RinePOS to streamline operations, increase profitability, and
          deliver exceptional customer experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:shadow-lg transition-all"
          >
            Schedule a Free Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] bg-transparent"
          >
            Contact Sales
          </Button>
        </div>
        <p className="text-sm text-[hsl(var(--muted-foreground))] mt-6">
          No credit card required. Get started in minutes.
        </p>
      </div>
    </section>
  )
}
