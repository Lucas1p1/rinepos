import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RinePOS - Modern POS Solutions",
  description:
    "Cloud-based POS system for restaurants, retail, and hotels. Manage your business with ease.",
  icons: {
    icon: "/RinePOS L.png", // Default icon now LIGHT mode
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Dynamic favicon changer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function updateFavicon() {
                const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
                const icon = document.querySelector("link[rel='icon']");
                if (icon) {
                  icon.href = theme === 'dark' ? '/RinePOS D.png' : '/RinePOS L.png';
                }
              }
              // Listen for theme changes
              const observer = new MutationObserver(updateFavicon);
              observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
              // Run on first load
              updateFavicon();
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.className} flex flex-col min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"  // <-- LIGHT mode is now default
          enableSystem={false}
        >
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
