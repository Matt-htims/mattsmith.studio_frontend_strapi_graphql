import Image from "next/image";
import Link from "next/link";

export default function InfoGallery({ title, contentArray }) {
	console.log(contentArray);
	return (
		<div className="lg:mt-26 mt-24">
			<h2 className="font-spaceGrotesk font-medium md:text-5xl text-4xl text-center mb-16">
				{title}
			</h2>
			<div className="content lg:flex justify-between lg:space-x-10 lg:space-y-0 space-y-9">
				{contentArray &&
					contentArray.map((content) => (
						<>
							<Link href={`/work/${content.attributes.slug}`}>
								<a>
									<div
										key={content.id}
										className="overflow-hidden shadow-xl hover:shadow-2xl hover:cursor-pointer rounded-lg transition-all"
									>
										<Image
											src={
												process.env.NEXT_PUBLIC_STRAPI_URL +
												content.attributes.image.data.attributes.url
											}
											alt="Triple explainer image"
											height={content.attributes.image.data.attributes.height}
											width={content.attributes.image.data.attributes.width}
										/>
										<div className="text bg-textBlue-dark text-offWhite px-6 pt-8 pb-7 h-full space-y-3">
											<h3 className="font-spaceGrotesk font-medium text-xl">
												{content.attributes.name}
											</h3>
											<p className="text-sm font-light">
												{content.attributes.description}
											</p>
										</div>
									</div>
								</a>
							</Link>
						</>
					))}
			</div>
		</div>
	);
}
