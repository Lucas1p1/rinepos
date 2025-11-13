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
    <nav className="sticky top-0 z-50 w-full bg-[hsl(var(--background))] dark:bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] shadow-sm transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-13 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {theme === "dark" ? (
              <img
                src="/RinePOS Dark.png"
                alt="RinePOS Dark Logo"
                className="h-30 w-max"
              />
            ) : (
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RinePOS%20copy%406x-eP66qnEjqsUkegLPQ5Sk8Ifq0y1v7m.png"
                alt="RinePOS Light Logo"
                className="h-30 w-max"
              />
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--primary))] transition"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--primary))] transition">
                Products
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-[hsl(var(--card))] dark:bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2">
                <Link
                  href="/restaurant-pos"
                  className="block px-4 py-2 text-sm text-[hsl(var(--foreground))] dark:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary))]/10 dark:hover:bg-[hsl(var(--primary))]/20 transition"
                >
                  Restaurant POS
                </Link>
                <Link
                  href="/retail-pos"
                  className="block px-4 py-2 text-sm text-[hsl(var(--foreground))] dark:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary))]/10 dark:hover:bg-[hsl(var(--primary))]/20 transition"
                >
                  Retail POS
                </Link>
                <Link
                  href="/hotel-pos"
                  className="block px-4 py-2 text-sm text-[hsl(var(--foreground))] dark:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary))]/10 dark:hover:bg-[hsl(var(--primary))]/20 transition"
                >
                  Hotel Management
                </Link>
              </div>
            </div>
            <Link
              href="/pricing"
              className="text-sm font-medium text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--primary))] transition"
            >
              Pricing
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--primary))] transition"
            >
              Careers
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] dark:hover:text-[hsl(var(--primary))] transition"
            >
              Support
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-[hsl(var(--muted))] dark:hover:bg-[hsl(var(--muted))] transition"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
              ) : (
                <Moon className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
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
          <div className="md:hidden pb-4 space-y-2 border-t border-[hsl(var(--border))]">
            <Link
              href="/"
              className="block px-4 py-2 text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))] dark:hover:bg-[hsl(var(--muted))] transition"
            >
              Home
            </Link>
            <Link
              href="/restaurant-pos"
              className="block px-4 py-2 text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))] dark:hover:bg-[hsl(var(--muted))] transition"
            >
              Restaurant POS
            </Link>
            <Link
              href="/retail-pos"
              className="block px-4 py-2 text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))] dark:hover:bg-[hsl(var(--muted))] transition"
            >
              Retail POS
            </Link>
            <Link
              href="/hotel-pos"
              className="block px-4 py-2 text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))] dark:hover:bg-[hsl(var(--muted))] transition"
            >
              Hotel Management
            </Link>
            <Link
              href="/pricing"
              className="block px-4 py-2 text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))] dark:hover:bg-[hsl(var(--muted))] transition"
            >
              Pricing
            </Link>
            <Link
              href="/careers"
              className="block px-4 py-2 text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))] dark:hover:bg-[hsl(var(--muted))] transition"
            >
              Careers
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
