import { getPageData } from "@/utils"
import type { Page } from "@/types"
import { PageSectionsHandler, HeaderLanding, Nav } from "@/components"
import { Seo, LogoCloud } from "@/components"
import { PageSectionStats } from "@/components/PageSectionsHandler/PageSectionStats"

export default async function Home() {
  const data: Page = await getPageData("1ToLlYVJrtUPYsRWxXYHJp")

  return (
    <>
      <Nav />
      <HeaderLanding
        heading={data.page.header.heading}
        description={data.page.header.description}
        variant={data.page.header.variant}
      />
      <LogoCloud />
      <PageSectionStats />
      <PageSectionsHandler
        sections={data.page.sectionsCollection.items}
        firstSectionRounded={false}
      />
      <Seo
        title={data.page.seo.title}
        description={data.page.seo.description}
        socialImage={data.page.seo.socialImage}
        article={false}
        slug="/"
      />
    </>
  )
}
