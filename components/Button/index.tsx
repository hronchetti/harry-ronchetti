import React from "react"
import Link from "next/link"

type Button = {
  children: React.ReactNode
  style: "white" | "grey-100" | "outline" | "text"
  href: string
  external?: boolean
  variant?: "nav"
}

export const Button = ({
  children,
  style,
  href,
  external = false,
  variant,
}: Button) => {
  const hoverEffect =
    "before:content-[''] before:w-12 before:h-40 before:absolute before:-left-1/4 before:-top-6 before:opacity-20 before:pointer-events-none before:block before:z-[-1] before:will-change-auto before:origin-top-right before:duration-700 before:transition-all before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:left-[150%] before:rotate-[35deg]"

  const styles =
    style === "grey-100"
      ? "bg-grey-100 text-white border-grey-100 font-semibold drop-shadow-md overflow-hidden relative before:bg-white " +
        hoverEffect
      : style === "white"
      ? "bg-white text-grey-90 border-white font-semibold drop-shadow-md before:bg-grey-40 " +
        hoverEffect
      : style === "outline"
      ? "text-grey-60 border-grey-30 font-medium overflow-hidden relative before:bg-grey-40 " +
        hoverEffect
      : // style === "text"
        "font-normal underline hover:no-underline text-grey-60 border-transparent"

  const navButtonSizing = "py-1.5 md:py-2.5 px-2.5 md:px-[1.125rem]"

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`rounded-lg leading-6 inline-block border-2 ${
            variant === "nav" ? navButtonSizing : "py-3.5 px-[1.375rem]"
          } ${styles}`}
        >
          {children}
        </a>
      )
    } else {
      return (
        <Link
          href={href}
          className={`rounded-lg leading-6 inline-block border-2 ${
            variant === "nav" ? navButtonSizing : "py-3.5 px-[1.375rem]"
          } ${styles}`}
        >
          {children}
        </Link>
      )
    }
  } else {
    return (
      <button
        className={`rounded-lg leading-6 inline-block border-2 ${
          variant === "nav" ? navButtonSizing : "py-3.5 px-[1.375rem]"
        } ${styles}`}
      >
        {children}
      </button>
    )
  }
}
