"use client"

import Head from "next/head"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, MessageCircle, Mail } from "lucide-react"
import { useRef } from "react"

export default function Support() {
  // Ripple effect handler
  const createRipple = (event: any) => {
    const card = event.currentTarget
    const ripple = document.createElement("span")

    const rect = card.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    ripple.style.position = "absolute"
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.background = "rgba(255,255,255,0.25)"
    ripple.style.borderRadius = "50%"
    ripple.style.pointerEvents = "none"
    ripple.style.transform = "scale(0)"
    ripple.style.animation = "ripple-effect 0.6s ease-out"

    card.appendChild(ripple)

    setTimeout(() => ripple.remove(), 600)
  }

  const supportOptions = [
    {
      title: "Phone Support",
      description: "+234 704 474 2610",
      icon: <Phone className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))] transition-transform duration-300 group-hover:scale-110" />,
      href: "tel:+2347044742610",
    },
    {
      title: "Live Chat",
      description: "Start a conversation",
      icon: <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))] transition-transform duration-300 group-hover:scale-110" />,
      href: "https://wa.me/2347044742610",
    },
    {
      title: "Email Support",
      description: "support@gabrinesolutions.com",
      icon: <Mail className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))] transition-transform duration-300 group-hover:scale-110" />,
      href: "mailto:support@gabrinesolutions.com",
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
                <a
                  key={idx}
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  onClick={createRipple}
                  className="
                    relative overflow-hidden group
                    bg-[hsl(var(--secondary))]
                    p-8 rounded-xl text-center
                    transition-all
                    block cursor-pointer
                    outline-none
                    hover:scale-[1.03]

                    hover:bg-[hsl(var(--secondary-hover))]
                    hover:shadow-[0_0_18px_rgba(0,0,0,0.35)]
                    dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]

                    focus-visible:ring-4
                    focus-visible:ring-[hsl(var(--primary)/0.35)]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[hsl(var(--background))]
                  "
                >
                  {option.icon}
                  <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    {option.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Ripple keyframes */}
      <style>{`
        @keyframes ripple-effect {
          to {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
