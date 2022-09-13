import Head from "next/head";
import { request } from "../lib/apollo";

// Query
import { HOMEPAGE_QUERY } from "../lib/queries";

// Components
import PageIntro from "../components/layout/PageIntro";
import SideBySideText from "../components/layout/SideBySideText";
import TripleExplainer from "../components/layout/TripleExplainer";
import InfoGallery from "../components/layout/InfoGallery";
import CtaSection from "../components/layout/CtaSection";

export default function Home({ data }) {
	console.log(data);
	console.log(data.homePage);

	const componentMapping = {
		PageIntro,
		SideBySideText,
		TripleExplainer,
		InfoGallery,
		CtaSection,
	};

	const dynamicComponents = data.homePage.map((block) => {
		return block.__typename.replace("ComponentBlock", "");
	});

	return (
		<div>
			<Head>
				<title>mattsmith.studio</title>
				<meta
					name="description"
					content="A freelance web designer &amp; developer based in London"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<PageIntro content={data.homePage[0]} />
				<SideBySideText content={data.homePage[1]} />
				<TripleExplainer content={data.homePage[2]} />
				{/* {dynamicComponents.map((componentName, n) => {
					const Component = componentMapping[componentName];
					return <Component key={n} content={data.homePage[n]} />;
				})} */}
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const response = await request({
		query: HOMEPAGE_QUERY,
		variables: {},
	});

	const data = response.homePage.data.attributes;

	return {
		props: { data },
	};
}
