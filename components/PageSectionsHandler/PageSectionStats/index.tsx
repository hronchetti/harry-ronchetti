"use client"

import React from "react"
import TrackVisibility from "react-on-screen"
import cx from "classnames"
import { Link } from "react-scroll"

export const PageSectionStats = () => (
  <section className="pt-16 sm:pt-20 lg:pt-24 wrapper-x">
    <TrackVisibility
      tag="section"
      once
      partialVisibility
      className="flex flex-wrap justify-center"
    >
      {({ isVisible }) => (
        <React.Fragment>
          <ul className="grid w-full max-w-5xl gap-6 sm:gap-8 mb-10 text-center sm:grid-cols-3 xl:gap-30">
            <li
              className={cx(
                "will-change-transform transition-all duration-300 ease-out delay-300",
                {
                  "translate-y-0 opacity-100": isVisible,
                  "translate-y-6 opacity-0": !isVisible,
                }
              )}
            >
              <h3 className="mb-1 md:mb-2 font-sans font-semibold leading-tight text-grey-100 text-5xl md:leading-tight lg:text-[4rem] tracking-[-0.02em]">
                18
              </h3>
              <p className="mx-auto text-grey-100 max-w-68">Past projects in software design or development</p>
            </li>
            <li
              className={cx(
                "will-change-transform transition-all duration-300 ease-out delay-450",
                {
                  "translate-y-0 opacity-100": isVisible,
                  "translate-y-6 opacity-0": !isVisible,
                }
              )}
            >
              <h3 className="mb-1 md:mb-2 font-sans font-semibold leading-tight text-grey-100 text-5xl md:leading-tight lg:text-[4rem] tracking-[-0.02em]">
                8+
              </h3>
              <p className="mx-auto text-grey-100 max-w-68">
                Years experience in software engineering and design
              </p>
            </li>
            <li
              className={cx(
                "will-change-transform transition-all duration-300 ease-out delay-600",
                {
                  "translate-y-0 opacity-100": isVisible,
                  "translate-y-6 opacity-0": !isVisible,
                }
              )}
            >
              <h3 className="mb-1 md:mb-2 font-sans font-semibold leading-tight text-grey-100 text-5xl md:leading-tight lg:text-[4rem] tracking-[-0.02em]">
                6+
              </h3>
              <p className="mx-auto text-grey-100 max-w-68">
                Years experience with React.js based technologies
              </p>
            </li>
          </ul>
          <div className={cx("flex justify-center w-full will-change-transform transition-all duration-300 ease-out delay-750", {
                  "translate-y-0 opacity-100": isVisible,
                  "translate-y-6 opacity-0": !isVisible,
                })}>
            <Link
              to="work-examples"
              smooth={true}
              className={cx(
                "rounded-lg cursor-pointer bg-white text-grey-90 border border-grey-20 font-semibold drop-shadow-md overflow-hidden relative before:bg-grey-40 py-[15px] px-5 flex leading-6 inline-block before:content-[''] before:w-12 before:h-40 before:absolute before:-left-1/4 before:-top-6 before:opacity-20 before:pointer-events-none before:block before:z-[-1] before:will-change-auto before:origin-top-right before:duration-700 before:transition-all before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:left-[150%] before:rotate-[35deg]"
              )}
            >
              <span className="mr-2 text-2xl leading-6 icon-arrow-down text-grey-100" />
              Work examples
            </Link>
          </div>
        </React.Fragment>
      )}
    </TrackVisibility>
  </section>
)
