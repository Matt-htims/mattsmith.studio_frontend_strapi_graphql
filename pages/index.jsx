import Head from "next/head";
import Image from "next/image";

// Components
import PageIntro from "../components/PageIntro";
import SideBySideText from "../components/SideBySideText";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>mattsmith.studio</title>
				<meta
					name="description"
					content="A freelance web designer &amp; developer based in London"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="pt-40"></div>
				<PageIntro
					image="/MattCutout.png"
					heading="Hi, I'm Matt"
					subheading="A freelance web designer &amp; developer based in London"
				/>
				<SideBySideText
					largeText="I create bespoke, scalable and responsive websites to meet your business' needs"
					smallText={
						<>
							<p>
								Focusing on simplicity and clear communication, I prioritise the
								clarity of your message to reach your customers most
								effectively.
							</p>
							<p>
								I am a flexible, professional freelancer with an eye for detail
								and a passion for code
							</p>
						</>
					}
				/>
			</main>

			<footer className="">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className="">
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
