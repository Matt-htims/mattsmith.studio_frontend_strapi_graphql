import CustomHead from "../../components/CustomHead";
import { request } from "../../lib/apollo";

// Queries
import { WORKS_QUERY } from "../../lib/queries";

// Components
import InfoGallery from "../../components/layout/InfoGallery";

export default function index({ data }) {
	const test = {};
	return (
		<>
			{data.seo && (
				<CustomHead
					title={data.seo.metaTitle}
					description={data.seo.metaDescription}
					image={data.seo.metaImage.data.attributes.url}
					keywords={data.seo.keywords}
				/>
			)}
			<div className="min-h-screen mt-14 lg:mb-0 mb-14">
				<h1 className="font-spaceGrotesk font-medium text-5xl mb-36 text-center text-textBlue-dark">
					{data.work.title}
				</h1>
				<InfoGallery content={data.work} title={false} />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const res = await request({ query: WORKS_QUERY, variables: {} });

	const data = res.workPage.data.attributes;

	return {
		props: {
			data,
		},
	};
}
