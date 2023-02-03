import type { PageSectionsHeader } from "@/types"
import { Button, LogoCloud } from "@/components"
import { HeaderLandingSlider } from "./HeaderLandingSlider"

export const HeaderLanding = ({ heading, description }: PageSectionsHeader) => {
  return (
    <header className="w-full text-center">
      <div className="pt-6 pb-10 md:pt-12 md:pb-12 lg:pt-16 lg:pb-16 wrapper-x">
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
      <div className="relative">
        <span className="absolute top-[6rem] left-0 w-full h-[calc(100%-6rem)] bg-grey-10 -z-10 rounded-t-16 lg:rounded-t-30" />
        <div className="wrapper-x">
          <HeaderLandingSlider />
          <LogoCloud variant="Landing" />
        </div>
      </div>
    </header>
  )
}
