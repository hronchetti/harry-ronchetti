import type { PageSectionsHeader } from "@/types"
import { Button } from "@/components"

export const HeaderLanding = ({ heading, description }: PageSectionsHeader) => {
  return (
    <header className="w-full text-center">
      <div className="pt-6 pb-10 md:pt-12 md:pb-12 lg:pt-16 lg:pb-16">
        <h1 className="max-w-screen-lg mx-auto text-grey-100 heading-xl">
          {heading}
        </h1>
        {description ? (
          <p className="max-w-md mx-auto mt-5 lg:mt-6">{description}</p>
        ) : (
          ""
        )}
        <div className="mt-5 lg:mt-8">
          <div className="mb-2 lg:mb-3">
            <Button
              href={
                process.env.NEXT_PUBLIC_BOOKING_URL
                  ? process.env.NEXT_PUBLIC_BOOKING_URL
                  : ""
              }
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
