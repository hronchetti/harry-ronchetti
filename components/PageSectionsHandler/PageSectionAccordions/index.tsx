"use client"

import TrackVisibility from "react-on-screen"

import { PageSectionsAccordions } from "@/types"

import { HeadingWithHighlight } from "@/components"
import { Accordion } from "./Accordion"
import { ToolsSection } from "./ToolsSection"
import { VideoAsk } from "./VideoAsk"

export const PageSectionAccordions = ({
  backgroundColour,
  heading,
  headingHighlight,
  accordionsCollection,
  orientation,
  paddingBottom,
  variant,
  roundedTop,
}: PageSectionsAccordions & {
  orientation: "text-left" | "text-right"
  paddingBottom: boolean
  roundedTop: boolean
}) => {
  const content =
    variant === "Video Ask" ? (
      <VideoAsk />
    ) : variant === "Tools" ? (
      <ToolsSection />
    ) : (
      <></>
    )
  return (
    <TrackVisibility
      tag="section"
      once
      partialVisibility
      className={`${
        backgroundColour === "grey-10" ? "bg-grey-10" : "bg-white"
      } ${
        roundedTop ? "rounded-16 lg:rounded-30" : "rounded-b-16 lg:rounded-b-30"
      }`}
    >
      {({ isVisible }) => (
        <>
          {orientation === "text-left" ? (
            <div
              className={`wrapper-x grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 ${
                paddingBottom ? "wrapper-y" : "wrapper-t"
              }`}
            >
              <div>
                <h2
                  className={`mb-6 heading-sm text-grey-100 lg:mb-8 will-change-transform transition-all duration-300 ease-out delay-300 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <HeadingWithHighlight
                    heading={heading}
                    headingHighlight={headingHighlight}
                    variant="heading-sm"
                    isVisible={isVisible}
                  />
                </h2>
                <div
                  className={`will-change-transform transition-all duration-300 ease-out delay-450 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  {accordionsCollection.items.map((item, index) => (
                    <Accordion
                      key={item.sys.id}
                      emoji={item.emoji}
                      heading={item.heading}
                      content={item.content}
                      sys={item.sys}
                      borderBottom={
                        index === accordionsCollection.items.length - 1
                      }
                    />
                  ))}
                </div>
              </div>
              <div>{content}</div>
            </div>
          ) : (
            <div
              className={`wrapper-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 ${
                paddingBottom ? "wrapper-y" : "wrapper-t"
              }`}
            >
              <div className="order-2 lg:order-1">{content}</div>
              <div className="order-1 lg:order-2">
                <h2
                  className={`mb-6 heading-sm text-grey-100 lg:mb-8 will-change-transform transition-all duration-300 ease-out delay-300 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <HeadingWithHighlight
                    heading={heading}
                    headingHighlight={headingHighlight}
                    variant="heading-sm"
                    isVisible={isVisible}
                  />
                </h2>
                <div
                  className={`will-change-transform transition-all duration-300 ease-out delay-450 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  {accordionsCollection.items.map((item, index) => (
                    <Accordion
                      key={item.sys.id}
                      emoji={item.emoji}
                      heading={item.heading}
                      content={item.content}
                      sys={item.sys}
                      borderBottom={
                        index === accordionsCollection.items.length - 1
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </TrackVisibility>
  )
}
