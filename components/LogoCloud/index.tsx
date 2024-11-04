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
  <section>
    <h2 className="wrapper-x text-center text-xl font-semibold text-grey-100">
      Experience at a variety of companies
    </h2>
    <div className="mt-6 overflow-hidden whitespace-nowrap bg-white xl:mt-8">
      {/* this needs to be exactly 1 width of the screen of exact timing to work, but surely that wouldn't happen unless using flex, justify-between or something? */}
      <div id="logos" className="inline-block animate-slide">
        <CleverClinicLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <PFNexusLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <VizzlyLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <IBMLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <HedgehogLabLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <WilderTripsLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <BreezeLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <NE6Logo className="mx-4 inline-block h-10 lg:mx-6" />
        <EggLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <GotTheTestLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <HomeAssistLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <ReclaroLogo className="mx-4 inline-block h-10 lg:mx-6" />
        {/*  */}
        <CleverClinicLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <PFNexusLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <VizzlyLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <IBMLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <HedgehogLabLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <WilderTripsLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <BreezeLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <NE6Logo className="mx-4 inline-block h-10 lg:mx-6" />
        <EggLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <GotTheTestLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <HomeAssistLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <ReclaroLogo className="mx-4 inline-block h-10 lg:mx-6" />
        {/*  */}
        <CleverClinicLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <PFNexusLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <VizzlyLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <IBMLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <HedgehogLabLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <WilderTripsLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <BreezeLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <NE6Logo className="mx-4 inline-block h-10 lg:mx-6" />
        <EggLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <GotTheTestLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <HomeAssistLogo className="mx-4 inline-block h-10 lg:mx-6" />
        <ReclaroLogo className="mx-4 inline-block h-10 lg:mx-6" />
      </div>
    </div>
  </section>
)
