import { PageSectionsCaseStudies } from "@/types"

export const PageSectionCaseStudies = ({
  backgroundColour,
}: PageSectionsCaseStudies) => {
  return (
    <section
      className={backgroundColour === "grey-10" ? "bg-grey-10" : "bg-none"}
    >
      <div className="wrapper-x">PageSectionCaseStudies</div>
    </section>
  )
}
