"use client"

import TrackVisibility from "react-on-screen"
import cx from "classnames"

import { PageSectionsCaseStudies } from "@/types"

import { HeadingWithHighlight } from "@/components"
import { CaseStudyCard } from "./CaseStudyCard"

export const PageSectionCaseStudies = ({
  backgroundColour,
  caseStudiesCollection,
  heading,
  headingHighlight,
}: PageSectionsCaseStudies) => (
  <TrackVisibility
    tag="section"
    once
    partialVisibility
    className={`relative ${
      backgroundColour === "grey-10" ? "bg-grey-10" : "bg-none"
    }`}
  >
    {({ isVisible }) => (
      <div className="wrapper-x" id="work-examples">
        <h2
          className={cx(
            "heading-md mb-8 lg:mb-10 xl:mb-12 text-center will-change-transform transition-all duration-300 ease-out delay-300",
            {
              "translate-y-0 opacity-100": isVisible,
              "translate-y-6 opacity-0": !isVisible,
            }
          )}
        >
          <HeadingWithHighlight
            heading={heading}
            headingHighlight={headingHighlight}
            variant="heading-md"
            isVisible={isVisible}
          />
        </h2>
        <div className="grid grid-cols-1 gap-8 mt-6 lg:mt-0 lg:gap-12">
          {caseStudiesCollection.items.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.sys.id}
              sys={caseStudy.sys}
              client={caseStudy.client}
              title={caseStudy.title}
              tagsCollection={caseStudy.tagsCollection}
              description={caseStudy.description}
              featuredImage={caseStudy.featuredImage}
              websiteUrl={caseStudy.websiteUrl}
            />
          ))}
        </div>
      </div>
    )}
  </TrackVisibility>
)
