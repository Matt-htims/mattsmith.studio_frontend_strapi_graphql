import Image from "next/image";

// Components
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<div className=" text-textBlue bg-offWhite">
			<Navbar
				brand={<Image src="/logo.png" alt="logo" height={56} width={175} />}
				items={[
					{ url: "/work", title: "My work", id: "23jh23lk4j2" },
					{
						url: "mailto:mattsmith3108@gmail.com",
						title: "Work with me",
						id: "2k3jfl23k",
					},
				]}
			/>
			<main className="max-w-screen-2xl m-auto md:px-14 px-6">{children}</main>
			<Footer />
		</div>
	);
}
