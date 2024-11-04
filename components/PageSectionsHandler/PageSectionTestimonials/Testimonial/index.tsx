import Image from "next/image"

import { Testimonial as TestimonialType } from "@/types"

import { RichText } from "@/components"

export const Testimonial = ({ content, receiver }: TestimonialType) => (
  <>
    <div className="relative overflow-hidden h-96">
      {/* @ts-ignore */}
      <RichText content={content} />
      <span className="absolute bottom-0 z-10 block w-full h-48 bg-gradient-to-b from-transparent to-grey-10" />
    </div>
    {receiver.linkedInProfile ? (
      <a
        href={receiver.linkedInProfile}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-start w-full mt-8 flex-nowrap"
      >
        <Image
          className="object-cover w-12 h-12 mr-4 rounded-full"
          src={receiver.photo.url}
          width={receiver.photo.width}
          height={receiver.photo.height}
          alt={receiver.photo.title}
        />
        <span className="absolute block w-6 h-6 -bottom-1 -left-1">
          <span className="absolute w-4 h-4 bg-white left-1 top-1" />
          <span className="icon-linkedin text-[#0A66C2] block absolute left-0 text-2xl leading-6 top-0" />
        </span>

        <div className="w-[calc(100%-64px)] pointer-events-none">
          <span className="block w-full mb-1 text-lg font-semibold leading-6 text-grey-100">
            {receiver.name}
          </span>
          <span className="block w-full text-base leading-5 truncate text-grey-80">
            {receiver.jobTitle + ", " + receiver.company.name}
          </span>
        </div>
      </a>
    ) : (
      <span className="flex items-center justify-start w-full mt-8 flex-nowrap">
        <Image
          className="object-cover w-12 h-12 mr-4 rounded-full"
          src={receiver.photo.url}
          width={receiver.photo.width}
          height={receiver.photo.height}
          alt={receiver.photo.title}
        />
        <div className="w-[calc(100%-64px)] pointer-events-none">
          <span className="block w-full mb-1 text-lg font-semibold leading-6 text-grey-100">
            {receiver.name}
          </span>
          <span className="block w-full text-base leading-5 truncate text-grey-70">
            {receiver.jobTitle + ", " + receiver.company.name}
          </span>
        </div>
      </span>
    )}
  </>
)
