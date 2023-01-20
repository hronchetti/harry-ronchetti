import type {
  PageSectionsAccordions,
  PageSectionsCaseStudies,
  PageSectionsStrap,
  PageSectionsTestimonials,
} from "@/types"

import { PageSectionAccordions } from "./PageSectionAccordions"
import { PageSectionCaseStudies } from "./PageSectionCaseStudies"
import { PageSectionStrap } from "./PageSectionStrap"
import { PageSectionTestimonials } from "./PageSectionTestimonials"

type Props = {
  sections: [
    PageSectionsAccordions,
    PageSectionsCaseStudies,
    PageSectionsStrap,
    PageSectionsTestimonials
  ]
}

export const PageSectionsHandler = ({ sections }: Props) => {
  let backgroundColours: string[] = []

  return (
    <main>
      {sections.map((section) => {
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
          />
        ) : section.__typename === "PageSectionsCaseStudies" ? (
          <PageSectionCaseStudies
            key={id}
            sys={section.sys}
            __typename={section.__typename}
            backgroundColour={section.backgroundColour}
            caseStudiesCollection={section.caseStudiesCollection}
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
