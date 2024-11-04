import type { PageSectionsHeader } from "@/types"
import { ButtonLink } from "@/components"

export const HeaderLanding = ({ heading, description }: PageSectionsHeader) => (
  <header className="w-full text-center">
    <div className="relative overflow-hidden">
      <div className="flex flex-wrap justify-center pt-6 pb-10 md:pt-12 md:pb-12 lg:pt-16 lg:pb-16 xl:pb-20 wrapper-x">
        <span className="block px-2 py-1 mb-5 text-sm font-medium tracking-widest uppercase border rounded-lg sm:mb-6 text-grey-70 bg-grey-20 border-grey-30">
          Looking for a new role
        </span>
        <div className="w-full">
          <h1 className="max-w-screen-lg mx-auto text-grey-100 heading-xl">
            {heading}
          </h1>
          {description && (
            <p className="max-w-md mx-auto mt-5 lg:mt-6">{description}</p>
          )}
        </div>
        <div className="mt-5 lg:mt-8">
          <ButtonLink
            href=""
            iconLeft={
              <span className="inline-block mr-2 text-2xl leading-6 text-white icon-download" />
            }
          >
            <span className="inline-block">Download CV</span>
          </ButtonLink>
          <span className="block mt-4 text-xs text-center text-grey-70">
            It&apos;d be rude not too... 👀
          </span>
        </div>
      </div>
    </div>
  </header>
)
