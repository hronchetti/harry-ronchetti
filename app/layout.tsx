import "../styles/swiper.css"
import "../styles/icons.css"
import "../styles/tailwind.css"

import { Footer } from "@/components"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
