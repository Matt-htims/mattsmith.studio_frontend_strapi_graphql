import Head from "next/head";

export default function CustomHead({ seo }) {
	return (
		<>
			<Head>
				{seo.metaTitle ? (
					<>
						<title>{seo.metaTitle}</title>
						<meta name="og:title" content={seo.metaTitle} />
					</>
				) : (
					""
				)}
				{seo.metaDescription ? (
					<>
						<meta name="description" content={seo.metaDescription} />
						<meta name="og:description" content={seo.metaDescription} />
					</>
				) : (
					""
				)}
				{seo.metaImage &&
				seo.metaImage.data &&
				seo.metaImage.data.attributes.url ? (
					<>
						<meta name="image" content={seo.metaImage.data.attributes.url} />
						<meta name="og:image" content={seo.metaImage.data.attributes.url} />
					</>
				) : (
					""
				)}
				{seo.keywords ? <meta name="keywords" content={seo.keywords} /> : ""}
			</Head>
		</>
	);
}
