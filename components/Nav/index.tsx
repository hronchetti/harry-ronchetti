import React from "react"
import Image from "next/image"
import Link from "next/link"

import HarryRonchettiHeadshot from "@/lib/harry-ronchetti-headshot.jpeg"

export const Nav = () => (
  <nav className="sticky top-0 left-0 z-50 w-full bg-white">
    <div className="flex items-center justify-between lg:grid md:grid-cols-3 p-4 md:px-12 xl:px-24 max-w-[1440px] mx-auto md:py-6">
      <div>
        <Link href="/" className="flex items-center justify-start w-max">
          <Image
            className="block mr-3 overflow-hidden rounded-full w-9 h-9"
            src={HarryRonchettiHeadshot}
            alt="Harry Ronchetti Headshot"
          />
          <span className="block text-lg font-semibold leading-6 text-grey-100">
            Harry Ronchetti
          </span>
        </Link>
      </div>
      <div className="hidden lg:block">
        <span className="block font-medium text-center text-grey-50">
          Frontend Software Engineer
        </span>
      </div>
      <ul className="flex justify-center lg:justify-end">
        <li>
          <a
            aria-label="LinkedIn"
            className="block mx-2 text-grey-60 hover:text-grey-90"
            href="https://www.linkedin.com/in/harry-ronchetti/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-linkedin block leading-7 text-[1.75rem] lg:text-2xl lg:leading-6" />
          </a>
        </li>
        <li>
          <a
            aria-label="GitHub"
            className="block mx-2 text-grey-60 hover:text-grey-90"
            href="https://github.com/hronchetti"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-github block leading-7 text-[1.75rem] lg:text-2xl lg:leading-6" />
          </a>
        </li>
        <li>
          <a
            aria-label="Medium"
            className="block mx-2 text-grey-60 hover:text-grey-90"
            href="https://medium.com/@harryronchetti"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-medium block leading-7 text-[1.75rem] lg:text-2xl lg:leading-6" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)
