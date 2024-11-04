import React from "react"
import cx from "classnames"
import Link, { LinkProps } from "next/link"

interface Button extends LinkProps {
  theme?: "grey-100" | "white"
  iconLeft?: React.ReactNode
  children: React.ReactNode
}

export const ButtonLink = ({
  children,
  iconLeft,
  theme = "grey-100",
  ...props
}: Button) => (
  <Link
    {...props}
    className={cx(
      "rounded-lg leading-6 inline-block before:content-[''] before:w-12 before:h-40 before:absolute before:-left-1/4 before:-top-6 before:opacity-20 before:pointer-events-none before:block before:z-[-1] before:will-change-auto before:origin-top-right before:duration-700 before:transition-all before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:left-[150%] before:rotate-[35deg]",
      {
        "py-[15px] px-5 flex": iconLeft,
        "py-[15px] px-6": !iconLeft,
        "bg-white text-grey-90 border border-grey-20 font-semibold drop-shadow-md overflow-hidden relative before:bg-grey-40":
          theme === "white",
        "bg-grey-100 text-white border border-grey-100 font-semibold drop-shadow-md overflow-hidden relative before:bg-white":
          theme === "grey-100",
      }
    )}
  >
    {iconLeft && iconLeft}
    {children}
  </Link>
)
