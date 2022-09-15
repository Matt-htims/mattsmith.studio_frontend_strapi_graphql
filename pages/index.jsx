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
				<title>{data.seo.metaTitle}</title>
				<meta name="description" content={data.seo.metaDescription} />
				<meta name="keywords" content={data.seo.keywords} />
				<meta name="image" content={data.seo.metaImage.data.attributes.url} />
				<meta
					name="og:image"
					content={
						process.env.NEXT_PUBLIC_STRAPI_URI +
						data.seo.metaImage.data.attributes.url
					}
				/>
				<meta name="og:title" content={data.seo.metaTitle} />
				<meta name="og:description" content={data.seo.metaDescription} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{dynamicComponents.map((componentName, n) => {
					const Component = componentMapping[componentName];
					return <Component key={n} content={data.homePage[n]} />;
				})}
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const res = await request({
		query: HOMEPAGE_QUERY,
		variables: {},
	});

	const data = res.homePage.data.attributes;

	return {
		props: { data },
	};
}
