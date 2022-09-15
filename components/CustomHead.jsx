import Head from "next/head";

export default function CustomHead({ title, description, image, keywords }) {
	return (
		<>
			<Head>
				{title ? (
					<>
						<title>{title}</title>
						<meta name="og:title" content={title} />
					</>
				) : (
					""
				)}
				{description ? (
					<>
						<meta name="description" content={description} />
						<meta name="og:description" content={description} />
					</>
				) : (
					""
				)}
				{description ? (
					<>
						<meta name="image" content={image} />
						<meta name="og:image" content={image} />
					</>
				) : (
					""
				)}
				{keywords ? <meta name="keywords" content={keywords} /> : ""}
			</Head>
		</>
	);
}
