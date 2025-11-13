import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RinePOS - Modern POS Solutions",
  description: "Cloud-based POS system for restaurants, retail, and hotels. Manage your business with ease.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} flex flex-col min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col flex-1">
            {/* Main page content */}
            <main className="flex-grow">{children}</main>

            {/* Footer stays at bottom */}
            {/* You can also import Navigation above main if needed */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
