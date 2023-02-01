import { PageSectionsTestimonials } from "@/types"

import Blob from "@/lib/blob.svg"

export const PageSectionTestimonials = ({
  heading,
  backgroundColour,
}: PageSectionsTestimonials) => {
  return (
    <section
      className={`relative ${
        backgroundColour === "grey-10" ? "bg-grey-10" : "bg-none"
      }`}
    >
      <span className="hidden lg:block absolute pointer-events-none w-[30rem] left-[-15rem] bottom-[-15rem] -z-10">
        <Blob />
      </span>
      <span className="hidden lg:block absolute pointer-events-none w-[30rem] right-[-15rem] top-[-15rem] -z-10">
        <Blob />
      </span>
      <div className="flex justify-center wrapper-x wrapper-y">
        <div className="max-w-[52.25rem]">
          <h2 className="mb-6 heading-md lg:mb-10">{heading}</h2>
        </div>
      </div>
    </section>
  )
}
