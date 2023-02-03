export const HeadingWithHighlight = ({
  headingHighlight,
  heading,
  variant,
}: {
  headingHighlight?: string
  heading: string
  variant: "heading-md" | "heading-sm"
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
        <span className={`inline-block bg-yellow ${padding} ${rounded}`}>
          {headingHighlight}
        </span>
        {headingArray[1] !== "?" ? " " : ""}
        <span className="inline-block">{headingArray[1]}</span>
      </>
    )
  } else {
    return <>{heading}</>
  }
}
