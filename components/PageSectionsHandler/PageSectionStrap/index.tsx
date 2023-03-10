"use client"

import TrackVisibility from "react-on-screen"
import { PageSectionsStrap } from "@/types"
import { Button } from "@/components"

export const PageSectionStrap = ({
  backgroundColour,
  heading,
  preHeading,
  description,
}: PageSectionsStrap) => (
  <TrackVisibility tag="section" once partialVisibility className="wrapper-x">
    {({ isVisible }) => (
      <div
        className={
          backgroundColour === "grey-90"
            ? "bg-grey-90 text-grey-30 rounded-16 lg:rounded-20"
            : "bg-white"
        }
      >
        <div className="px-6 py-20 text-center lg:px-20">
          <span
            className={`block pre-heading text-yellow will-change-transform transition-all duration-300 ease-out delay-150 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {preHeading}
          </span>
          <h2
            className={`my-6 lg:mb-8 text-white heading-lg will-change-transform transition-all duration-300 ease-out delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`mb-6 lg:mb-8 will-change-transform transition-all duration-300 ease-out delay-450 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {description}
          </p>
          <div
            className={`will-change-transform transition-all duration-300 ease-out delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <Button
              href={
                process.env.NEXT_PUBLIC_BOOKING_URL
                  ? process.env.NEXT_PUBLIC_BOOKING_URL
                  : ""
              }
              external
              style="white"
            >
              Book discovery call
            </Button>
          </div>
        </div>
      </div>
    )}
  </TrackVisibility>
)
