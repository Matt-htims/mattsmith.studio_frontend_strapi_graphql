import { motion } from "framer-motion";

export default function BasicScroll({ content }) {
	const scroll = {
		initial: { opacity: 0, y: 30 },
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				type: "easeOut",
			},
		},
	};
	return (
		<motion.div variants={scroll} initial="initial" whileInView="animate">
			{content}
		</motion.div>
	);
}
