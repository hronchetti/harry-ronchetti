import type {
  PageSectionsAccordions,
  PageSectionsCaseStudies,
  PageSectionsFullWidthImage,
  PageSectionsStrap,
  PageSectionsTestimonials,
} from "@/types"

import { PageSectionAccordions } from "./PageSectionAccordions"
import { PageSectionCaseStudies } from "./PageSectionCaseStudies"
import { PageSectionFullWidthImage } from "./PageSectionFullWidthImage"
import { PageSectionStrap } from "./PageSectionStrap"
import { PageSectionTestimonials } from "./PageSectionTestimonials"

type Props = {
  sections: [
    PageSectionsAccordions,
    PageSectionsCaseStudies,
    PageSectionsFullWidthImage,
    PageSectionsStrap,
    PageSectionsTestimonials
  ]
  firstSectionRounded?: boolean
}

export const PageSectionsHandler = ({
  sections,
  firstSectionRounded = true,
}: Props) => {
  const isEven = (number: number) => number % 2 === 0
  let backgroundColours: string[] = []

  console.log(sections)
  return (
    <main>
      {sections.map((section, index) => {
        const id = section.sys.id
        backgroundColours.push(section.backgroundColour)

        return section.__typename === "PageSectionsAccordions" ? (
          <PageSectionAccordions
            key={id}
            sys={section.sys}
            __typename={section.__typename}
            backgroundColour={section.backgroundColour}
            heading={section.heading}
            accordionsCollection={section.accordionsCollection}
            orientation={isEven(index) ? "text-right" : "text-left"}
            paddingBottom={
              backgroundColours[index - 1] !== section.backgroundColour ||
              index === 0
            }
            variant={section.variant}
            roundedTop={firstSectionRounded && index !== 0}
          />
        ) : section.__typename === "PageSectionsCaseStudies" ? (
          <PageSectionCaseStudies
            key={id}
            sys={section.sys}
            __typename={section.__typename}
            backgroundColour={section.backgroundColour}
            caseStudiesCollection={section.caseStudiesCollection}
          />
        ) : section.__typename === "PageSectionsFullWidthImage" ? (
          <PageSectionFullWidthImage
            key={id}
            sys={section.sys}
            __typename={section.__typename}
            backgroundColour={section.backgroundColour}
            heading={section.heading}
            description={section.description}
            image={section.image}
            paddingBottom={
              backgroundColours[index - 1] !== section.backgroundColour ||
              index === 0
            }
          />
        ) : section.__typename === "PageSectionsStrap" ? (
          <PageSectionStrap
            key={id}
            sys={section.sys}
            __typename={section.__typename}
            backgroundColour={section.backgroundColour}
            preHeading={section.preHeading}
            heading={section.heading}
            description={section.description}
            button={section.button}
          />
        ) : section.__typename === "PageSectionsTestimonials" ? (
          <PageSectionTestimonials
            key={id}
            sys={section.sys}
            __typename={section.__typename}
            backgroundColour={section.backgroundColour}
            heading={section.heading}
            testimonialsCollection={section.testimonialsCollection}
          />
        ) : (
          ""
        )
      })}
    </main>
  )
}
