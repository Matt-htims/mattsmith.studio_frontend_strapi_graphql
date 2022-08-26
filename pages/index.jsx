import Head from "next/head";
import { request } from "../lib/datocms";

// Query
import { HOMEPAGE_QUERY } from "../lib/queries";

// Components
import PageIntro from "../components/layout/PageIntro";
import SideBySideText from "../components/layout/SideBySideText";
import TripleExplainer from "../components/layout/TripleExplainer";
import InfoGallery from "../components/layout/InfoGallery";
import CTAsection from "../components/layout/CTAsection";

export default function Home({ data }) {
	const pageIntro = data.homePage.homePage[0];
	const sideBySideText = data.homePage.homePage[1];
	const myServices = data.homePage.homePage[2];
	const myWork = data.homePage.homePage[3];
	const ctaSection = data.homePage.homePage[4];
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
				<InfoGallery title={myWork.title} contentArray={myWork.works} />
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

export async function getStaticProps() {
	const data = await request({
		query: HOMEPAGE_QUERY,
		variables: {},
	});
	return {
		props: { data },
	};
}
