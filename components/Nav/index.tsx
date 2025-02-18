import React from "react"
import Image from "next/image"
import Link from "next/link"

import HarryRonchettiHeadshot from "@/lib/harry-ronchetti-headshot.jpeg"

export const Nav = () => (
  <nav className="sticky left-0 top-0 z-50 w-full bg-white">
    <div className="mx-auto flex max-w-[1440px] items-center justify-between p-4 md:grid-cols-3 md:px-12 md:py-6 lg:grid xl:px-24">
      <div>
        <Link href="/" className="flex w-max items-center justify-start">
          <Image
            className="mr-3 block h-9 w-9 overflow-hidden rounded-full"
            src={HarryRonchettiHeadshot}
            alt="Harry Ronchetti Headshot"
          />
          <span className="block text-lg font-semibold leading-6 text-grey-100">
            Harry Ronchetti
          </span>
        </Link>
      </div>
      <div className="hidden lg:block">
        <span className="block text-center font-medium text-grey-50">
          Senior Product Engineer
        </span>
      </div>
      <ul className="flex justify-center lg:justify-end">
        <li>
          <a
            aria-label="LinkedIn"
            className="mx-2 block text-grey-60 hover:text-grey-90"
            href="https://www.linkedin.com/in/harry-ronchetti/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-linkedin block text-[1.75rem] leading-7 lg:text-2xl lg:leading-6" />
          </a>
        </li>
        <li>
          <a
            aria-label="GitHub"
            className="mx-2 block text-grey-60 hover:text-grey-90"
            href="https://github.com/hronchetti"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-github block text-[1.75rem] leading-7 lg:text-2xl lg:leading-6" />
          </a>
        </li>
        <li>
          <a
            aria-label="Medium"
            className="mx-2 block text-grey-60 hover:text-grey-90"
            href="https://medium.com/@harryronchetti"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-medium block text-[1.75rem] leading-7 lg:text-2xl lg:leading-6" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)
