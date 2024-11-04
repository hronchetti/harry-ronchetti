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
                "mb-6 heading-md lg:mb-10 xl:mb-12 md:text-center will-change-transform transition-all duration-300 ease-out delay-300",
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
              "relative will-change-transform transition-all duration-300 ease-out delay-450 px-6 lg:px-6 xl:px-12 mx-auto",
              {
                "translate-y-0 opacity-100": isVisible,
                "translate-y-6 opacity-0": !isVisible,
              }
            )}
          >
            <Swiper
              pagination={{ clickable: true }}
              direction="horizontal"
              className="relative w-full"
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 24 },
                1024: { slidesPerView: 2, spaceBetween: 32 },
                1280: { slidesPerView: 3, spaceBetween: 40 },
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
                  className="p-6 mb-12 text-base border xl:mb-16 sm:p-8 md:p-10 bg-grey-10 border-grey-20 rounded-3xl text-grey-80"
                >
                  <Testimonial
                    sys={testimonial.sys}
                    content={testimonial.content}
                    receiver={testimonial.receiver}
                  />
                </SwiperSlide>
              ))}
              <button
                ref={navigationPrevRef}
                aria-label="Previous Testimonial"
                className="hidden p-3 z-50 md:block absolute -left-6 top-[calc((100%-3rem)/2)] rounded-full bg-white disabled:invisible disabled:pointer-events-none drop-shadow-sm before:content-[''] before:w-12 before:h-40 before:absolute before:-left-1/2 before:-top-6 before:opacity-20 before:pointer-events-none before:block before:z-[-1] before:will-change-auto before:origin-top-right before:duration-300 before:transition-all before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:left-[205%] before:rotate-[35deg] overflow-hidden before:bg-grey-40"
              >
                <span className="block text-2xl leading-6 text-grey-70 icon-arrow-right" />
              </button>
              <button
                ref={navigationNextRef}
                aria-label="Next Testimonial"
                className="hidden p-3 z-50 md:block absolute -right-6 top-[calc((100%-3rem)/2)] rounded-full bg-white disabled:invisible disabled:pointer-events-none drop-shadow-sm before:content-[''] before:w-12 before:h-40 before:absolute before:-left-1/2 before:-top-6 before:opacity-20 before:pointer-events-none before:block before:z-[-1] before:will-change-auto before:origin-top-right before:duration-300 before:transition-all before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:left-[205%] before:rotate-[35deg] overflow-hidden before:bg-grey-40"
              >
                <span className="block text-2xl leading-6 text-grey-70 icon-arrow-left" />
              </button>
            </Swiper>
          </div>
        </div>
      )}
    </TrackVisibility>
  )
}
