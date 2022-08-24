export default function CTAsection({ cta, body, buttonText, buttonLink }) {
	return (
		<div className="bg-lightBlue rounded-3xl text-center pt-20 pb-16 px-12 lg:mt-26 mt-24 mb-16 max-w-screen-lg m-auto">
			<div className="text space-y-8 mb-14">
				<h3 className="font-spaceGrotesk font-medium md:text-4xl text-3xl">
					{cta}
				</h3>
				<p className="md:text-2xl text-xl font-light">{body}</p>
			</div>
			<div className="button">
				<a href={buttonLink}>
					<button className="bg-ctaOrange hover:bg-textBlue px-6 py-3 rounded-xl shadow-lg font-spaceGrotesk text-offWhite text-2xl hover:cursor-pointer transition-all">
						{buttonText}
					</button>
				</a>
			</div>
		</div>
	);
}
