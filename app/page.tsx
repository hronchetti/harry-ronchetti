import { getPageData } from "@/utils"
import type { Page } from "@/types"
import { PageSectionsHandler, HeaderLanding, Nav } from "@/components"

export default async function Home() {
  const data: Page = await getPageData("1ToLlYVJrtUPYsRWxXYHJp")

  return (
    <>
      <Nav variant="case-studies" type="static" />
      <Nav variant="book-call" type="fixed" />
      <HeaderLanding
        heading={data.page.header.heading}
        description={data.page.header.description}
        variant={data.page.header.variant}
      />
      <PageSectionsHandler
        sections={data.page.sectionsCollection.items}
        firstSectionRounded={false}
      />
    </>
  )
}
