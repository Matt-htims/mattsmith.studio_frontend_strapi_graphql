import React from "react";

export default function Layout({ children }) {
	return (
		<div className="max-w-screen-2xl m-auto md:px-10 px-6 text-textBlue bg-offWhite">
			<main>{children}</main>
		</div>
	);
}
