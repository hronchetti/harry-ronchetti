import React from "react"
import cx from "classnames"

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "grey-100" | "white"
  iconLeft?: React.ReactNode
  children: React.ReactNode
}

export const Button = ({
  children,
  iconLeft,
  theme = "grey-100",
  ...props
}: Button) => (
  <button
    {...props}
    className={cx(
      "inline-block rounded-lg leading-6 before:pointer-events-none before:absolute before:-left-1/4 before:-top-6 before:z-[-1] before:block before:h-40 before:w-12 before:origin-top-right before:rotate-[35deg] before:opacity-20 before:transition-all before:duration-700 before:ease-[cubic-bezier(0.19,1,0.22,1)] before:will-change-auto before:content-[''] hover:before:left-[150%]",
      {
        "flex px-5 py-[15px]": iconLeft,
        "px-6 py-[15px]": !iconLeft,
        "relative overflow-hidden border border-grey-20 bg-white font-semibold text-grey-90 drop-shadow-md before:bg-grey-40":
          theme === "white",
        "relative overflow-hidden border border-grey-100 bg-grey-100 font-semibold text-white drop-shadow-md before:bg-white":
          theme === "grey-100",
      }
    )}
  >
    {iconLeft && iconLeft}
    {children}
  </button>
)
