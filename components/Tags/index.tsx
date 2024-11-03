import { Tag as TagType } from "@/types"

type Props = {
  tags: TagType[]
}

export const Tags = ({ tags }: Props) => (
  <div className="flex flex-wrap justify-start">
    {tags.map((tag) => (
      <span
        className="block px-2 py-1.5 sm:px-3 sm:py-2 mb-3 mr-3 rounded-lg text-grey-100 bg-grey-20"
        key={tag.sys.id}
      >
        {tag.name}
      </span>
    ))}
  </div>
)
