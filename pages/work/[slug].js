import React from "react";
import { fetcher } from "../../lib/api";

export default function Post({ work }) {
	return (
		<div>
			<h1>{work.name}</h1>
			<p>{work.description}</p>
			<p>laskjdflksdjflksajasldkjf</p>
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
		populate: "image",
	});

	const work = res.data[0].attributes;

	return {
		props: { work },
	};
}
