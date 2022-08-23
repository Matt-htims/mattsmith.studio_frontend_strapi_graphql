import Image from "next/image";

export default function PageIntro({ image, heading, subheading }) {
	return (
		<div className="lg:flex justify-between items-center m-auto lg:px-8 bg-cover lg:space-y-0 space-y-10">
			<div className="imageSection lg:flex-none flex justify-center">
				<div className="image">
					<Image
						src={image}
						width={436}
						height={429}
						alt="Image of Matt Smith"
					/>
				</div>
				<div className="blob"></div>
			</div>
			<div className="textSection lg:max-w-[47rem] m-auto space-y-5 lg:pl-20">
				<p className="lg:text-6xl text-5xl font-spaceGrotesk text-textBlue-dark font-medium">
					{heading}
				</p>
				<h1 className="lg:text-4xl text-3xl font-extralight tracking-wide leading-snug">
					{subheading}
				</h1>
			</div>
		</div>
	);
}
