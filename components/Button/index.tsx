import React from "react"
import Link from "next/link"

type Button = {
  children: React.ReactNode
  style: "white" | "grey-100" | "outline" | "text"
  href: string
  external?: boolean
}

export const Button = ({ children, style, href, external = false }: Button) => {
  const styles =
    style === "grey-100"
      ? "bg-grey-100 text-white font-semibold"
      : style === "white"
      ? "bg-white text-grey-90 font-semibold"
      : style === "outline"
      ? "bg-white text-grey-60 border-grey-30 font-medium"
      : "font-normal text-underline"

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`rounded-lg px-6 py-4 inline-block ${styles}`}
        >
          {children}
        </a>
      )
    } else {
      return (
        <Link
          href={href}
          className={`rounded-lg px-6 py-4 inline-block ${styles}`}
        >
          {children}
        </Link>
      )
    }
  } else {
    return (
      <button className={`rounded-lg px-6 py-4 inline-block ${styles}`}>
        {children}
      </button>
    )
  }
}
