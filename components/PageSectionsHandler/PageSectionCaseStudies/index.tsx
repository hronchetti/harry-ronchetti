import { PageSectionsCaseStudies } from "@/types"

import { CaseStudyCard } from "./CaseStudyCard"

export const PageSectionCaseStudies = ({
  backgroundColour,
  caseStudiesCollection,
}: PageSectionsCaseStudies) => {
  return (
    <section
      className={backgroundColour === "grey-10" ? "bg-grey-10" : "bg-none"}
    >
      <div className="mt-12 wrapper-x lg:mt-0">
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
    </section>
  )
}
