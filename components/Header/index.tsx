import type { PageSectionsHeader } from "@/types"

export const Header = ({ heading, description }: PageSectionsHeader) => (
  <header className="w-full pt-6 text-center wrapper-x md:pt-12 lg:pt-16">
    <h1 className="max-w-screen-lg mx-auto text-grey-100 heading-xl">
      {heading}
    </h1>
    {description ? <p>{description}</p> : ""}
  </header>
)
