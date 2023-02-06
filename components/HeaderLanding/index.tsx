import type { PageSectionsHeader } from "@/types"
import { Button, LogoCloud } from "@/components"
import { HeaderLandingSlider } from "./HeaderLandingSlider"

export const HeaderLanding = ({ heading, description }: PageSectionsHeader) => {
  return (
    <header className="w-full text-center">
      <div className="relative overflow-hidden">
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
        <svg
          className="absolute left-0 top-9 w-[484px] z-[-1] hidden lg:block wiggle"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 484 361"
        >
          <g clipPath="url(#a)">
            <path
              stroke="#FAC515"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="120"
              d="M0 61c52.875 0 52.875 240 105.75 240S158.625 61 211.5 61s52.875 240 105.75 240S423 61 423 61"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h484v361H0z" />
            </clipPath>
          </defs>
        </svg>
        {/* <svg
          className="absolute left-[-484px] top-9 w-[968px] z-[-1] hidden lg:block wiggle"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 968 361"
        >
          <path
            stroke="#FAC515"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="120"
            d="M61 61s52.875 240 105.75 240S219.625 61 272.5 61s52.875 240 105.75 240S431.125 61 484 61s52.875 240 105.75 240S642.625 61 695.5 61s52.875 240 105.75 240S907 61 907 61"
          />
        </svg> */}
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
