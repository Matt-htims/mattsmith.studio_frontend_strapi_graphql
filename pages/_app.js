import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="mattsmith.studio" />
				<meta property="og:locale" content="en_GB" />
				<link rel="canonical" href="https://mattsmith.studio" />
				<meta property="og:url" content="https://mattsmith.studio" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
