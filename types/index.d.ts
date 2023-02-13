import { Document } from "@contentful/rich-text-types"

export type Page = {
  page: {
    sys: {
      id: string
    }
    variant: "Landing" | "Case studies"
    header: PageSectionsHeader
    sectionsCollection: {
      items: [
        PageSectionsAccordions,
        PageSectionsCaseStudies,
        PageSectionsFullWidthImage,
        PageSectionsStrap,
        PageSectionsTabs,
        PageSectionsTestimonials
      ]
    }
    seo: {
      title: string
      titleExtension: {
        extension: string
      }
      description: string
    }
  }
}

// Components

export type MediaAsset = {
  fileName: string
  height: number
  size: number
  title: string
  url: string
  width: number
}

export type Seo = {
  title: string
  titleTemplate: {
    extension: string
  }
  metaDescription: string
  socialImage?: MediaAsset
}

export type Accordion = {
  sys: {
    id: string
  }
  heading: string
  emoji?: string
  content: {
    json: Document
  }
}

export type Client = {
  name: string
}

export type ClientPersonel = {
  name: string
  jobTitle: string
  photo: MediaAsset
  linkedInProfile?: string
  company: Client
}

export type Testimonial = {
  sys: {
    id: string
  }
  content: {
    json: Document
  }
  receiver: ClientPersonel
}

export type Tag = {
  sys: {
    id: string
  }
  name: string
}

export type CaseStudy = {
  sys: {
    id: string
  }
  client: Client
  title: string
  description: string
  websiteUrl: string
  tagsCollection: {
    items: Tag[]
  }
  featuredImage: MediaAsset
}

export type Tab = {
  name: string
  image: MediaAsset
  imageMobile: MediaAsset
}

// Page Sections

export type PageSectionsHeader = {
  heading: string
  description?: string
  variant: "Landing" | "Case Studies"
}

export type PageSectionsAccordions = {
  __typename: "PageSectionsAccordions"
  sys: {
    id: string
  }
  heading: string
  headingHighlight?: string
  variant: "Video Ask" | "Tools"
  backgroundColour: "white" | "grey-10"
  accordionsCollection: {
    items: Accordion[]
  }
}

export type PageSectionsCaseStudies = {
  __typename: "PageSectionsCaseStudies"
  sys: {
    id: string
  }
  backgroundColour: "white" | "grey-10"
  caseStudiesCollection: {
    items: CaseStudy[]
  }
}

export type PageSectionsFullWidthImage = {
  __typename: "PageSectionsFullWidthImage"
  sys: {
    id: string
  }
  heading: string
  headingHighlight?: string
  description: string
  backgroundColour: "white" | "grey-10"
  image: MediaAsset
}

export type PageSectionsTabs = {
  __typename: "PageSectionsTabs"
  sys: {
    id: string
  }
  heading: string
  headingHighlight: string
  backgroundColour: "white" | "grey-10"
  tabsCollection: {
    items: Tab[]
  }
}

export type PageSectionsStrap = {
  __typename: "PageSectionsStrap"
  sys: {
    id: string
  }
  backgroundColour: "grey-90"
  preHeading: string
  heading: string
  description: string
  button: "Book call"
}

export type PageSectionsTestimonials = {
  __typename: "PageSectionsTestimonials"
  sys: {
    id: string
  }
  heading: string
  headingHighlight?: string
  backgroundColour: "white" | "grey-10"
  testimonialsCollection: {
    items: Testimonial[]
  }
}
