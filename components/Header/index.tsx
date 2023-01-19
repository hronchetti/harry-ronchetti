import type { PageSectionsHeader } from "@/types"

export const Header = ({ heading, description }: PageSectionsHeader) => {
  return (
    <header className="w-full text-center">
      <h1 className="max-w-screen-lg mx-auto text-grey-100 heading-xl">
        {heading}
      </h1>
      {description ? <p>{description}</p> : ""}
    </header>
  )
}
