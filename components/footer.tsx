"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Footer() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="bg-[hsl(var(--card))] text-[hsl(var(--foreground))] py-4 px-4 sm:px-6 lg:px-8 dark:bg-[hsl(var(--card))] dark:text-[hsl(var(--foreground))] mt-auto">
      <div className="mx-auto max-w-7xl">
        {/* Main section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-60 mb-4">
          {/* Logo on far left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              {mounted && theme === "dark" ? (
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
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Products */}
            <div>
              <h3 className="font-semibold mb-2">Products</h3>
              <ul className="space-y-1 text-[hsl(var(--muted-foreground))]">
                <li>
                  <Link href="/restaurant-pos" className="hover:text-[hsl(var(--primary))] transition">
                    Restaurant POS
                  </Link>
                </li>
                <li>
                  <Link href="/retail-pos" className="hover:text-[hsl(var(--primary))] transition">
                    Retail POS
                  </Link>
                </li>
                <li>
                  <Link href="/hotel-pos" className="hover:text-[hsl(var(--primary))] transition">
                    Hotel Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-[hsl(var(--muted-foreground))]">
                <li>
                  <Link href="#" className="hover:text-[hsl(var(--primary))] transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-[hsl(var(--primary))] transition">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[hsl(var(--primary))] transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1 text-[hsl(var(--muted-foreground))]">
                <li>
                  <Link href="#" className="hover:text-[hsl(var(--primary))] transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[hsl(var(--primary))] transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[hsl(var(--primary))] transition">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-[hsl(var(--border))] pt-2 text-center text-[hsl(var(--muted-foreground))] text-sm">
          <p>&copy; 2025 RinePOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
