import Image from "next/image";

export default function InfoGallery({ title, contentArray }) {
	return (
		<div>
			<h2>{title}</h2>
			<div className="content">
				{contentArray &&
					contentArray.map((content) => (
						<div key={content.attributes.id}>
							<Image
								src={
									process.env.NEXT_PUBLIC_STRAPI_URL +
									content.attributes.image.data.attributes.url
								}
								alt="Triple explainer image"
								height={404}
								width={530}
							/>
							<div className="text">
								<h3>{content.attributes.name}</h3>
								<p>{content.attributes.description}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
