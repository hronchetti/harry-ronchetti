"use client"

import TrackVisibility from "react-on-screen"
import Image from "next/image"

import { PageSectionsFullWidthImage } from "@/types"
import { HeadingWithHighlight } from "@/components"

export const PageSectionFullWidthImage = ({
  heading,
  headingHighlight,
  description,
  image,
  backgroundColour,
  paddingBottom,
}: PageSectionsFullWidthImage & {
  paddingBottom: boolean
}) => (
  <TrackVisibility
    tag="section"
    once
    partialVisibility
    className={`rounded-16 lg:rounded-30 text-left lg:text-center ${
      backgroundColour === "grey-10" ? "bg-grey-10" : "bg-white"
    }`}
  >
    {({ isVisible }) => (
      <div className={`wrapper-x ${paddingBottom ? "wrapper-y" : "wrapper-t"}`}>
        <div className="mb-8 lg:mb-12">
          <h2
            className={`heading-md will-change-transform transition-all duration-300 ease-out delay-150 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <HeadingWithHighlight
              heading={heading}
              headingHighlight={headingHighlight}
              variant="heading-md"
            />
          </h2>
          {description && (
            <p
              className={`mt-6 will-change-transform transition-all duration-300 ease-out delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              {description}
            </p>
          )}
        </div>
        <Image
          className="w-full"
          src={image.url}
          alt={image.title}
          width={image.width}
          height={image.height}
        />
      </div>
    )}
  </TrackVisibility>
)
