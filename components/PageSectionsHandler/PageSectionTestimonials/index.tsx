"use client"

import React from "react"
import SwiperCore from "swiper"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import TrackVisibility from "react-on-screen"
import cx from "classnames"

import { PageSectionsTestimonials } from "@/types"

import { Testimonial } from "./Testimonial"
import { HeadingWithHighlight } from "@/components"

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
        <div className="wrapper-y">
          <div className="flex justify-center wrapper-x">
            <h2
              className={cx(
                "mb-6 heading-md lg:mb-10 xl:mb-16 md:text-center will-change-transform transition-all duration-300 ease-out delay-300",
                `${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`
              )}
            >
              <HeadingWithHighlight
                heading={heading}
                headingHighlight={headingHighlight}
                variant="heading-md"
                isVisible={isVisible}
              />
            </h2>
          </div>
          <div
            className={cx(
              "relative will-change-transform transition-all duration-300 ease-out delay-450",
              {
                "translate-y-0 opacity-100": isVisible,
                "translate-y-6 opacity-0": !isVisible,
              }
            )}
          >
            <Swiper
              pagination={{ clickable: true }}
              direction="horizontal"
              className="w-full pb-12"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              breakpoints={{
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current
                swiper.params.navigation.nextEl = navigationNextRef.current
              }}
            >
              {testimonialsCollection.items.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.sys.id}
                  className="p-12 border bg-grey-10 border-grey-20 rounded-3xl text-grey-80"
                >
                  <Testimonial
                    sys={testimonial.sys}
                    content={testimonial.content}
                    receiver={testimonial.receiver}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </TrackVisibility>
  )
}
