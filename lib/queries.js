export const HOMEPAGE_QUERY = `query HomePage {
    homePage {
      homePage {
        ... on CtaSectionRecord {
          id
          blockName
          buttonLink
          buttonText
          subtitle
          title
          
        }
        ... on InfoGalleryRecord {
          id
          blockName
          title
          works {
            name
            id
            description
            image {
              responsiveImage {
                srcSet
                webpSrcSet
                sizes
                src
                height
                width
                aspectRatio
                alt
                title
                base64
              }
            }
            slug
            link
          }
        }
        ... on PageIntroRecord {
          id
          blockName
          title
          subtitle
          image {
            responsiveImage {
              alt
              aspectRatio
              bgColor
              height
              sizes
              src
              srcSet
              title
              webpSrcSet
              width
            }
          }
        }
        ... on SideBySideTextRecord {
          id
          blockName
          largeText
          largeOnLeft
          smallText(markdown: true)
        }
        ... on TripleExplainerRecord {
          id
          blockName
          title
          rows {
            id
            copy
            bottomText2
            bottomText
            title
            icon {
              responsiveImage {
                alt
                aspectRatio
                bgColor
                height
                sizes
                src
                srcSet
                title
                webpSrcSet
                width
              }
            }
          }
        }
      }
      id
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
