import Image from "next/image"

import { Testimonial as TestimonialType } from "@/types"

import { RichText } from "@/components"

export const Testimonial = ({ content, receiver }: TestimonialType) => (
  <>
    <div className="relative h-96 overflow-hidden">
      {/* @ts-ignore */}
      <RichText content={content} />
      <span className="absolute bottom-0 z-10 block h-48 w-full bg-gradient-to-b from-transparent to-grey-10" />
    </div>
    {receiver.linkedInProfile ? (
      <a
        href={receiver.linkedInProfile}
        target="_blank"
        rel="noreferrer"
        className="relative mt-8 flex w-full flex-nowrap items-center justify-start"
      >
        <Image
          className="mr-4 h-12 w-12 rounded-full object-cover"
          src={receiver.photo.url}
          width={receiver.photo.width}
          height={receiver.photo.height}
          alt={receiver.photo.title}
        />
        <span className="absolute -bottom-1 -left-1 block h-6 w-6">
          <span className="absolute left-1 top-1 h-4 w-4 bg-white" />
          <span className="icon-linkedin absolute left-0 top-0 block text-2xl leading-6 text-[#0A66C2]" />
        </span>

        <div className="pointer-events-none w-[calc(100%-64px)]">
          <span className="mb-1 block w-full text-lg font-semibold leading-6 text-grey-100">
            {receiver.name}
          </span>
          <span className="block w-full truncate text-base leading-5 text-grey-80">
            {receiver.jobTitle + ", " + receiver.company.name}
          </span>
        </div>
      </a>
    ) : (
      <span className="mt-8 flex w-full flex-nowrap items-center justify-start">
        <Image
          className="mr-4 h-12 w-12 rounded-full object-cover"
          src={receiver.photo.url}
          width={receiver.photo.width}
          height={receiver.photo.height}
          alt={receiver.photo.title}
        />
        <div className="pointer-events-none w-[calc(100%-64px)]">
          <span className="mb-1 block w-full text-lg font-semibold leading-6 text-grey-100">
            {receiver.name}
          </span>
          <span className="block w-full truncate text-base leading-5 text-grey-70">
            {receiver.jobTitle + ", " + receiver.company.name}
          </span>
        </div>
      </span>
    )}
  </>
)
