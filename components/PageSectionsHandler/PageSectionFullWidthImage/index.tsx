import Image from "next/image"

import { PageSectionsFullWidthImage } from "@/types"

export const PageSectionFullWidthImage = ({
  heading,
  description,
  image,
  backgroundColour,
  paddingBottom,
}: PageSectionsFullWidthImage & {
  paddingBottom: boolean
}) => {
  return (
    <section
      className={`rounded-16 lg:rounded-30 text-left lg:text-center ${
        backgroundColour === "grey-10" ? "bg-grey-10" : "bg-white"
      }`}
    >
      <div className={`wrapper-x ${paddingBottom ? "wrapper-y" : "wrapper-t"}`}>
        <div className="mb-8 lg:mb-12">
          <h2 className="heading-md">{heading}</h2>
          {description && <p className="mt-6">{description}</p>}
        </div>
        <Image
          className="w-full"
          src={image.url}
          alt={image.title}
          width={image.width}
          height={image.height}
        />
      </div>
    </section>
  )
}
