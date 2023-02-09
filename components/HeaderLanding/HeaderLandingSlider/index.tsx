"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Swiper as SwiperType } from "swiper"
import Image from "next/image"

import PFNexusIntroductions from "@/lib/images/landing-page-slider/pf-nexus-introductions-tall.jpg"
import Reclaro135s from "@/lib/images/landing-page-slider/reclaro-1-3-5s-tall.jpg"
import WilderBuilder from "@/lib/images/landing-page-slider/wilder-trips-builder-tall.jpg"
import HomeAssistCheckout from "@/lib/images/landing-page-slider/home-assist-order-tall.jpg"
import GotTheTest from "@/lib/images/landing-page-slider/gotthetest-appointments-tall.png"

export const HeaderLandingSlider = () => {
  const indicatorSlide0 = React.useRef<HTMLSpanElement | null>(null)
  const indicatorSlide1 = React.useRef<HTMLSpanElement | null>(null)
  const indicatorSlide2 = React.useRef<HTMLSpanElement | null>(null)
  const indicatorSlide3 = React.useRef<HTMLSpanElement | null>(null)
  const indicatorSlide4 = React.useRef<HTMLSpanElement | null>(null)
  const [activeSlide, setActiveSlide] = React.useState(0)

  const onAutoplayTimeLeft = (
    swiper: SwiperType,
    timeLeft: number,
    percentage: number
  ) => {
    //console.log(s, time, progress)
    if (activeSlide === 0) {
      const indicatorElement = indicatorSlide0.current

      if (indicatorElement) {
        updateIndicator(indicatorElement, percentage)
      }
    }
    if (activeSlide === 1) {
      const indicatorElement = indicatorSlide1.current

      if (indicatorElement) {
        updateIndicator(indicatorElement, percentage)
      }
    }
    if (activeSlide === 2) {
      const indicatorElement = indicatorSlide2.current

      if (indicatorElement) {
        updateIndicator(indicatorElement, percentage)
      }
    }
    if (activeSlide === 3) {
      const indicatorElement = indicatorSlide3.current

      if (indicatorElement) {
        updateIndicator(indicatorElement, percentage)
      }
    }
    if (activeSlide === 4) {
      const indicatorElement = indicatorSlide4.current

      if (indicatorElement) {
        updateIndicator(indicatorElement, percentage)
      }
    }
  }

  const updateIndicator = (element: HTMLSpanElement, percentage: number) => {
    const value = 48 * percentage
    element.style.transform = `translateX(-${value}px)`
  }

  return (
    <div>
      <Swiper
        className="w-full overflow-hidden rounded-lg lg:rounded-3xl shadow-[0_8px_48px_-12px_rgba(18,25,38,0.16)]"
        spaceBetween={16}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onTransitionEnd={(swiper: SwiperType) =>
          setActiveSlide(swiper.activeIndex)
        }
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
            priority
            placeholder="blur"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={WilderBuilder}
            alt="Wilder Trips road trip planning software trip builder"
            priority
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
        <SwiperSlide>
          <Image
            src={GotTheTest}
            alt="GotTheTest Appointment Calendar"
            placeholder="blur"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center mt-10 lg:mt-14">
        <div className="w-12 h-1.5 rounded-8 bg-grey-40 overflow-hidden mx-1.5">
          <span
            ref={indicatorSlide0}
            className="block w-full h-full -translate-x-full bg-white will-change-transform rounded-8"
          />
        </div>
        <div className="w-12 h-1.5 rounded-8 bg-grey-40 overflow-hidden mx-1.5">
          <span
            ref={indicatorSlide1}
            className="block w-full h-full -translate-x-full bg-white will-change-transform rounded-8"
          />
        </div>
        <div className="w-12 h-1.5 rounded-8 bg-grey-40 overflow-hidden mx-1.5">
          <span
            ref={indicatorSlide2}
            className="block w-full h-full -translate-x-full bg-white will-change-transform rounded-8"
          />
        </div>
        <div className="w-12 h-1.5 rounded-8 bg-grey-40 overflow-hidden mx-1.5">
          <span
            ref={indicatorSlide3}
            className="block w-full h-full -translate-x-full bg-white will-change-transform rounded-8"
          />
        </div>
        <div className="w-12 h-1.5 rounded-8 bg-grey-40 overflow-hidden mx-1.5">
          <span
            ref={indicatorSlide4}
            className="block w-full h-full -translate-x-full bg-white will-change-transform rounded-8"
          />
        </div>
      </div>
    </div>
  )
}
