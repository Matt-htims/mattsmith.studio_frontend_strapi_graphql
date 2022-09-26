import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import { BasicScroll, FadeIn } from "../animations/BasicScroll";

export default function PageIntro({ content }) {
	const image = content.image.data.attributes.formats.medium;
	return (
		<div className="lg:flex justify-between items-center m-auto lg:px-8 bg-cover lg:space-y-0 space-y-10 md:mt-20 mt-10 overflow-hidden">
			<div className="imageSection lg:flex-none flex justify-center">
				<FadeIn
					content={
						<div className="image max-w-[436px] max-h-[429px]">
							<Image
								src={image.url}
								alt={image.name}
								width={image.width}
								height={image.height}
								placeholder="blur"
								blurDataURL="content.image.data.attributes.placeholder"
							/>
						</div>
					}
				/>
			</div>
			<div className="textSection lg:max-w-[47rem] m-auto space-y-5 lg:pl-20">
				<TypeAnimation
					sequence={[400, content.title]}
					speed={0}
					wrapper="p"
					cursor={true}
					repeat={1}
					className="lg:text-6xl text-5xl font-spaceGrotesk text-textBlue-dark font-medium"
				/>
				<BasicScroll
					content={
						<h1 className="lg:text-4xl text-3xl font-extralight tracking-wide leading-snug">
							{content.subtitle}
						</h1>
					}
				/>
			</div>
		</div>
	);
}
