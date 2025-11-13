"use client"

import Head from "next/head"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, MessageCircle, Mail } from "lucide-react"

export default function Support() {
  const supportOptions = [
    {
      title: "Phone Support",
      description: "Available 24/7 for urgent issues",
      icon: <Phone className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />,
    },
    {
      title: "Live Chat",
      description: "Instant assistance from our team",
      icon: <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />,
    },
    {
      title: "Email Support",
      description: "Detailed help for complex issues",
      icon: <Mail className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />,
    },
  ]

  return (
    <>
      <Head>
        <title>Support - RinePOS</title>
        <meta name="description" content="Get help and support from our expert team" />
      </Head>

      <Navigation />

      <main>
        <section className="py-20 md:py-12 bg-[hsl(var(--background))]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                We're Here to <span className="text-[hsl(var(--primary))]">Help</span>
              </h1>
              <p className="text-xl text-[hsl(var(--muted-foreground))]">
                World-class support available 24/7
              </p>
            </div>

            {/* Support Options */}
            <div className="grid md:grid-cols-3 gap-8">
              {supportOptions.map((option, idx) => (
                <div
                  key={idx}
                  className="bg-[hsl(var(--secondary))] p-8 rounded-lg text-center hover:shadow-lg transition-all"
                >
                  {option.icon}
                  <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
