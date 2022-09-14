import Image from "next/image";
import Link from "next/link";

import { BasicScroll } from "../animations/BasicScroll";

export default function InfoGallery({ content, title = true }) {
	const contentArray = content.works.data;
	return (
		<div className="lg:mt-26 mt-24">
			{title && (
				<h2 className="font-spaceGrotesk font-medium md:text-5xl text-4xl text-center mb-16 text-textBlue-dark">
					{content.title}
				</h2>
			)}

			<div className="content lg:flex justify-between lg:space-x-7 lg:space-y-0 space-y-9">
				{contentArray &&
					contentArray.map((content) => (
						<div key={content.id}>
							<BasicScroll
								content={
									<Link href={`/work/${content.attributes.slug}`}>
										<a>
											<div className="overflow-hidden shadow-xl hover:shadow-2xl hover:cursor-pointer rounded-lg transition-all">
												<Image
													placeholder="blur"
													blurDataURL={
														content.attributes.image.data.attributes.placeholder
													}
													src={
														process.env.NEXT_PUBLIC_STRAPI_URI +
														content.attributes.image.data.attributes.formats
															.large.url
													}
													alt={
														content.attributes.image.data.attributes
															.alternativeText
													}
													width={
														content.attributes.image.data.attributes.formats
															.large.width
													}
													height={
														content.attributes.image.data.attributes.formats
															.large.height
													}
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
								}
							/>
						</div>
					))}
			</div>
		</div>
	);
}
