import Head from "next/head";
import Image from "next/image";
import { request } from "../lib/datocms";

// Components
import PageIntro from "../components/layout/PageIntro";
import SideBySideText from "../components/layout/SideBySideText";
import TripleExplainer from "../components/layout/TripleExplainer";
import InfoGallery from "../components/layout/InfoGallery";
import CTAsection from "../components/layout/CTAsection";

const HOMEPAGE_QUERY = ``;

export async function getStaticProps() {
	const data = await request({
		query: HOMEPAGE_QUERY,
		variables: { limit: 10 },
	});
	return {
		props: { data },
	};
}

export default function Home({ data }) {
	console.log(data);
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
			<h1>Hello from the home</h1>
			{/* <main>
				<PageIntro
					image={
						process.env.NEXT_PUBLIC_STRAPI_URL +
						pageIntro.image.data.attributes.url
					}
					heading={pageIntro.title}
					subheading={pageIntro.subtitle}
				/>
				<SideBySideText
					largeText={homePage.leadText.largeText}
					smallText1={homePage.leadText.smallText1}
					smallText2={homePage.leadText.smallText2}
				/>
				<TripleExplainer
					title={services.title}
					contentArray={services.individualServices}
				/>
				<InfoGallery title={myWork.title} contentArray={myWork.works.data} />
				<CTAsection
					cta={homePage.contact.mainText}
					body={homePage.contact.subText}
					buttonLink={homePage.contact.buttonLink}
					buttonText={homePage.contact.buttonText}
				/>
			</main> */}
		</div>
	);
}
