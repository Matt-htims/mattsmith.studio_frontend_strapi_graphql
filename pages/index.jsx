import Head from "next/head";
import Image from "next/image";
import { fetcher } from "../lib/api";

// Components
import PageIntro from "../components/PageIntro";
import SideBySideText from "../components/SideBySideText";
import TripleExplainer from "../components/TripleExplainer";
import InfoGallery from "../components/InfoGallery";

export default function Home({ homePage, pageIntro, services, myWork }) {
	console.log(homePage);
	console.log("------------------------------------");
	console.log(pageIntro);
	console.log("------------------------------------");
	console.log(services);
	console.log("------------------------------------");
	console.log(myWork);
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
				<div className="pt-40"></div>
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
					smallText={homePage.leadText.smallText}
				/>
				<TripleExplainer
					title={services.title}
					contentArray={services.individualServices}
				/>
				<InfoGallery title={myWork.title} contentArray={myWork.works.data} />
			</main>

			<footer className="">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className="">
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
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

	return {
		props: {
			homePage: homePageResponse.data.attributes,
			pageIntro: pageIntroResponse.data.attributes.pageIntro,
			services: servicesResponse.data.attributes.services,
			myWork: myWorkResponse.data.attributes.myWorks,
		},
	};
}
