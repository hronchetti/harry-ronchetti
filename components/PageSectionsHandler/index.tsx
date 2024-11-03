import type {
  PageSectionsAccordions,
  PageSectionsCaseStudies,
  PageSectionsFullWidthImage,
  PageSectionsTabs,
  PageSectionsStrap,
  PageSectionsTestimonials,
} from "@/types"

import { PageSectionCaseStudies } from "./PageSectionCaseStudies"
import { PageSectionTestimonials } from "./PageSectionTestimonials"

type Props = {
  sections: [
    PageSectionsAccordions,
    PageSectionsCaseStudies,
    PageSectionsFullWidthImage,
    PageSectionsStrap,
    PageSectionsTabs,
    PageSectionsTestimonials
  ]
  firstSectionRounded?: boolean
}

export const PageSectionsHandler = ({ sections }: Props) => (
  <main className="w-full overflow-hidden">
    {sections.map((section) => {
      return section.__typename === "PageSectionsCaseStudies" ? (
        <PageSectionCaseStudies
          key={section.sys.id}
          sys={section.sys}
          __typename={section.__typename}
          backgroundColour={section.backgroundColour}
          heading={section.heading}
          headingHighlight={section.headingHighlight}
          caseStudiesCollection={section.caseStudiesCollection}
        />
      ) : section.__typename === "PageSectionsTestimonials" ? (
        <PageSectionTestimonials
          key={section.sys.id}
          sys={section.sys}
          __typename={section.__typename}
          backgroundColour={section.backgroundColour}
          heading={section.heading}
          headingHighlight={section.headingHighlight}
          testimonialsCollection={section.testimonialsCollection}
        />
      ) : (
        ""
      )
    })}
  </main>
)
