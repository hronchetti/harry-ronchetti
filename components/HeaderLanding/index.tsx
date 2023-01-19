import type { PageSectionsHeader } from "@/types"
import { Button } from "@/components"

export const HeaderLanding = ({ heading, description }: PageSectionsHeader) => {
  return (
    <header className="w-full text-center">
      <div>
        <h1 className="max-w-screen-lg mx-auto text-grey-100 heading-xl">
          {heading}
        </h1>
        {description ? <p className="max-w-md mx-auto">{description}</p> : ""}
        <div className="flex justify-center">
          <div>
            <Button
              href="https://calendly.com/harryronchetti/introductory-chat"
              external
              style="grey-100"
            >
              Book discovery call
            </Button>
          </div>
          <Button style="text" href="/case-studies">
            Case studies
          </Button>
        </div>
      </div>
    </header>
  )
}
