import { getPageData } from "@/utils"
import type { Page } from "@/types"
import { PageSectionsHandler, Header, Nav } from "@/components"

export default async function Home() {
  const data: Page = await getPageData("1SRB3gvdQ0mPzwJKV1z6Hr")

  return (
    <>
      <Nav variant="book-call" type="static" />
      <Nav variant="book-call" type="fixed" />
      <Header
        heading={data.page.header.heading}
        description={data.page.header.description}
        variant={data.page.header.variant}
      />
      <PageSectionsHandler sections={data.page.sectionsCollection.items} />
    </>
  )
}
