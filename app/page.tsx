import { getPageData } from "@/utils"
import type { Page } from "@/types"
import { PageSectionsHandler, Seo, HeaderLanding } from "@/components"

export default async function Home() {
  const data: Page = await getPageData("1ToLlYVJrtUPYsRWxXYHJp")

  return (
    <>
      <HeaderLanding
        heading={data.page.header.heading}
        description={data.page.header.description}
        variant={data.page.header.variant}
      />
      <PageSectionsHandler sections={data.page.sectionsCollection.items} />
      <Seo
        title={data.page.seo.title}
        metaDescription={data.page.seo.description}
        titleTemplate={data.page.seo.titleExtension}
        article={false}
        slug="/"
      />
    </>
  )
}
