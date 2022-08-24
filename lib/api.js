const qs = require("qs");

export async function fetcher(urlEndpoint, queryParameters = {}) {
	const query = qs.stringify(queryParameters, {
		encodeValuesOnly: true,
	});
	let response = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${urlEndpoint}?${query}`,
		{ headers: { Authorization: process.env.NEXT_PUBLIC_STRAPI_TOKEN } }
	);
	const data = await response.json();
	return data;
}
