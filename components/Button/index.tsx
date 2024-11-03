import React from "react"
import cx from "classnames"
import Link, { LinkProps } from "next/link"

interface Button extends LinkProps {
  style?: "grey-100" | "white"
  iconLeft?: React.ReactNode
  children: React.ReactNode
}

export const Button = ({
  children,
  iconLeft,
  style = "grey-100",
  ...props
}: Button) => (
  <Link
    {...props}
    className={cx(
      "rounded-lg leading-6 inline-block before:content-[''] before:w-12 before:h-40 before:absolute before:-left-1/4 before:-top-6 before:opacity-20 before:pointer-events-none before:block before:z-[-1] before:will-change-auto before:origin-top-right before:duration-700 before:transition-all before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:left-[150%] before:rotate-[35deg]",
      {
        "py-4 px-5 flex": iconLeft,
        "py-3.5 px-[1.375rem]": !iconLeft,
        "bg-white text-grey-90 border-white font-semibold drop-shadow-md overflow-hidden relative before:bg-grey-40":
          style === "white",
        "bg-grey-100 text-white border-grey-100 font-semibold drop-shadow-md overflow-hidden relative before:bg-white":
          style === "grey-100",
      }
    )}
  >
    {iconLeft && iconLeft}
    {children}
  </Link>
)
