import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { request } from "../../lib/apollo";

import CustomHead from "../../components/CustomHead";

import { BasicScroll } from "../../components/animations/BasicScroll";

// Queries
import { PATHS_QUERY, WORK_QUERY } from "../../lib/queries";

export default function Post({ work }) {
	const image = work.fullScreenImage.data.attributes;

	return (
		<>
			{work.seo && (
				<CustomHead
					title={work.seo.metaTitle}
					description={work.seo.metaDescription}
					image={work.seo.metaImage.data.attributes.url}
					keywords={work.seo.keywords}
				/>
			)}
			<div className="my-14 max-w-screen-lg m-auto relative min-h-screen">
				<div className="text-sm lg:block hidden absolute top-2 text-textBlue-light">
					<Link href="/work">
						<a className="flex items-center space-x-1">
							<FiArrowLeft />
							<p>Back to my work</p>
						</a>
					</Link>
				</div>
				<div className="text-center space-y-5 mb-14">
					<h1 className="font-spaceGrotesk font-medium text-5xl text-textBlue-dark">
						{work.name}
					</h1>
					<p className="pb-2 font-light text-xl">{work.description}</p>
					<a href={work.link} target="_blank" rel="noreferrer">
						<p className="text-textBlue-light font-light">Visit website</p>
					</a>
				</div>
				<BasicScroll
					content={
						<div className="shadow-2xl">
							<Image
								placeholder="blur"
								blurDataURL={image.placeholder}
								src={process.env.NEXT_PUBLIC_STRAPI_URI + image.url}
								alt={image.alternativeText}
								height={image.height}
								width={image.width}
							/>
						</div>
					}
				/>
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const res = await request({ query: PATHS_QUERY, variables: {} });

	const paths = res.works.data.map((work) => ({
		params: { slug: work.attributes.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	console.log(params);
	const response = await request({
		query: WORK_QUERY,
		variables: {
			filters: {
				slug: {
					eq: params.slug,
				},
			},
		},
	});

	const work = response.works.data[0].attributes;

	return {
		props: { work },
	};
}
