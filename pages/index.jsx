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
	const componentMapping = {
		PageIntro,
		SideBySideText,
		TripleExplainer,
		InfoGallery,
		CTAsection,
	};

	const dynamicComponents = data.homePage.homePage.map((block) => {
		return block.blockName;
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
				{dynamicComponents.map((componentName, n) => {
					const Component = componentMapping[componentName];
					return <Component key={n} content={data.homePage.homePage[n]} />;
				})}
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
