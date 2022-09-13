import React from "react";
import Image from "next/image";

import BasicScroll from "../animations/BasicScroll";

export default function TripleExplainer({ content }) {
	return (
		<div className="bg-lightBlue px-8 lg:py-20 pt-16 pb-4 lg:mt-26 mt-24 rounded-3xl drop-shadow-md">
			<h2 className="font-spaceGrotesk font-medium md:text-5xl text-4xl text-center md:mb-24 mb-16 text-textBlue-dark">
				{content.title}
			</h2>
			<div className="content lg:flex justify-around items-center lg:space-y-0 space-y-16">
				{content.individualServices &&
					content.individualServices.map((content) => (
						<div key={content.id}>
							<BasicScroll
								content={
									<div className="text-center lg:border-b-0 border-b-2 border-[#DEE1ED] last:border-b-0 lg:pb-0 pb-16">
										<div className="image mb-8 flex justify-center">
											<Image
												src={
													process.env.NEXT_PUBLIC_STRAPI_URI +
													content.image.data.attributes.url
												}
												alt={content.image.data.attributes.alternativeText}
												width={content.image.data.attributes.width}
												height={content.image.data.attributes.height}
											/>
										</div>
										<div className="flex flex-col justify-between h-64">
											<h2 className="font-spaceGrotesk font-medium text-2xl">
												{content.title}
											</h2>
											<p className="font-light lg:w-10/12 m-auto pb-6">
												{content.copy}
											</p>
											<div className="space-y-2">
												<p className="text-textBlue-light font-light text-base">
													{content.bottomText}
												</p>
												<p className="font-medium text-lg">
													{content.bottomText2}
												</p>
											</div>
										</div>
									</div>
								}
							/>
						</div>
					))}
			</div>
		</div>
	);
}
