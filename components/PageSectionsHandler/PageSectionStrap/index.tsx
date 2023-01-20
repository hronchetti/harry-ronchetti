import { PageSectionsStrap } from "@/types"

export const PageSectionStrap = ({ backgroundColour }: PageSectionsStrap) => {
  return (
    <section className="wrapper-x">
      <div
        className={
          backgroundColour === "grey-90" ? "bg-grey-90 text-white" : "bg-white"
        }
      >
        <div className="">PageSectionStrap</div>
      </div>
    </section>
  )
}
