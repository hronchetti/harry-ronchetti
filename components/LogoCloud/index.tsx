"use client"

import React from "react"

import BreezeLogo from "../../lib/logos/clients/breeze-logo.svg"
import CleverClinicLogo from "../../lib/logos/clients/clever-clinic-logo.svg"
import GotTheTestLogo from "../../lib/logos/clients/gotthetest-logo.svg"
import PFNexusLogo from "../../lib/logos/clients/pf-nexus-logo.svg"
import ReclaroLogo from "../../lib/logos/clients/reclaro-logo.svg"
import WilderLogo from "../../lib/logos/clients/wilder-logo.svg"

type Props = {
  variant: "Landing" | "Case Studies"
}

export const LogoCloud = ({ variant }: Props) => (
  <div
    className={`grid grid-cols-2 gap-6 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-0 ${
      variant === "Landing"
        ? "mt-10 lg:mt-[4.5rem]"
        : "hidden lg:block mt-24 mb-16"
    }`}
  >
    <div className="flex justify-center h-10 2xl:h-12 xl:h-11">
      <GotTheTestLogo />
    </div>
    <div className="flex justify-center h-10 2xl:h-12 xl:h-11">
      <WilderLogo />
    </div>
    <div className="flex justify-center h-10 2xl:h-12 xl:h-11">
      <CleverClinicLogo />
    </div>
    <div className="flex justify-center h-10 2xl:h-12 xl:h-11">
      <PFNexusLogo />
    </div>
    <div className="flex justify-center h-10 2xl:h-12 xl:h-11">
      <BreezeLogo />
    </div>
    <div className="flex justify-center h-10 2xl:h-12 xl:h-11">
      <ReclaroLogo />
    </div>
  </div>
)
