import React from "react"
import dayjs from "dayjs"

import type { Seo as SeoType } from "@/types"

export const Seo = ({
  title,
  description,
  socialImage,
  article,
  updatedAt,
  createdAt,
  slug,
}: SeoType & {
  article: boolean
  createdAt?: string
  updatedAt?: string
  slug: string
}) => {
  const seoTitle = title

  const seoSlug = (slug: string) => {
    if (slug !== "/") {
      return process.env.NEXT_PUBLIC_SITE_URL + slug
    } else {
      return process.env.NEXT_PUBLIC_SITE_URL
    }
  }

  return (
    <>
      <title>{seoTitle}</title>
      <meta property="og:site_name" content="Harry Ronchetti" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {/* Urls */}
      <link rel="canonical" href={seoSlug(slug)} />
      <meta property="og:url" content={seoSlug(slug)} />
      {/* Description */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      {/* Twitter */}
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:creator" content="@Breeze_Academy" />
      <meta name="twitter:site" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          socialImage
            ? socialImage.url
            : process.env.NEXT_PUBLIC_SITE_URL + "/harry-ronchetti-homepage.jpg"
        }
      />
      <meta
        property="og:image"
        content={
          socialImage
            ? socialImage.url
            : process.env.NEXT_PUBLIC_SITE_URL + "/harry-ronchetti-homepage.jpg"
        }
      />
      <meta
        property="og:image:width"
        content={socialImage ? socialImage.width.toString() : "1440"}
      />
      <meta
        property="og:image:height"
        content={socialImage ? socialImage.height.toString() : "960"}
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
    </>
  )
}
