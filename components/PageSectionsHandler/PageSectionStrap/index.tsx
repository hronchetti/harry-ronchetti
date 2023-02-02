import { PageSectionsStrap } from "@/types"
import { Button } from "@/components"

export const PageSectionStrap = ({
  backgroundColour,
  heading,
  preHeading,
  description,
}: PageSectionsStrap) => (
  <section className="wrapper-x">
    <div
      className={
        backgroundColour === "grey-90"
          ? "bg-grey-90 text-grey-30 rounded-16 lg:rounded-20"
          : "bg-white"
      }
    >
      <div className="px-6 py-20 text-center lg:px-20">
        <span className="block pre-heading text-yellow">{preHeading}</span>
        <h2 className="my-6 text-white heading-md">{heading}</h2>
        <p className="mb-6 lg:mb-10">{description}</p>
        <Button
          href={
            process.env.NEXT_PUBLIC_BOOKING_URL
              ? process.env.NEXT_PUBLIC_BOOKING_URL
              : ""
          }
          external
          style="white"
        >
          Book discovery call
        </Button>
      </div>
    </div>
  </section>
)
