import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Careers at RinePOS",
  description: "Join our growing team and help businesses manage better with RinePOS",
}

export default function CareersPage() {
  const positions = [
    {
      title: "Senior Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "Build scalable POS solutions for restaurants, retail, and hotels. Work with React, Node.js, and cloud technologies.",
    },
    {
      title: "Product Designer",
      location: "Hybrid",
      type: "Full-time",
      description:
        "Design intuitive interfaces for our next-generation POS platform. Shape the future of point-of-sale systems.",
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Manage our cloud infrastructure and ensure 99.9% uptime for businesses relying on RinePOS daily.",
    },
    {
      title: "Customer Success Manager",
      location: "On-site",
      type: "Full-time",
      description: "Help our restaurant, retail, and hotel clients succeed with their POS implementations.",
    },
    {
      title: "Sales Executive",
      location: "Hybrid",
      type: "Full-time",
      description: "Drive growth by connecting with business owners and helping them discover the RinePOS advantage.",
    },
    {
      title: "QA Automation Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Ensure quality and reliability across our entire product suite with automated testing strategies.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="bg-[hsl(var(--background))]">
        {/* Hero Section */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join the RinePOS Team</h1>
            <p className="text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl mx-auto">
              We're building the future of point-of-sale systems. If you're passionate about technology and helping
              businesses succeed, we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-[hsl(var(--secondary))]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Join RinePOS?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Impactful Work",
                  description:
                    "Your work directly impacts thousands of businesses worldwide using our POS systems daily.",
                },
                {
                  title: "Growing Company",
                  description:
                    "Join a rapidly scaling startup with significant investment and market traction in the POS industry.",
                },
                {
                  title: "Competitive Benefits",
                  description:
                    "Competitive salary, health insurance, unlimited PTO, and professional development opportunities.",
                },
                {
                  title: "Remote-First Culture",
                  description: "Work from anywhere with flexible arrangements that prioritize work-life balance.",
                },
                {
                  title: "Career Growth",
                  description: "Clear career paths and mentorship from industry experts in fintech and POS systems.",
                },
                {
                  title: "Innovation Focus",
                  description:
                    "Use cutting-edge tech stack and contribute to products used by thousands of businesses.",
                },
              ].map((benefit, idx) => (
                <div key={idx} className="card-hover bg-[hsl(var(--card))] p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Open Positions</h2>
            <div className="space-y-4">
              {positions.map((position, idx) => (
                <div
                  key={idx}
                  className="card-hover bg-[hsl(var(--card))] p-6 rounded-lg border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-[hsl(var(--primary))]">{position.title}</h3>
                      <p className="text-[hsl(var(--muted-foreground))] mb-2">{position.description}</p>
                      <div className="flex gap-4 text-sm text-[hsl(var(--muted-foreground))]">
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Button className="btn-glow bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Don't see your role?</h2>
            <p className="text-lg mb-8 opacity-90">
              We're always looking for talented individuals to join our team. Send us your resume and let's talk.
            </p>
            <Button size="lg" className="btn-glow bg-white text-[hsl(var(--primary))] hover:bg-slate-100">
              Send Your Resume
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
