import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--card))] text-[hsl(var(--foreground))] py-16 px-4 sm:px-6 lg:px-8 dark:bg-[hsl(var(--card))] dark:text-[hsl(var(--foreground))]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 80 80" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" fill="none" />
                <path d="M28 28 L52 28 L52 40 L28 40 Z M28 40 L52 40 L52 52 L28 52 Z" fill="currentColor" />
                <path d="M40 28 L52 28 L40 40 Z" fill="hsl(var(--primary))" />
              </svg>
              <span className="font-bold text-lg">RinePOS</span>
            </div>
            <p className="text-[hsl(var(--muted-foreground))]">
              Modern POS solutions for restaurants, retail, and hotels worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
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

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
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

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
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

        <div className="border-t border-[hsl(var(--border))] pt-8 text-center text-[hsl(var(--muted-foreground))]">
          <p>&copy; 2025 RinePOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
