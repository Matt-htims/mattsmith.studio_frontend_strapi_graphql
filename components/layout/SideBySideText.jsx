// Components
import BasicScroll from "../animations/basicScroll";

export default function SideBySideText({ largeText, smallText }) {
	return (
		<div className="md:flex justify-between items-center lg:mt-20 mt-14 md:space-y-0 space-y-6">
			<BasicScroll
				content={
					<div className="w-full">
						<div className="largeText md:w-11/12 font-spaceGrotesk">
							<h2 className="lg:text-5xl text-4xl lg:leading-tight leading-tight">
								{largeText}
							</h2>
						</div>
					</div>
				}
			/>
			<BasicScroll
				content={
					<div className="w-full">
						<div className="smallText md:w-11/12 ml-auto lg:text-xl text-lg md:space-y-6 space-y-3 font-light">
							<div
								className="space-y-5"
								dangerouslySetInnerHTML={{ __html: smallText }}
							></div>
						</div>
					</div>
				}
			/>
		</div>
	);
}
