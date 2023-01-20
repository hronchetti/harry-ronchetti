import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components"

import HarryRonchettiHeadshot from "@/lib/harry-ronchetti-headshot.jpeg"

type Props = {
  variant: "book-call" | "case-studies"
}

export const Nav = ({ variant }: Props) => (
  <nav className="flex items-center justify-between lg:grid md:grid-cols-3 py-2.5 px-4 md:px-12 xl:px-24 max-w-[1440px] mx-auto md:py-4">
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
        Freelance SaaS Product Designer
      </span>
    </div>
    <div className="flex justify-end">
      {variant === "book-call" ? (
        <Button
          style="grey-100"
          variant="nav"
          href={
            process.env.NEXT_PUBLIC_BOOKING_URL
              ? process.env.NEXT_PUBLIC_BOOKING_URL
              : ""
          }
        >
          Book <span className="hidden md:inline">discovery </span>call
        </Button>
      ) : (
        <Button style="outline" href="/case-studies" variant="nav">
          Case studies
        </Button>
      )}
    </div>
  </nav>
)
