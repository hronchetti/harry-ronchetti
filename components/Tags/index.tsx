import { Tag as TagType } from "@/types"

type Props = {
  tags: TagType[]
}

export const Tags = ({ tags }: Props) => (
  <div className="flex flex-wrap justify-start">
    {tags.map((tag) => (
      <span
        className="block px-3 py-2 mb-3 mr-3 text-white rounded-lg md:px-4 md:py-3 bg-grey-80"
        key={tag.sys.id}
      >
        {tag.name}
      </span>
    ))}
  </div>
)
