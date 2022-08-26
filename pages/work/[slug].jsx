import { Image } from "react-datocms";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { request } from "../../lib/datocms";

// Queries
import { PATHS_QUERY, WORK_QUERY } from "../../lib/queries";

export default function Post({ work }) {
	return (
		<div className="my-14 max-w-screen-lg m-auto relative">
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
			<div className="shadow-xl">
				<Image data={work.fullScreenImage.responsiveImage} alt={work.name} />
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const res = await request({ query: PATHS_QUERY, variables: {} });

	const paths = res.allWorks.map((work) => ({
		params: { slug: work.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const res = await request({
		query: WORK_QUERY,
		variables: { slug: params.slug },
	});

	const work = res.work;

	return {
		props: { work },
	};
}
