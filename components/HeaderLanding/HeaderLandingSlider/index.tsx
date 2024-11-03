"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import Image from "next/image"

import PFNexusIntroductions from "@/lib/images/landing-page-slider/pf-nexus-introductions-tall.jpg"
import Reclaro135s from "@/lib/images/landing-page-slider/reclaro-1-3-5s-tall.jpg"
import WilderBuilder from "@/lib/images/landing-page-slider/wilder-trips-builder-tall.jpg"
import HomeAssistCheckout from "@/lib/images/landing-page-slider/home-assist-order-tall.jpg"
import GotTheTest from "@/lib/images/landing-page-slider/gotthetest-appointments-tall.png"

export const HeaderLandingSlider = () => (
  <div className="wrapper-x">
    <Swiper
      className="w-full overflow-hidden border rounded-lg lg:rounded-3xl drop-shadow-md border-grey-20"
      spaceBetween={16}
      centeredSlides={true}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <Image
          src={PFNexusIntroductions}
          alt="PF Nexus renewable energy software project introductions"
          priority
          placeholder="blur"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Reclaro135s}
          alt="Relcaro OKR Software 1-3-5s"
          placeholder="blur"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={WilderBuilder}
          alt="Wilder Trips road trip planning software trip builder"
          placeholder="blur"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={GotTheTest}
          alt="GotTheTest Appointment Calendar"
          placeholder="blur"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={HomeAssistCheckout}
          alt="Home Assist Boiler Installation Checkout"
          placeholder="blur"
        />
      </SwiperSlide>
    </Swiper>
  </div>
)
