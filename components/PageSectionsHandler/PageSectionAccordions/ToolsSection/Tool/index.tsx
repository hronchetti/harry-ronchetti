import React from "react"

type Props = {
  logo: React.ReactNode
  name: string
}

export const Tool = ({ logo, name }: Props) => (
  <div className="pb-4 bg-white rounded-xl">
    <div className="flex justify-center w-full my-8">
      <div className="w-12 h-12">{logo}</div>
    </div>
    <span className="block w-full text-xs text-center text-grey-90">
      {name}
    </span>
  </div>
)
