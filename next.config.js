/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"localhost",
			"www.datocms-assets.com",
			"mattsmith-studio.s3.eu-west-2.amazonaws.com",
		],
	},
};

module.exports = nextConfig;
