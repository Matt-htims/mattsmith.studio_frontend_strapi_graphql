import Head from "next/head";
import { request } from "../lib/datocms";

// Components
import PageIntro from "../components/layout/PageIntro";
import SideBySideText from "../components/layout/SideBySideText";
import TripleExplainer from "../components/layout/TripleExplainer";
import InfoGallery from "../components/layout/InfoGallery";
import CTAsection from "../components/layout/CTAsection";

const HOMEPAGE_QUERY = `query MyQuery {
	homePage {
	  homePage {
		... on CtaSectionRecord {
		  id
		  buttonLink
		  buttonText
		  subtitle
		  title
		}
		... on InfoGalleryRecord {
		  id
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
				bgColor
			  }
			}
		  }
		}
		... on PageIntroRecord {
		  id
		  title
		  subtitle
		  image {
			responsiveImage {
			  alt
			  aspectRatio
			  base64
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
		  largeText
		  largeOnLeft
		  smallText(markdown: true)
		}
		... on TripleExplainerRecord {
		  id
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
				base64
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
  }
  `;

export async function getStaticProps() {
	const data = await request({
		query: HOMEPAGE_QUERY,
		variables: {},
	});
	return {
		props: { data },
	};
}

export default function Home({ data }) {
	const pageIntro = data.homePage.homePage[0];
	const sideBySideText = data.homePage.homePage[1];
	const myServices = data.homePage.homePage[2];
	const myWork = data.homePage.homePage[3];
	const ctaSection = data.homePage.homePage[4];

	console.log(myServices, myWork, ctaSection);
	return (
		<div className="">
			<Head>
				<title>mattsmith.studio</title>
				<meta
					name="description"
					content="A freelance web designer &amp; developer based in London"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<PageIntro
					image={pageIntro.image}
					heading={pageIntro.title}
					subheading={pageIntro.subtitle}
				/>
				<SideBySideText
					largeText={sideBySideText.largeText}
					smallText={sideBySideText.smallText}
				/>
				<TripleExplainer
					title={myServices.title}
					contentArray={myServices.rows}
				/>
				{/* <InfoGallery title={myWork.title} contentArray={myWork.works} /> */}
				<CTAsection
					cta={ctaSection.title}
					body={ctaSection.subtitle}
					buttonLink={ctaSection.buttonLink}
					buttonText={ctaSection.buttonText}
				/>
			</main>
		</div>
	);
}
