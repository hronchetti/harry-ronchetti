import { Tool } from "./Tool"

// Blobs

import Blob from "@/lib/blob.svg"
import BlobGrey from "@/lib/blob-grey.svg"

// Tools

import FigmaLogo from "@/lib/logos/tools/figma-logo.svg"
import GoogleDocsLogo from "@/lib/logos/tools/google-docs-logo.svg"
import HotJarLogo from "@/lib/logos/tools/hotjar-logo.svg"
import LoomLogo from "@/lib/logos/tools/loom-logo.svg"
import MiroLogo from "@/lib/logos/tools/miro-logo.svg"
import MixPanelLogo from "@/lib/logos/tools/mixpanel-logo.svg"

export const ToolsSection = () => (
  <div className="relative pointer-events-none">
    <div className="lg:relative max-w-[30rem] lg:max-w-[calc(100%-6rem)] lg:mx-auto absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[calc(100%+3rem)] lg:translate-x-0 lg:translate-y-0 lg:left-0 lg:top-0">
      <div>
        <BlobGrey />
      </div>
      <div className="absolute w-3/4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-3/4">
        <Blob />
      </div>
    </div>
    <div className="lg:absolute grid grid-cols-2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:top-1/2 lg:grid-cols-3 w-[258px] gap-7 mx-auto lg:w-[25rem]">
      <Tool logo={<HotJarLogo />} name="Hotjar" />
      <Tool logo={<MixPanelLogo />} name="Mixpanel" />
      <Tool logo={<GoogleDocsLogo />} name="Google Docs" />
      <Tool logo={<FigmaLogo />} name="Figma" />
      <Tool logo={<LoomLogo />} name="Loom" />
      <Tool logo={<MiroLogo />} name="Miro" />
    </div>
  </div>
)
