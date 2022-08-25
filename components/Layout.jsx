import React from "react";

// Components
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className=" text-textBlue bg-offWhite">
			<main className="max-w-screen-2xl m-auto md:px-14 px-6">{children}</main>
			<Footer />
		</div>
	);
}
