import { Inter } from "next/font/google"
import Script from "next/script"

import "../styles/swiper.css"
import "../styles/icons.css"
import "../styles/tailwind.css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Footer, HotJar } from "@/components"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "fallback",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <Footer />
      </body>
      <HotJar />
      <Script
        defer
        src="https://cdn-cookieyes.com/client_data/84520bfbdca9f626927b40b5/script.js"
      />
    </html>
  )
}
