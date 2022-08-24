export default function SideBySideText({ largeText, smallText1, smallText2 }) {
	return (
		<div className="md:flex justify-between items-center lg:mt-28 mt-10 md:space-y-0 space-y-6">
			<div className="w-full">
				<div className="largeText md:w-11/12 font-spaceGrotesk">
					<h2 className="lg:text-5xl text-4xl lg:leading-tight leading-tight">
						{largeText}
					</h2>
				</div>
			</div>
			<div className="w-full">
				<div className="smallText md:w-11/12 ml-auto lg:text-xl text-lg md:space-y-6 space-y-3 font-light">
					<p>{smallText1}</p>
					<p>{smallText2}</p>
				</div>
			</div>
		</div>
	);
}
