import { PageSectionsTestimonials } from "@/types"

export const PageSectionTestimonials = ({
  backgroundColour,
}: PageSectionsTestimonials) => {
  return (
    <section
      className={backgroundColour === "grey-10" ? "bg-grey-10" : "bg-white"}
    >
      <div className="wrapper-width">PageSectionTestimonials</div>
    </section>
  )
}
