"use client"

import React from "react"

import BreezeLogo from "../../lib/logos/clients/breeze-logo.svg"
import CleverClinicLogo from "../../lib/logos/clients/clever-clinic-logo.svg"
import GotTheTestLogo from "../../lib/logos/clients/gotthetest-logo.svg"
import PFNexusLogo from "../../lib/logos/clients/pf-nexus-logo.svg"
import ReclaroLogo from "../../lib/logos/clients/reclaro-logo.svg"
import WilderLogo from "../../lib/logos/clients/wilder-logo.svg"

export const LogoCloud = () => (
  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:flex xl:justify-between xl:gap-0 mt-10 lg:mt-[4.5rem]">
    <div className="flex justify-center h-10 lg:h-12 xl:w-[176px] xl:block">
      <GotTheTestLogo />
    </div>
    <div className="flex justify-center h-10 lg:h-12 xl:w-[156px] xl:block">
      <WilderLogo />
    </div>
    <div className="flex justify-center h-10 lg:h-12 xl:w-[233px] xl:block">
      <CleverClinicLogo />
    </div>
    <div className="flex justify-center h-10 lg:h-12 xl:w-[165px] xl:block">
      <PFNexusLogo />
    </div>
    <div className="flex justify-center h-10 lg:h-12 xl:w-[150px] xl:block">
      <BreezeLogo />
    </div>
    <div className="flex justify-center h-10 lg:h-12 xl:w-[123px] xl:block">
      <ReclaroLogo />
    </div>
  </div>
)
