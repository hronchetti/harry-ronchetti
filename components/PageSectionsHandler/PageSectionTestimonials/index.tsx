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
          <div className="wrapper-x flex justify-center">
            <h2
              className={cx(
                "heading-md mb-8 text-center transition-all delay-300 duration-300 ease-out will-change-transform lg:mb-10 xl:mb-12",
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
              "relative mx-auto px-6 transition-all delay-450 duration-300 ease-out will-change-transform lg:px-6 xl:px-12",
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
                  className="mb-12 rounded-3xl border border-grey-20 bg-grey-10 p-6 text-base text-grey-80 sm:p-8 md:p-10 xl:mb-16"
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
                className="absolute -left-6 top-[calc((100%-3rem)/2)] z-50 hidden overflow-hidden rounded-full border border-grey-20 bg-white p-3 drop-shadow-md before:pointer-events-none before:absolute before:-left-1/2 before:-top-6 before:z-[-1] before:block before:h-40 before:w-12 before:origin-top-right before:rotate-[35deg] before:bg-grey-40 before:opacity-20 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.19,1,0.22,1)] before:will-change-auto before:content-[''] hover:before:left-[205%] disabled:pointer-events-none disabled:invisible md:block"
              >
                <span className="icon-arrow-right block text-2xl leading-6 text-grey-80" />
              </button>
              <button
                ref={navigationNextRef}
                aria-label="Next Testimonial"
                className="absolute -right-6 top-[calc((100%-3rem)/2)] z-50 hidden overflow-hidden rounded-full border border-grey-20 bg-white p-3 drop-shadow-md before:pointer-events-none before:absolute before:-left-1/2 before:-top-6 before:z-[-1] before:block before:h-40 before:w-12 before:origin-top-right before:rotate-[35deg] before:bg-grey-40 before:opacity-20 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.19,1,0.22,1)] before:will-change-auto before:content-[''] hover:before:left-[205%] disabled:pointer-events-none disabled:invisible md:block"
              >
                <span className="icon-arrow-left block text-2xl leading-6 text-grey-80" />
              </button>
            </Swiper>
          </div>
        </div>
      )}
    </TrackVisibility>
  )
}
