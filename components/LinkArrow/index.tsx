import React from "react"
import Link from "next/link"

type Props = {
  children: React.ReactNode
  external: boolean
  href: string
  icon: "external-link" | "arrow-right"
}

export const LinkArrow = ({ children, external, href, icon }: Props) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex justify-start group"
      >
        <span className="block leading-6">{children}</span>
        <span
          className={`icon-${icon} block text-2xl leading-6 pl-2 group-hover:pl-3 transition-all will-change-auto`}
        />
      </a>
    )
  } else {
    return (
      <Link href={href} className="flex justify-start group">
        <span className="block leading-6">{children}</span>
        <span
          className={`icon-${icon} block text-2xl leading-6 pl-2 group-hover:pl-3 transition-all will-change-auto`}
        />
      </Link>
    )
  }
}
