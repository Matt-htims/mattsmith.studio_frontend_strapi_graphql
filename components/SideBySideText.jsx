import React from "react";

export default function SideBySideText({ largeText, smallText }) {
	return (
		<div>
			<div className="largeText">
				<h2>{largeText}</h2>
			</div>
			<div className="smallText">{smallText}</div>
		</div>
	);
}
