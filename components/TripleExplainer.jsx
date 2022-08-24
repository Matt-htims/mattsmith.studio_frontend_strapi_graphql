import React from "react";
import Image from "next/image";

export default function TripleExplainer({ title, contentArray }) {
	return (
		<div>
			<h2>{title}</h2>
			<div className="content">
				{contentArray &&
					contentArray.map((content) => (
						<div key={content.id}>
							<Image
								src={
									process.env.NEXT_PUBLIC_STRAPI_URL +
									content.image.data.attributes.url
								}
								alt="Triple explainer image"
								height={80}
								width={80}
							/>
							<div>
								<h2>{content.title}</h2>
								<p>{content.copy}</p>
							</div>
							<div className="bottomText">
								<p>{content.bottomText}</p>
								<p>{content.bottomText2}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
