"use client"

import React from "react"
import SwiperCore, { Pagination, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import TrackVisibility from "react-on-screen"

import { PageSectionsTestimonials } from "@/types"

import { Testimonial } from "./Testimonial"
import { HeadingWithHighlight } from "@/components"

import Blob from "@/lib/blob.svg"

SwiperCore.use([Pagination, Navigation])

export const PageSectionTestimonials = ({
  heading,
  headingHighlight,
  backgroundColour,
  testimonialsCollection,
}: PageSectionsTestimonials) => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <TrackVisibility
      tag="section"
      once
      partialVisibility
      className={`relative ${
        backgroundColour === "grey-10" ? "bg-grey-10" : "bg-none"
      }`}
    >
      {({ isVisible }) => (
        <>
          <span className="hidden lg:block absolute pointer-events-none w-[30rem] left-[-15rem] bottom-[-15rem] -z-10">
            <Blob />
          </span>
          <span className="hidden lg:block absolute pointer-events-none w-[30rem] right-[-15rem] top-[-15rem] -z-10">
            <Blob />
          </span>
          <div className="flex justify-center wrapper-x wrapper-y">
            <div className="max-w-[52.25rem] w-full">
              <h2
                className={`mb-6 heading-md lg:mb-10 md:text-center will-change-transform transition-all duration-300 ease-out delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <HeadingWithHighlight
                  heading={heading}
                  headingHighlight={headingHighlight}
                  variant="heading-md"
                  isVisible={isVisible}
                />
              </h2>
              <div
                className={`relative will-change-transform transition-all duration-300 ease-out delay-450 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <Swiper
                  pagination
                  direction="horizontal"
                  className="max-w-[38.75rem] mx-auto w-full pb-12"
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  onBeforeInit={(swiper: any) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current
                    swiper.params.navigation.nextEl = navigationNextRef.current
                  }}
                  slidesPerView={1}
                  slidesPerGroup={1}
                >
                  {testimonialsCollection.items.map((testimonial) => (
                    <SwiperSlide
                      key={testimonial.sys.id}
                      className="w-full px-1"
                    >
                      <Testimonial
                        sys={testimonial.sys}
                        content={testimonial.content}
                        receiver={testimonial.receiver}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="grid grid-cols-2 gap-4 pt-8 md:pt-0">
                  <button
                    ref={navigationPrevRef}
                    className="p-2 border-2 rounded-lg border-grey-20 md:absolute md:left-0 md:top-[calc((100%-3rem)/2)] md:rounded-full bg-white md:hover:bg-grey-10 disabled:invisible disabled:pointer-events-none"
                  >
                    <span className="block icon-chevron-left text-[2rem] leading-8 text-grey-50" />
                  </button>
                  <button
                    ref={navigationNextRef}
                    className="p-2 border-2 rounded-lg border-grey-20 md:absolute md:right-0 md:top-[calc((100%-3rem)/2)] md:rounded-full bg-white md:hover:bg-grey-10 disabled:invisible disabled:pointer-events-none"
                  >
                    <span className="block icon-chevron-right text-[2rem] leading-8 text-grey-50" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </TrackVisibility>
  )
}
