import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar({ brand, items }) {
	const [activeIndex, setActiveIndex] = useState(-1);
	const [active, setActive] = useState(false);

	useEffect(() => {
		const handleRouteChange = (url) => {
			const newActiveIndex = items.findIndex((item) => item.url === url);

			setActiveIndex(newActiveIndex);
		};

		Router.events.on("routeChangeComplete", handleRouteChange);

		// Force first update
		handleRouteChange(Router.route);

		return () => Router.events.off("routeChangeComplete", handleRouteChange);
	}, [items]);

	return (
		<div className="sticky top-0 w-full z-50">
			<motion.nav
				animate={{ y: 0, opacity: 1 }}
				initial={{ y: -72, opacity: 0 }}
				transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
				className="navbar md:py-6 py-5 text-textBlue bg-offWhite z-50"
			>
				<div className="flex justify-between items-center max-w-screen-2xl m-auto md:px-12 px-6">
					<Link href="/">
						<a>
							<div className="brand font-spaceGrotesk font-medium md:text-2xl text-xl hover:scale-105 transition-all">
								{brand}
							</div>
						</a>
					</Link>
					<div className="items space-x-10">
						{items.map((item, index) => (
							<Link
								href={item.url}
								active={activeIndex === index ? "active" : undefined}
								key={item.id}
								className="items"
							>
								{item.id === "2k3jfl23k" ? (
									<a>
										<motion.button
											whileHover={{ scale: 1.08 }}
											whileTap={{ scale: 0.9 }}
											className="md:text-lg text-base text-offWhite md:px-5 px-4 md:py-4 py-3 bg-ctaOrange hover:bg-textBlue rounded-full shadow-md transition-colors"
										>
											{item.title}
										</motion.button>
									</a>
								) : (
									<a>
										<button className="text-lg hidden lg:inline-block text-textBlue-light py-3 mx-3 mb-[2px] hover:mb-0 hover:border-b-2 hover:text-textBlue-dark transition:all border-textBlue-light">
											{item.title}
										</button>
									</a>
								)}
							</Link>
						))}
					</div>
				</div>
			</motion.nav>
		</div>
	);
}

export default Navbar;
