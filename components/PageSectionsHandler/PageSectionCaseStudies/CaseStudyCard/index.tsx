"use client"

import TrackVisibility from "react-on-screen"
import Image from "next/image"

import { CaseStudy } from "@/types"

import { Tags } from "@/components"

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
        className={`block group lg:grid lg:grid-cols-2 will-change-transform transition-all duration-300 ease-out delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
        href={websiteUrl}
        target="_blank"
        rel="noreferrer"
      >
        <div className="order-2 overflow-hidden rounded-t-8 lg:rounded-l-none lg:rounded-r-16 2xl:rounded-r-20">
          <Image
            className="object-cover w-full h-full transition-all duration-300 scale-100 rotate-0 ease max-h-64 lg:max-h-full rounded-t-8 lg:rounded-l-none lg:rounded-r-16 2xl:rounded-r-20 will-change-transform group-hover:scale-105 group-hover:rotate-1 group-hover:brightness-90 brightness-100"
            src={featuredImage.url}
            width={featuredImage.width}
            height={featuredImage.height}
            alt={featuredImage.title}
          />
        </div>
        <div className="order-1 p-6 text-white lg:p-12 xl:p-16 2xl:p-20 bg-grey-90 rounded-b-8 lg:rounded-br-none lg:rounded-l-16 2xl:rounded-l-20">
          <span className="block pre-heading">{client.name}</span>
          <h2 className="my-4 text-white capitalize heading-lg lg:my-6">
            {title}
          </h2>
          <p className="mb-6 lg:mb-8">{description}</p>
          <Tags tags={tagsCollection.items} />
          <span className="flex justify-start pb-2 mt-3 lg:mt-5 2xl:mt-6">
            <span className="block leading-6">View website</span>
            <span
              className={`icon-external-link block text-2xl leading-6 pl-2 group-hover:pl-3 transition-all will-change-auto`}
            />
          </span>
        </div>
      </a>
    )}
  </TrackVisibility>
)
