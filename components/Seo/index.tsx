import React from "react"
import Head from "next/head"
import dayjs from "dayjs"

export type Seo = {
  title: string
  titleTemplate: {
    extension: string
  }
  metaDescription: string
  socialImage: {
    url: string
    fileName: string
    height: string
    size: string
    title: string
    width: string
  }
}

export const Seo = ({
  title,
  titleTemplate,
  metaDescription,
  socialImage,
  article,
  updatedAt,
  createdAt,
  slug,
}: Seo & {
  article: boolean
  createdAt?: string
  updatedAt?: string
  slug: string
}) => {
  const seoTitle = title + " " + titleTemplate.extension

  const seoSlug = (slug: string) => {
    if (slug !== "/") {
      return process.env.NEXT_PUBLIC_SITE_URL + slug
    } else {
      return process.env.NEXT_PUBLIC_SITE_URL
    }
  }

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta property="og:site_name" content="Wilder" />
      {/* Urls */}
      <link rel="canonical" href={seoSlug(slug)} />
      <meta property="og:url" content={seoSlug(slug)} />
      {/* Description */}
      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      {/* Twitter */}
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:creator" content="@Breeze_Academy" />
      <meta name="twitter:site" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:image"
        content={
          socialImage
            ? socialImage.url
            : process.env.NEXT_PUBLIC_SITE_URL + "/wilder-trips.jpg"
        }
      />
      <meta
        property="og:image"
        content={
          socialImage
            ? socialImage.url
            : process.env.NEXT_PUBLIC_SITE_URL + "/wilder-trips.jpg"
        }
      />
      <meta
        property="og:image:width"
        content={socialImage ? socialImage.width.toString() : "1200"}
      />
      <meta
        property="og:image:height"
        content={socialImage ? socialImage.height.toString() : "627"}
      />
      {/* Author */}
      {article && <meta property="og:type" content="article" />}
      {article && createdAt && (
        <meta
          property="article:published_time"
          content={dayjs(createdAt).toISOString()}
        />
      )}
      {article && updatedAt && (
        <meta
          property="article:modified_time"
          content={dayjs(updatedAt).toISOString()}
        />
      )}
      {article && <meta property="article:publisher" content="" />}
      {article && <meta property="article:author" content="" />}
    </Head>
  )
}
