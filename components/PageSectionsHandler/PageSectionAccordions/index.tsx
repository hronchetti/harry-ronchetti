import { PageSectionsAccordions } from "@/types"
import { Accordion } from "./Accordion"

export const PageSectionAccordions = ({
  backgroundColour,
  heading,
  accordionsCollection,
  orientation,
  paddingBottom,
}: PageSectionsAccordions & {
  orientation: "text-left" | "text-right"
  paddingBottom: boolean
}) => {
  return (
    <section
      className={backgroundColour === "grey-10" ? "bg-grey-10" : "bg-white"}
    >
      {orientation === "text-left" ? (
        <div
          className={`wrapper-x lg:grid lg:grid-cols-2 lg:gap-24 ${
            paddingBottom ? "wrapper-y" : "wrapper-t"
          }`}
        >
          <div>
            <h2 className="heading-md text-grey-100">{heading}</h2>
            <div>
              {accordionsCollection.items.map((item) => (
                <Accordion
                  key={item.sys.id}
                  heading={item.heading}
                  content={item.content}
                  sys={item.sys}
                />
              ))}
            </div>
          </div>
          <div></div>
        </div>
      ) : (
        <div
          className={`wrapper-x lg:grid lg:grid-cols-2 lg:gap-24 ${
            paddingBottom ? "wrapper-y" : "wrapper-t"
          }`}
        >
          <div></div>
          <div>
            <h2 className="heading-md text-grey-100">{heading}</h2>
            <div>
              {accordionsCollection.items.map((item) => (
                <Accordion
                  key={item.sys.id}
                  heading={item.heading}
                  content={item.content}
                  sys={item.sys}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
