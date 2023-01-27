import { getPageData } from "@/utils"
import type { Page } from "@/types"
import { Seo } from "@/components"

export default async function Head() {
  const data: Page = await getPageData("1ToLlYVJrtUPYsRWxXYHJp")

  return (
    <Seo
      title={data.page.seo.title}
      metaDescription={data.page.seo.description}
      titleTemplate={data.page.seo.titleExtension}
      article={false}
      slug="/"
    />
  )
}
