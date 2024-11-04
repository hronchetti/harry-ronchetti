import type { PageSectionsHeader } from "@/types"
import { ButtonLink } from "@/components"

export const HeaderLanding = ({ heading, description }: PageSectionsHeader) => (
  <header className="w-full text-center">
    <div className="relative overflow-hidden">
      <div className="flex flex-wrap justify-center pt-6 pb-10 md:pt-12 md:pb-12 lg:pt-16 lg:pb-20 xl:pb-24 wrapper-x">
        <span className="block px-2 py-1 mb-5 xl:mb-7 text-sm font-medium tracking-widest uppercase border rounded-lg sm:mb-6 text-grey-70 bg-grey-20 border-grey-30">
          Looking for a new role
        </span>
        <div className="w-full flex justify-center">
          <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text heading-xl text-transparent">
            {heading}
          </h1>
          </div>
          {description && (
            <div className="w-full">
            <p className="max-w-md mx-auto mt-5 lg:mt-6">{description}</p></div>
          )}
        
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
