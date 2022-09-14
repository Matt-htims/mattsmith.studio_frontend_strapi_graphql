import Head from "next/head";
import { request } from "../../lib/apollo";

// Queries
import { WORKS_QUERY } from "../../lib/queries";

// Components
import InfoGallery from "../../components/layout/InfoGallery";

export default function index({ res }) {
	return (
		<div className="min-h-screen mt-14 lg:mb-0 mb-14">
			<h1 className="font-spaceGrotesk font-medium text-5xl mb-36 text-center text-textBlue-dark">
				My Work
			</h1>
			<InfoGallery content={res} />
		</div>
	);
}

export async function getStaticProps() {
	const res = await request({ query: WORKS_QUERY, variables: {} });

	return {
		props: {
			res,
		},
	};
}
