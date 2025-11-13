"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))] shadow-sm bg-[hsl(var(--background))]/95 backdrop-blur-lg transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 hover:scale-[1.02] transition-transform duration-300">
            {theme === "dark" ? (
              <img
                src="/RinePOS Dark.png"
                alt="RinePOS Dark Logo"
                className="h-10 w-auto"
              />
            ) : (
              <img
                src="/RinePOS Dark.png"
                alt="RinePOS Light Logo"
                className="h-10 w-auto"
              />
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/pricing", label: "Pricing" },
              { href: "/careers", label: "Careers" },
              { href: "/support", label: "Support" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-[hsl(var(--muted-foreground))] transition-all duration-300 
                hover:text-[hsl(var(--primary))] hover:drop-shadow-[0_0_6px_hsl(var(--primary))]"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[hsl(var(--primary))] transition-all duration-300 group-hover:w-full hover:w-full rounded-full"></span>
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-[hsl(var(--muted-foreground))] transition-all duration-300 hover:text-[hsl(var(--primary))] hover:drop-shadow-[0_0_6px_hsl(var(--primary))]">
                Products
              </button>
              <div className="absolute left-0 mt-2 w-52 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 backdrop-blur-md">
                {[
                  { href: "/restaurant-pos", label: "🍽️ Restaurant POS" },
                  { href: "/retail-pos", label: "🛍️ Retail POS" },
                  { href: "/hotel-pos", label: "🏨 Hotel Management" },
                ].map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="block px-4 py-2 text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary))]/15 hover:translate-x-1 transition-all duration-300 rounded-md"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:scale-110 transition-all duration-300 hover:shadow-[0_0_10px_hsl(var(--primary))]"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
              ) : (
                <Moon className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:scale-110 transition-transform duration-300"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-[hsl(var(--muted-foreground))]" />
              ) : (
                <Menu className="w-6 h-6 text-[hsl(var(--muted-foreground))]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-[hsl(var(--border))] animate-fadeIn">
            {[
              { href: "/", label: "Home" },
              { href: "/restaurant-pos", label: "Restaurant POS" },
              { href: "/retail-pos", label: "Retail POS" },
              { href: "/hotel-pos", label: "Hotel Management" },
              { href: "/pricing", label: "Pricing" },
              { href: "/careers", label: "Careers" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))]/40 transition-all duration-300 rounded-lg hover:shadow-[0_0_8px_hsl(var(--primary))]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
