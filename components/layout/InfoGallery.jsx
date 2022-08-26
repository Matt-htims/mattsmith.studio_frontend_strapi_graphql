import { Image } from "react-datocms";
import Link from "next/link";

export default function InfoGallery({ title, contentArray }) {
	return (
		<div className="lg:mt-26 mt-24">
			<h2 className="font-spaceGrotesk font-medium md:text-5xl text-4xl text-center mb-16 text-textBlue-dark">
				{title}
			</h2>
			<div className="content lg:flex justify-between lg:space-x-10 lg:space-y-0 space-y-9">
				{contentArray &&
					contentArray.map((content) => (
						<div key={content.id} className="">
							<Link href={`/work/${content.slug}`}>
								<a>
									<div className="overflow-hidden shadow-xl hover:shadow-2xl hover:cursor-pointer rounded-lg transition-all">
										<Image
											data={content.image.responsiveImage}
											alt={content.name}
										/>
										<div className="text bg-textBlue-dark text-offWhite px-6 py-7 lg:h-36 h-32 space-y-3 flex flex-col justify-between">
											<h3 className="font-spaceGrotesk font-medium text-xl">
												{content.name}
											</h3>
											<p className="text-sm font-light">
												{content.description}
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
