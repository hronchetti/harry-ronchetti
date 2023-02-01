import { PageSectionsAccordions } from "@/types"
import { Accordion } from "./Accordion"

export const PageSectionAccordions = ({
  backgroundColour,
  heading,
  accordionsCollection,
  orientation,
  paddingBottom,
  variant,
  roundedTop,
}: PageSectionsAccordions & {
  orientation: "text-left" | "text-right"
  paddingBottom: boolean
  roundedTop: boolean
}) => {
  const content =
    variant === "Video Ask" ? (
      <>Video Ask</>
    ) : variant === "Tools" ? (
      <>Tools</>
    ) : (
      <></>
    )
  return (
    <section
      className={`${
        backgroundColour === "grey-10" ? "bg-grey-10" : "bg-white"
      } ${
        roundedTop ? "rounded-16 lg:rounded-30" : "rounded-b-16 lg:rounded-b-30"
      }`}
    >
      {orientation === "text-left" ? (
        <div
          className={`wrapper-x lg:grid lg:grid-cols-2 lg:gap-24 ${
            paddingBottom ? "wrapper-y" : "wrapper-t"
          }`}
        >
          <div>
            <h2 className="mb-6 heading-sm text-grey-100 lg:mb-8">{heading}</h2>
            <div>
              {accordionsCollection.items.map((item, index) => (
                <Accordion
                  key={item.sys.id}
                  emoji={item.emoji}
                  heading={item.heading}
                  content={item.content}
                  sys={item.sys}
                  borderBottom={index === accordionsCollection.items.length - 1}
                />
              ))}
            </div>
          </div>
          <div>{content}</div>
        </div>
      ) : (
        <div
          className={`wrapper-x lg:grid lg:grid-cols-2 lg:gap-24 ${
            paddingBottom ? "wrapper-y" : "wrapper-t"
          }`}
        >
          <div>{content}</div>
          <div>
            <h2 className="mb-6 heading-sm text-grey-100 lg:mb-8">{heading}</h2>
            <div>
              {accordionsCollection.items.map((item, index) => (
                <Accordion
                  key={item.sys.id}
                  emoji={item.emoji}
                  heading={item.heading}
                  content={item.content}
                  sys={item.sys}
                  borderBottom={index === accordionsCollection.items.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
