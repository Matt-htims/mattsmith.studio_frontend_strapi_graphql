import { motion } from "framer-motion";

export default function CTAsection({ content }) {
	return (
		<div className="bg-lightBlue rounded-3xl shadow-md text-center lg:pt-20 lg:pb-16 lg:px-12 pt-14 pb-10 px-8 lg:mt-32 mt-24 mb-16 max-w-screen-lg m-auto">
			<div className="text space-y-8 mb-14">
				<h3 className="font-spaceGrotesk font-medium md:text-4xl text-3xl text-textBlue-dark">
					{content.title}
					hello
				</h3>
				<p className="md:text-2xl text-lg font-light">{content.subtitle}</p>
			</div>
			<div className="button">
				<a href={content.buttonLink}>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="bg-ctaOrange hover:bg-textBlue px-6 py-3 rounded-xl shadow-lg font-spaceGrotesk text-offWhite text-2xl hover:cursor-pointer transition-colors"
					>
						{content.buttonText}
					</motion.button>
				</a>
			</div>
		</div>
	);
}
