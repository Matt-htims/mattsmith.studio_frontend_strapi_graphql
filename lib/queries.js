export const HOMEPAGE_QUERY = `query HomePage {
  homePage {
    data {
      attributes {
        homePage {
          ... on ComponentBlockCtaSection {
            mainText
            subText
            buttonText
            buttonLink
          }
          ... on ComponentBlockInfoGallery {
            title
            works {
              data {
                id
                attributes {
                  name
                  description
                  slug
                  image {
                    data {
                      attributes {
                        formats
                        alternativeText
                      }
                    }
                  }
                }
              }
            }
          }
          ... on ComponentBlockPageIntro {
            title
            subtitle
            image {
              data {
                attributes {
                  placeholder
                  formats
                }
              }
            }
          }
          ... on ComponentBlockSideBySideText {
            largeText
            largeOnLeft
            smallText2
            smallText1
          }
          ... on ComponentBlockTripleExplainer {
            title
            individualServices {
              id
              title
              copy
              bottomText
              bottomText2
              image {
                data {
                  attributes {
                    width
                    height
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export const WORKS_QUERY = `query Works {
  works {
    data {
      id
      attributes {
        name
        description
        link
        slug
        image {
          data {
            attributes {
              formats
              alternativeText
            }
          }
        }
      }
    }
  }
}`;

export const PATHS_QUERY = `query Paths {
  works {
    data {
      attributes {
        slug
      }
    }
  }
}`;

export const WORK_QUERY = `query Work($filters: WorkFiltersInput) {
  works(filters: $filters) {
    data {
      attributes {
        name
        description
        link
        fullScreenImage {
          data {
            attributes {
              width
              height
              alternativeText
              url
              placeholder
            }
          }
        }
      }
    }
  }
}`;
