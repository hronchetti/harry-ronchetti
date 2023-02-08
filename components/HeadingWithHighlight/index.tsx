export const HeadingWithHighlight = ({
  headingHighlight,
  heading,
  variant,
  isVisible,
}: {
  headingHighlight?: string
  heading: string
  variant: "heading-md" | "heading-sm"
  isVisible?: boolean
}) => {
  if (headingHighlight && heading.includes(headingHighlight)) {
    const headingArray = heading.split(headingHighlight)

    const rounded = variant === "heading-md" ? "rounded-5" : "rounded-2xl"
    const padding = variant === "heading-md" ? "px-2.5" : "px-2"
    return (
      <>
        {headingArray[0].length > 0 && (
          <>
            <span className="inline-block">{headingArray[0]}</span>{" "}
          </>
        )}
        <span className={`inline-block ${padding} relative`}>
          <span>{headingHighlight}</span>
          <span
            className={`absolute h-full bg-yellow ${rounded} left-0 top-0 z-[-1] will-change-transform transition-all duration-300 ease-[cubic-bezier(.22,.68,0,1)] delay-600 ${
              isVisible ? "w-full" : "w-0"
            }`}
          ></span>
        </span>
        {headingArray[1] !== "?" ? " " : ""}
        <span className="inline-block">{headingArray[1]}</span>
      </>
    )
  } else {
    return <>{heading}</>
  }
}
