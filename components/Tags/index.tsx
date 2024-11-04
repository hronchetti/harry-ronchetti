import { Tag as TagType } from "@/types"

type Props = {
  tags: TagType[]
}

export const Tags = ({ tags }: Props) => (
  <div className="flex flex-wrap justify-start">
    {tags.map((tag) => (
      <span
        className="block px-2 text-base md:text-lg py-1.5 sm:px-3 sm:py-2 mb-2 mr-2 sm:mb-3 sm:mr-3 rounded-lg text-grey-100 bg-grey-20"
        key={tag.sys.id}
      >
        {tag.name}
      </span>
    ))}
  </div>
)
