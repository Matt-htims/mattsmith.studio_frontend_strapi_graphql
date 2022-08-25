import Head from "next/head";
import Image from "next/image";
import { fetcher } from "../lib/api";

// Components
import PageIntro from "../components/layout/PageIntro";
import SideBySideText from "../components/layout/SideBySideText";
import TripleExplainer from "../components/layout/TripleExplainer";
import InfoGallery from "../components/layout/InfoGallery";
import CTAsection from "../components/layout/CTAsection";

export default function Home({ homePage, pageIntro, services, myWork }) {
	// console.log(homePage);
	// console.log("------------------------------------");
	// console.log(pageIntro);
	// console.log("------------------------------------");
	// console.log(services);
	// console.log("------------------------------------");
	// console.log(myWork);
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
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const homePageResponse = await fetcher("home-page", {
		populate: "*",
	});

	const pageIntroResponse = await fetcher("home-page", {
		populate: ["pageIntro", "pageIntro.image"],
	});

	const servicesResponse = await fetcher("home-page", {
		populate: [
			"services",
			"services.individualServices",
			"services.individualServices.image",
		],
	});

	const myWorkResponse = await fetcher("home-page", {
		populate: ["myWorks", "myWorks.works", "myWorks.works.image"],
	});

	const res = await fetcher("works", {
		fields: ["slug"],
	});

	console.log(res.data);

	return {
		props: {
			homePage: homePageResponse.data.attributes,
			pageIntro: pageIntroResponse.data.attributes.pageIntro,
			services: servicesResponse.data.attributes.services,
			myWork: myWorkResponse.data.attributes.myWorks,
		},
	};
}
