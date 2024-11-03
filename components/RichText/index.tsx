import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  BLOCKS,
  UnorderedList,
  ListItem,
  Paragraph,
  Hyperlink,
  INLINES,
  MARKS,
  Text,
} from "@contentful/rich-text-types"

type Props = {
  content: {
    json: Document
  }
}

export const RichText = ({ content }: Props) => {
  const handleBulletMarks = (content: Text) => {
    const bold = content.marks.some((mark) => mark.type === "bold")
    const italic = content.marks.some((mark) => mark.type === "italic")

    const element: React.ReactNode =
      bold && italic ? (
        <i className="italic font-semibold text-grey-100">{content.value}</i>
      ) : bold ? (
        <b className="font-semibold text-grey-100">{content.value}</b>
      ) : italic ? (
        <i className="italic">{content.value}</i>
      ) : (
        <></>
      )
    return element
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: (node: string) => (
        <b className="font-semibold text-grey-100">{node}</b>
      ),
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node: Hyperlink) => (
        <a
          className="inline underline break-words hover:no-underline"
          href={node.data.uri}
          target="_blank"
          rel="noreferrer"
        >
          {node.content[0].value}
        </a>
      ),
      [BLOCKS.UL_LIST]: (node: UnorderedList) => (
        <ul className="mt-3 mb-4 lg:mb-8 lg:mt-6 last-of-type:mb-0">
          {node.content.map((bullet: ListItem, index) => (
            <li className="relative mt-2 lg:mt-3" key={index}>
              <span className="absolute block w-1.5 h-1.5 rounded-full bg-yellow left-[11px] top-[11px]" />
              <span className="block pl-8">
                {bullet.content[0].content.map((content, index) => (
                  <React.Fragment key={content.nodeType + index}>
                    {content.nodeType === "text" && content.value !== "" && (
                      <>
                        {content.marks.length > 0
                          ? handleBulletMarks(content)
                          : content.value}
                      </>
                    )}
                    {content.nodeType === "hyperlink" && (
                      <a
                        className="inline underline break-words hover:no-underline"
                        href={content.data.uri}
                      >
                        {content.content[0].nodeType === "text" &&
                          content.content[0].value}
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </span>
            </li>
          ))}
        </ul>
      ),
      [BLOCKS.PARAGRAPH]: (node: Paragraph, children: string[]) => (
        <p className="mb-3 lg:mb-5 last-of-type:mb-0">{children}</p>
      ),
    },
  }

  return (
    <>
      {/* @ts-ignore */}
      {documentToReactComponents(content.json, options)}
    </>
  )
}
