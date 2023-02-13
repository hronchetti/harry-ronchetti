import Image from "next/image"

import { Tab as TabType } from "@/types"

export const Tab = ({
  image,
  imageMobile,
  active,
}: TabType & { active: boolean }) => (
  <>
    <Image
      className={`w-full fadeIn ${active ? "hidden md:block " : "hidden"}`}
      src={image.url}
      alt={image.title}
      width={image.width}
      height={image.height}
    />
    <Image
      className={`w-full max-w-xs mx-auto fadeIn ${
        active ? "block md:hidden" : "hidden"
      }`}
      src={imageMobile.url}
      alt={imageMobile.title}
      width={imageMobile.width}
      height={imageMobile.height}
    />
  </>
)
