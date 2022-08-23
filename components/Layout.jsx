import React from "react";

export default function Layout({ children }) {
	return (
		<div className="max-w-screen-2xl m-auto px-10 text-textBlue bg-offWhite">
			<main>{children}</main>
		</div>
	);
}
