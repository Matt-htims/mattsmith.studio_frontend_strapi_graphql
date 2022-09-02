// Components
export default function SideBySideText({ content }) {
	return (
		<div className="md:flex justify-between items-center lg:mt-20 mt-14 md:space-y-0 space-y-6">
			<div className="">
				<div className="largeText md:w-10/12 font-spaceGrotesk">
					<h2 className="lg:text-5xl text-4xl lg:leading-tight leading-tight">
						{content.largeText}
					</h2>
				</div>
			</div>

			<div className="w-full">
				<div className="smallText md:w-12/12 ml-auto lg:text-xl text-lg md:space-y-6 space-y-3 font-light">
					<div
						className="space-y-5"
						dangerouslySetInnerHTML={{ __html: content.smallText }}
					></div>
				</div>
			</div>
		</div>
	);
}
