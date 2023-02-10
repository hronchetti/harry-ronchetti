import Blob from "@/lib/blob.svg"

export const VideoAsk = () => (
  <div className="relative md:py-12">
    <div className="absolute hidden w-[31rem] h-[31rem] -translate-x-1/2 -translate-y-1/2 md:block left-1/2 top-1/2 z-10">
      <Blob />
    </div>
    <div className="hidden w-full h-[400px] md:block invisible"></div>
    <iframe
      title="Tell me about your SaaS Product"
      className="rounded-3xl max-w-[576px] mx-auto z-20 md:absolute md:-translate-y-1/2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 shadow-[0_8px_48px_-12px_rgba(18,25,38,0.16)] bg-grey-90"
      src="https://www.videoask.com/fprsym165"
      allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
      width="100%"
      height="400px"
    />
  </div>
)
