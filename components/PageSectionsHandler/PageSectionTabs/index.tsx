"use client"

import React, { useState } from "react"
import TrackVisibility from "react-on-screen"

import { PageSectionsTabs } from "@/types"
import { HeadingWithHighlight } from "@/components"
import { Tab } from "./Tab"

export const PageSectionTabs = ({
  heading,
  headingHighlight,
  backgroundColour,
  tabsCollection,
  paddingBottom,
}: PageSectionsTabs & {
  paddingBottom: boolean
}) => {
  const [activeTab, setActiveTab] = useState(tabsCollection.items[0].name)

  return (
    <TrackVisibility
      tag="section"
      once
      partialVisibility
      className={`rounded-16 lg:rounded-30 text-left lg:text-center ${
        backgroundColour === "grey-10" ? "bg-grey-10" : "bg-white"
      }`}
    >
      {({ isVisible }) => (
        <div
          className={`wrapper-x ${paddingBottom ? "wrapper-y" : "wrapper-t"}`}
        >
          <div className="mb-6 lg:mb-8">
            <h2
              className={`heading-md will-change-transform transition-all duration-300 ease-out delay-300 ${
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
          </div>
          <div
            className={`flex justify-center mb-8 lg:mb-10 will-change-transform transition-all duration-300 ease-out delay-450 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <div className="flex justify-center rounded-lg bg-grey-20">
              {tabsCollection.items.map((tab) => (
                <button
                  onClick={() => setActiveTab(tab.name)}
                  key={tab.name}
                  className={`px-4 py-2.5 text-base font-semibold leading-6 rounded-lg hover:text-grey-90 ${
                    activeTab === tab.name
                      ? "text-grey-90 bg-white shadow-[0_2px_12px_0_rgba(0,0,0,0.06)]"
                      : "text-grey-60"
                  } `}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
          <div
            className={`will-change-transform transition-all duration-300 ease-out delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {tabsCollection.items.map((tab) => (
              <Tab
                key={tab.name}
                name={tab.name}
                image={tab.image}
                imageMobile={tab.imageMobile}
                active={activeTab === tab.name}
              />
            ))}
          </div>
        </div>
      )}
    </TrackVisibility>
  )
}
