import Image from "next/image";
import Link from "next/link";
import { fetcher } from "../../lib/api";
import { FiArrowLeft } from "react-icons/fi";

export default function Post({ work }) {
	console.log(work);
	return (
		<div className="my-14 max-w-screen-lg m-auto relative">
			<div className="text-sm lg:block hidden absolute top-6 text-textBlue-light">
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
			<div className="shadow-xl">
				<Image
					src={
						process.env.NEXT_PUBLIC_STRAPI_URL +
						work.fullScreenImage.data.attributes.url
					}
					alt="Triple explainer image"
					height={work.fullScreenImage.data.attributes.height}
					width={work.fullScreenImage.data.attributes.width}
				/>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const res = await fetcher("works", {});

	const paths = res.data.map((work) => ({
		params: { slug: work.attributes.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;

	const res = await fetcher("works", {
		filters: {
			slug: {
				$eq: slug,
			},
		},
		populate: "fullScreenImage",
	});

	const work = res.data[0].attributes;

	return {
		props: { work },
	};
}
