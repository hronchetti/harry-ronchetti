export async function fetchGraphQL(query: any, preview = false) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  )
  const data = await response.json()
  return data?.data
}

export async function getPageData(pageId: string, preview = false) {
  return await fetchGraphQL(
    `query pageEntryQuery {
        page(id: "${pageId}", preview: ${preview ? "true" : "false"}) {
          sys {
            id
          }
          variant
          header {
            heading
            description
            variant
          }
          sectionsCollection(limit: 6) {
            items {
              ... on PageSectionsAccordions {
                __typename
                sys {
                  id
                }
                heading
                headingHighlight
                backgroundColour
                variant
                accordionsCollection(limit: 10) {
                  items {
                    sys {
                      id
                    }
                    emoji
                    heading
                    content {
                      json
                    }
                  }
                }
              }
              ... on PageSectionsCaseStudies {
                __typename
                sys {
                  id
                }
                backgroundColour
                caseStudiesCollection(limit: 10) {
                  items {
                    sys {
                      id
                    }
                    client {
                      name
                    }
                    title
                    description
                    websiteUrl
                    tagsCollection {
                      items {
                        sys {
                          id
                        }
                        name
                      }
                    }
                    featuredImage {
                      height
                      size
                      title
                      url
                      width
                    }
                  }
                }
              }
              ... on PageSectionsFullWidthImage {
                __typename
                sys {
                  id
                }
                heading
                headingHighlight
                description
                backgroundColour
                image {
                  height
                  size
                  title
                  url
                  width
                }
              }
              ... on PageSectionsTabs {
                __typename
                sys {
                  id
                }
                heading
                headingHighlight
                backgroundColour
                tabsCollection(limit: 2) {
                  items {
                    name
                    image {
                      height
                      size
                      title
                      url
                      width
                    }
                    imageMobile {
                      height
                      size
                      title
                      url
                      width
                    }
                  }
                }
              }
              ... on PageSectionsStrap {
                __typename
                sys {
                  id
                }
                backgroundColour
                preHeading
                heading
                description
                button
              }
              ... on PageSectionsTestimonials {
                __typename
                sys {
                  id
                }
                backgroundColour
                heading
                headingHighlight
                testimonialsCollection(limit: 10) {
                  items {
                    sys {
                      id
                    }
                    content {
                      json
                    }
                    receiver {
                      name
                      jobTitle
                      photo {
                        height
                        size
                        title
                        url
                        width
                      }
                      linkedInProfile
                      company {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
          seo {
            title
            titleExtension {
              extension
            }
            description
          }
        }
      }`,
    preview
  )
}
