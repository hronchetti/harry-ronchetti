"use client"

import TrackVisibility from "react-on-screen"
import Image from "next/image"
import cx from "classnames"

import { CaseStudy } from "@/types"

import { Tags } from "@/components"

const getCleanUrl = (url: string) => {
  const cleanUrl = url.replace(/(^\w+:|^)\/\//, "")
  return cleanUrl
}

export const CaseStudyCard = ({
  client,
  title,
  description,
  websiteUrl,
  tagsCollection,
  featuredImage,
}: CaseStudy) => (
  <TrackVisibility tag="section" once partialVisibility>
    {({ isVisible }) => (
      <a
        className={cx(
          "group block overflow-hidden rounded-8 border border-grey-20 bg-grey-10 text-grey-100 transition-all delay-300 duration-300 ease-out will-change-transform lg:grid lg:grid-cols-2 lg:rounded-16 2xl:rounded-20",
          {
            "translate-y-0 opacity-100": isVisible,
            "translate-y-6 opacity-0": !isVisible,
          }
        )}
        href={websiteUrl}
        target="_blank"
        rel="noreferrer"
      >
        <div className="order-2 overflow-hidden">
          <Image
            className="ease h-full max-h-64 w-full rotate-0 scale-100 rounded-t-8 object-cover brightness-100 transition-all duration-300 will-change-transform group-hover:rotate-1 group-hover:scale-105 group-hover:brightness-90 lg:max-h-full lg:rounded-l-none lg:rounded-r-16 2xl:rounded-r-20"
            src={featuredImage.url}
            width={featuredImage.width}
            height={featuredImage.height}
            alt={featuredImage.title}
          />
        </div>
        <div className="order-1 rounded-b-8 p-6 sm:p-8 md:p-12 lg:rounded-l-16 lg:rounded-br-none lg:p-14 xl:p-16 2xl:rounded-l-20 2xl:p-20">
          <span className="pre-heading flex items-center justify-start gap-2">
            {client.name}
            {client.label && (
              <span className="text-grey-95 inline-block rounded-lg bg-yellow p-1 px-1.5 font-medium leading-5">
                {client.label}
              </span>
            )}
          </span>
          <h2 className="heading-lg my-4 capitalize lg:my-6">{title}</h2>
          <p className="mb-6 text-base md:text-lg lg:mb-8">{description}</p>
          <Tags tags={tagsCollection.items} />
          <span className="mt-4 flex items-center justify-start lg:mt-5 2xl:mt-6">
            <span className="icon-external-link block pr-2 text-2xl leading-6 transition-all will-change-auto group-hover:pr-3" />
            <span className="block text-base font-medium leading-6 md:text-lg">
              {getCleanUrl(websiteUrl)}
            </span>
          </span>
        </div>
      </a>
    )}
  </TrackVisibility>
)
