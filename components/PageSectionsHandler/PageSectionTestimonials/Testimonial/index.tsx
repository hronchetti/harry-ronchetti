import Image from "next/image"

import { Testimonial as TestimonialType } from "@/types"

import { RichText } from "@/components"

export const Testimonial = ({ content, receiver }: TestimonialType) => (
  <>
    {/* @ts-ignore: Unreachable code error */}
    <RichText content={content} />
    {receiver.linkedInProfile ? (
      <a
        href={receiver.linkedInProfile}
        target="_blank"
        rel="noreferrer"
        className="grid grid-cols-[3rem_1fr] gap-4 mt-8 w-max"
      >
        <div className="relative pointer-events-none">
          <Image
            className="object-cover w-12 h-12 rounded-full"
            src={receiver.photo.url}
            width={receiver.photo.width}
            height={receiver.photo.height}
            alt={receiver.photo.title}
          />
          <span className="absolute block w-6 h-6 -bottom-1 -left-1">
            <span className="absolute w-4 h-4 bg-white left-1 top-1" />
            <span className="icon-linkedin text-[#0A66C2] block absolute left-0 text-2xl leading-6 top-0" />
          </span>
        </div>
        <div className="pointer-events-none">
          <span className="block mb-1 text-lg font-semibold leading-6 text-grey-100">
            {receiver.name}
          </span>
          <span className="block text-base leading-5 text-grey-70">
            {receiver.jobTitle + ", " + receiver.company.name}
          </span>
        </div>
      </a>
    ) : (
      <span className="grid grid-cols-[3rem_1fr] gap-4 mt-8 w-max">
        <div className="relative pointer-events-none">
          <Image
            className="object-cover w-12 h-12 rounded-full"
            src={receiver.photo.url}
            width={receiver.photo.width}
            height={receiver.photo.height}
            alt={receiver.photo.title}
          />
        </div>
        <div className="pointer-events-none">
          <span className="block mb-1 text-lg font-semibold leading-6 text-grey-100">
            {receiver.name}
          </span>
          <span className="block text-base leading-5 text-grey-70">
            {receiver.jobTitle + ", " + receiver.company.name}
          </span>
        </div>
      </span>
    )}
  </>
)
