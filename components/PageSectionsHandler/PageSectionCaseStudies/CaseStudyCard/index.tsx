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
  <a
    className="block overflow-hidden bg-grey-90 rounded-8 lg:rounded-16 2xl:rounded-20 group lg:grid lg:grid-cols-2"
    href={websiteUrl}
    target="_blank"
    rel="noreferrer"
  >
    <div className="order-2">
      <Image
        className="object-cover w-full h-full"
        src={featuredImage.url}
        width={featuredImage.width}
        height={featuredImage.height}
        alt={featuredImage.title}
      />
    </div>
    <div className="order-1 p-6 text-white lg:p-12 xl:p-16 2xl:p-20">
      <span className="block pre-heading">{client.name}</span>
      <h2 className="my-4 text-white heading-lg lg:my-6">{title}</h2>
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
)