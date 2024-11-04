import { Tag as TagType } from "@/types"

type Props = {
  tags: TagType[]
}

export const Tags = ({ tags }: Props) => (
  <div className="flex flex-wrap justify-start">
    {tags.map((tag) => (
      <span
        className="mb-2 mr-2 block rounded-lg bg-grey-20 px-2 py-1.5 text-base text-grey-100 sm:mb-3 sm:mr-3 sm:px-3 sm:py-2 md:text-lg"
        key={tag.sys.id}
      >
        {tag.name}
      </span>
    ))}
  </div>
)
