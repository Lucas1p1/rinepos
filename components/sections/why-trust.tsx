"use client"

import {
  Cloud,
  BarChart3,
  MousePointerClick,
  Link2,
  Settings,
  Globe,
} from "lucide-react"

export function WhyTrust() {
  const reasons = [
    {
<<<<<<< HEAD
      icon: <Cloud className="w-9 h-9 text-[hsl(var(--primary))]" />,
=======
      icon: <Cloud className="w-10 h-10 text-[hsl(var(--primary))]" />,
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
      title: "Cloud & Offline Ready",
      description:
        "Cloud-based solution with full offline capability — works everywhere, anytime.",
    },
    {
<<<<<<< HEAD
      icon: <BarChart3 className="w-9 h-9 text-[hsl(var(--primary))]" />,
=======
      icon: <BarChart3 className="w-10 h-10 text-[hsl(var(--primary))]" />,
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
      title: "Advanced Analytics",
      description:
        "Powerful data visualization for insight-driven business decisions.",
    },
    {
<<<<<<< HEAD
      icon: <MousePointerClick className="w-9 h-9 text-[hsl(var(--primary))]" />,
=======
      icon: <MousePointerClick className="w-10 h-10 text-[hsl(var(--primary))]" />,
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
      title: "Intuitive Design",
      description:
        "Powerful solutions that are easy to use — minimal training required.",
    },
    {
<<<<<<< HEAD
      icon: <Link2 className="w-9 h-9 text-[hsl(var(--primary))]" />,
=======
      icon: <Link2 className="w-10 h-10 text-[hsl(var(--primary))]" />,
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
      title: "Fully Integrated",
      description:
        "Inventory, accounting, loyalty, payroll — everything connected.",
    },
    {
<<<<<<< HEAD
      icon: <Settings className="w-9 h-9 text-[hsl(var(--primary))]" />,
=======
      icon: <Settings className="w-10 h-10 text-[hsl(var(--primary))]" />,
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
      title: "Easy Management",
      description:
        "Designed to help you manage your business operations effortlessly.",
    },
    {
<<<<<<< HEAD
      icon: <Globe className="w-9 h-9 text-[hsl(var(--primary))]" />,
=======
      icon: <Globe className="w-10 h-10 text-[hsl(var(--primary))]" />,
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
      title: "World-Class Support",
      description:
        "24/7 customer support in multiple languages across the globe.",
    },
  ]

  return (
<<<<<<< HEAD
    <section className="py-16 bg-[hsl(var(--secondary))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Why Businesses Trust RinePOS
          </h2>
          <p className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
=======
    <section className="py-12 bg-[hsl(var(--secondary))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Businesses Trust RinePOS
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))]">
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
            We build sophisticated yet easy-to-use software customized for all businesses.
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-[hsl(var(--card))] p-7 rounded-xl border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:shadow-lg transition-all group"
=======
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-[hsl(var(--card))] p-8 rounded-xl border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:shadow-lg transition-all group"
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
<<<<<<< HEAD
              <h3 className="text-lg font-bold mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                {reason.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
=======
              <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
                {reason.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
