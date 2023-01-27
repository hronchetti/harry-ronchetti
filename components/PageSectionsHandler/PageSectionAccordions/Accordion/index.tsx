"use client"

import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import type { Accordion as AccordionType } from "@/types"

export const Accordion = ({
  emoji,
  heading,
  content,
  borderBottom = false,
}: AccordionType & { borderBottom?: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const accordionElement = React.useRef<HTMLDivElement>(null)

  const toggleAccordion = () => {
    const accordionBody = accordionElement.current
    const accordionBodyHeight = accordionBody?.scrollHeight

    if (accordionBody?.style.maxHeight) {
      if (accordionBody) {
        // @ts-ignore: Unreachable code error
        accordionBody.style.maxHeight = null
      }
      setIsOpen(false)
    } else {
      if (accordionBody) {
        accordionBody.style.maxHeight = accordionBodyHeight + "px"
      }
      setIsOpen(true)
    }
  }
  return (
    <div
      className={`w-full transition-all border-t will-change-auto border-grey-30${
        borderBottom ? " border-b" : ""
      }`}
    >
      <button
        onClick={() => toggleAccordion()}
        className="relative w-full text-left grid gap-4 grid-cols-[1fr_1.75rem] lg:grid-cols-[1fr_2rem] py-4 lg:py-6"
      >
        <span
          className={`${
            emoji ? "grid grid-cols-[1.5rem_1fr] gap-3" : "block"
          } py-0.5 lg:py-1`}
        >
          {emoji && (
            <span className="block text-[1.375rem] lg:text-2xl leading-6 w-6 h-6 relative lg:-top-1">
              {emoji}
            </span>
          )}
          <span className="block text-lg font-semibold leading-6 lg:text-xl lg:leading-6 text-grey-100">
            {heading}
          </span>
        </span>
        <span className="relative block">
          <span
            className={`icon-chevron-down text-grey-50 absolute right-0 top-0 transition-all will-change-auto duration-300 text-[1.75rem] lg:text-[2rem] leading-7 lg:leading-8 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
      </button>
      <div
        ref={accordionElement}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className={`pb-6 lg:pb-8 ${emoji ? "pl-9" : ""}`}>
          {documentToReactComponents(content.json)}
        </div>
      </div>
    </div>
  )
}
