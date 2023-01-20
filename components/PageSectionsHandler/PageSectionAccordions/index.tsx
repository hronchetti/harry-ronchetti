import { PageSectionsAccordions } from "@/types"

export const PageSectionAccordions = ({
  backgroundColour,
}: PageSectionsAccordions) => {
  return (
    <section
      className={backgroundColour === "grey-10" ? "bg-grey-10" : "bg-white"}
    >
      <div className="wrapper-width">PageSectionAccordions</div>
    </section>
  )
}
