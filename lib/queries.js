export const TEST_QUERY = `query TestQuery {
  works {
    data {
      attributes {
        name
        description
      }
    }
  }
}`;

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
	allWorks {
	  link
	  name
	  slug
	  description
	  image {
		responsiveImage {
		  alt
		  aspectRatio
		  base64
		  height
		  sizes
		  src
		  srcSet
		  title
		  webpSrcSet
		  width
		}
	  }
	  id
	}
  }`;

export const PATHS_QUERY = `query Paths {
	allWorks {
	  slug
	}
  }`;

export const WORK_QUERY = `query Work($slug: String) {
	work(filter: {slug: {eq: $slug}}) {
	  link
	  name
	  slug
	  description
	  fullScreenImage {
		responsiveImage {
		  width
		  webpSrcSet
		  title
		  srcSet
		  src
		  sizes
		  height
		  base64
		  aspectRatio
		  alt
		}
	  }
	}
  }`;
