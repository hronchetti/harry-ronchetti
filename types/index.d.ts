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
        PageSectionsStrap,
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
  content: {
    json: Document
  }
}

export type Client = {
  name
}

export type ClientPersonel = {
  name: string
  jobTitle: string
  photo: MediaAsset
  linkedInProfile: string
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

// Page Sections

export type PageSectionsHeader = {
  heading: string
  description?: string
  variant: "Landing" | "Case studies"
}

export type PageSectionsAccordions = {
  __typename: "PageSectionsAccordions"
  sys: {
    id: string
  }
  heading: string
  accordionsCollection: {
    items: Accordion[]
  }
}

export type PageSectionsCaseStudies = {
  __typename: "PageSectionsCaseStudies"
  sys: {
    id: string
  }
  caseStudiesCollection: {
    items: CaseStudy[]
  }
}

export type PageSectionsStrap = {
  __typename: "PageSectionsStrap"
  sys: {
    id: string
  }
  preHeading: string
  heading: string
  description: string
  button: "Book cal"
}

export type PageSectionsTestimonials = {
  __typename: "PageSectionsTestimonials"
  sys: {
    id: string
  }
  heading: string
  testimonialsCollection: {
    items: Testimonial[]
  }
}
