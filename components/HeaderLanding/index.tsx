import type { PageSectionsHeader } from "@/types"
import { ButtonLink } from "@/components"

export const HeaderLanding = ({ heading, description }: PageSectionsHeader) => (
  <header className="w-full text-center">
    <div className="relative overflow-hidden">
      <div className="wrapper-x flex flex-wrap justify-center pb-10 pt-6 md:pb-12 md:pt-12 lg:pb-20 lg:pt-16 xl:pb-24">
        <span className="mb-5 block rounded-lg border border-grey-30 bg-grey-20 px-2 py-1 text-sm font-medium uppercase tracking-widest text-grey-70 sm:mb-6 xl:mb-7 xl:text-[15px]">
          Looking for a new role
        </span>
        <div className="flex w-full justify-center">
          <h1 className="heading-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {heading}
          </h1>
        </div>
        {description && (
          <div className="w-full">
            <p className="mx-auto mt-5 max-w-md lg:mt-6 xl:mt-7">
              {description}
            </p>
          </div>
        )}
        <div className="mt-5 lg:mt-8 xl:mt-9">
          <ButtonLink
            href=""
            iconLeft={
              <span className="icon-download mr-2 inline-block text-2xl leading-6 text-white" />
            }
          >
            <span className="inline-block">Download CV</span>
          </ButtonLink>
          <span className="mt-4 block text-center text-xs text-grey-70">
            It&apos;d be rude not too... 👀
          </span>
        </div>
      </div>
    </div>
  </header>
)
