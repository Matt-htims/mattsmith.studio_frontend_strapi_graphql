import Image from "next/image";
import Link from "next/link";

export default function InfoGallery({ title, contentArray }) {
	return (
		<div className="lg:mt-26 mt-24">
			<h2 className="font-spaceGrotesk font-medium md:text-5xl text-4xl text-center mb-16 text-textBlue-dark">
				{title}
			</h2>
			<div className="content lg:flex flex-wra justify-between lg:space-x-10 lg:space-y-0 space-y-9 min-w-[600px]">
				{contentArray &&
					contentArray.map((content) => (
						<div key={content.id} className="">
							<Link href={`/work/${content.attributes.slug}`}>
								<a>
									<div className="overflow-hidden shadow-xl hover:shadow-2xl hover:cursor-pointer rounded-lg transition-all">
										<Image
											src={
												process.env.NEXT_PUBLIC_STRAPI_URL +
												content.attributes.image.data.attributes.url
											}
											alt="Triple explainer image"
											height={content.attributes.image.data.attributes.height}
											width={content.attributes.image.data.attributes.width}
										/>
										<div className="text bg-textBlue-dark text-offWhite px-6 py-7 lg:h-36 h-32 space-y-3 flex flex-col justify-between">
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
						</div>
					))}
			</div>
		</div>
	);
}
