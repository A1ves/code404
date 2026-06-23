import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SmoothScrollProvider from "@/components/smooth-scroll-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Code404 | Transformamos erros em experiências",
  description:
    "Agência de desenvolvimento web especializada em sites institucionais, landing pages, sistemas web e UX/UI design.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/LOGOCODE-LRJ.png",
        type: "image/png",
      },
    ],
    apple: "/LOGOCODE-LRJ.png",
  },
}

export const viewport = {
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} ${jetbrainsMono.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
