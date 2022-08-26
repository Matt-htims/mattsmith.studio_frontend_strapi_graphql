import { request } from "../../lib/datocms";

// Queries
import { WORKS_QUERY } from "../../lib/queries";

// Components
import InfoGallery from "../../components/layout/InfoGallery";

export default function index({ data }) {
	return (
		<div className="min-h-screen mt-14">
			<h1 className="font-spaceGrotesk font-medium text-5xl mb-36 text-center text-textBlue-dark">
				My Work
			</h1>
			<InfoGallery title={false} contentArray={data} />
		</div>
	);
}

export async function getStaticProps() {
	const res = await request({ query: WORKS_QUERY, variables: {} });

	const data = res.allWorks;

	return {
		props: {
			data,
		},
	};
}
