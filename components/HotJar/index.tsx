"use client"

import React from "react"
import { hotjar } from "react-hotjar"

export const HotJar = () => {
  React.useEffect(() => {
    process.env.NEXT_PUBLIC_ENV === "prod" && hotjar.initialize(1814578, 6)
  }, [])
  return <></>
}
