import React from "react";
import { fetcher } from "../../lib/api";

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
	const res = await fetcher("works", {
		populate: ["image"],
	});

	const data = res.data;

	return {
		props: {
			data,
		},
	};
}
