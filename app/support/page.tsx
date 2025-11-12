import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Support - RinePOS",
  description: "Get help and support from our expert team",
}

export default function Support() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-20 md:py-32 bg-[hsl(var(--background))]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                We're Here to
                <span className="text-[hsl(var(--primary))]"> Help</span>
              </h1>
              <p className="text-xl text-[hsl(var(--muted-foreground))]">World-class support available 24/7</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[hsl(var(--secondary))] p-8 rounded-lg text-center">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-2xl font-bold mb-4">Phone Support</h3>
                <p className="text-[hsl(var(--muted-foreground))]">Available 24/7 for urgent issues</p>
              </div>
              <div className="bg-[hsl(var(--secondary))] p-8 rounded-lg text-center">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
                <p className="text-[hsl(var(--muted-foreground))]">Instant assistance from our team</p>
              </div>
              <div className="bg-[hsl(var(--secondary))] p-8 rounded-lg text-center">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-2xl font-bold mb-4">Email Support</h3>
                <p className="text-[hsl(var(--muted-foreground))]">Detailed help for complex issues</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
