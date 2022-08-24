const qs = require("qs");

const query = qs.stringify(
	{
		populate: ["myWorks", "myWorks.works", "myWorks.works.image"],
	},
	{
		encodeValuesOnly: true,
	}
);

await request(`${process.env.NEXT_PUBLIC_STRAPI_URL}/home-page?${query}`);
