"use client"

import React from "react"
import TrackVisibility from "react-on-screen"
import cx from "classnames"
import { Link } from "react-scroll"

export const PageSectionStats = () => (
  <TrackVisibility
    tag="section"
    once
    partialVisibility
    className="flex flex-wrap justify-center"
  >
    {({ isVisible }) => (
      <React.Fragment>
        <ul className="mb-10 grid w-full max-w-5xl gap-6 text-center sm:grid-cols-3 sm:gap-8 xl:gap-30">
          <li
            className={cx(
              "transition-all delay-300 duration-300 ease-out will-change-transform",
              {
                "translate-y-0 opacity-100": isVisible,
                "translate-y-6 opacity-0": !isVisible,
              }
            )}
          >
            <h3 className="mb-1 font-sans text-5xl font-semibold leading-tight tracking-[-0.02em] text-grey-100 md:mb-2 md:leading-tight lg:text-[4rem]">
              8+
            </h3>
            <p className="mx-auto max-w-68 text-grey-100">
              Years experience in software engineering and design
            </p>
          </li>
          <li
            className={cx(
              "transition-all delay-450 duration-300 ease-out will-change-transform",
              {
                "translate-y-0 opacity-100": isVisible,
                "translate-y-6 opacity-0": !isVisible,
              }
            )}
          >
            <h3 className="mb-1 font-sans text-5xl font-semibold leading-tight tracking-[-0.02em] text-grey-100 md:mb-2 md:leading-tight lg:text-[4rem]">
              6+
            </h3>
            <p className="mx-auto max-w-68 text-grey-100">
              Years experience with React.js based technologies
            </p>
          </li>
          <li
            className={cx(
              "transition-all delay-600 duration-300 ease-out will-change-transform",
              {
                "translate-y-0 opacity-100": isVisible,
                "translate-y-6 opacity-0": !isVisible,
              }
            )}
          >
            <h3 className="mb-1 font-sans text-5xl font-semibold leading-tight tracking-[-0.02em] text-grey-100 md:mb-2 md:leading-tight lg:text-[4rem]">
              5+
            </h3>
            <p className="mx-auto max-w-68 text-grey-100">
              Years experience with TypeScript and Next.js
            </p>
          </li>
        </ul>
        <div
          className={cx(
            "flex w-full justify-center transition-all delay-750 duration-300 ease-out will-change-transform",
            {
              "translate-y-0 opacity-100": isVisible,
              "translate-y-6 opacity-0": !isVisible,
            }
          )}
        >
          <Link
            to="work-examples"
            smooth={true}
            className={cx(
              "relative flex cursor-pointer overflow-hidden rounded-lg border border-grey-20 bg-white px-5 py-[15px] font-semibold leading-6 text-grey-90 drop-shadow-md before:pointer-events-none before:absolute before:-left-1/4 before:-top-6 before:z-[-1] before:block before:h-40 before:w-12 before:origin-top-right before:rotate-[35deg] before:bg-grey-40 before:opacity-20 before:transition-all before:duration-700 before:ease-[cubic-bezier(0.19,1,0.22,1)] before:will-change-auto before:content-[''] hover:before:left-[150%]"
            )}
          >
            <span className="icon-arrow-down mr-2 text-2xl leading-6 text-grey-100" />
            Work examples
          </Link>
        </div>
      </React.Fragment>
    )}
  </TrackVisibility>
)
