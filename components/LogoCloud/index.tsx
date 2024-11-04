"use client"

import React from "react"

import { BreezeLogo } from "../../lib/logos/clients/breeze"
import { CleverClinicLogo } from "../../lib/logos/clients/clever-clinic"
import { EggLogo } from "../../lib/logos/clients/egg"
import { GotTheTestLogo } from "../../lib/logos/clients/gotthetest"
import { HedgehogLabLogo } from "../../lib/logos/clients/hedgehog-lab"
import { HomeAssistLogo } from "../../lib/logos/clients/home-assist"
import { IBMLogo } from "../../lib/logos/clients/ibm"
import { NE6Logo } from "../../lib/logos/clients/ne6"
import { PFNexusLogo } from "../../lib/logos/clients/pf-nexus"
import { ReclaroLogo } from "../../lib/logos/clients/reclaro"
import { VizzlyLogo } from "../../lib/logos/clients/vizzly"
import { WilderTripsLogo } from "../../lib/logos/clients/wildertrips"

export const LogoCloud = () => (
  <section className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
    <h2 className="text-xl font-semibold text-center text-grey-100 wrapper-x">
      8+ years in software
    </h2>
    <div className="mt-6 overflow-hidden bg-white xl:mt-8 whitespace-nowrap">
      {/* this needs to be exactly 1 width of the screen of exact timing to work, but surely that wouldn't happen unless using flex, justify-between or something? */}
      <div id="logos" className="inline-block animate-slide">
        <CleverClinicLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <PFNexusLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <VizzlyLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <IBMLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <HedgehogLabLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <WilderTripsLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <BreezeLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <NE6Logo className="inline-block h-10 mx-4 lg:mx-6" />
        <EggLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <GotTheTestLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <HomeAssistLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <ReclaroLogo className="inline-block h-10 mx-4 lg:mx-6" />
        {/*  */}
        <CleverClinicLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <PFNexusLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <VizzlyLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <IBMLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <HedgehogLabLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <WilderTripsLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <BreezeLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <NE6Logo className="inline-block h-10 mx-4 lg:mx-6" />
        <EggLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <GotTheTestLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <HomeAssistLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <ReclaroLogo className="inline-block h-10 mx-4 lg:mx-6" />
        {/*  */}
        <CleverClinicLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <PFNexusLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <VizzlyLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <IBMLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <HedgehogLabLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <WilderTripsLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <BreezeLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <NE6Logo className="inline-block h-10 mx-4 lg:mx-6" />
        <EggLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <GotTheTestLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <HomeAssistLogo className="inline-block h-10 mx-4 lg:mx-6" />
        <ReclaroLogo className="inline-block h-10 mx-4 lg:mx-6" />
      </div>
    </div>
  </section>
)
