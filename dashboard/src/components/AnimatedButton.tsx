import React from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, onClick, className = "", disabled = false }) => {
	return (
		<motion.button
			initial={{ scale: 0.95, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			whileHover={{
				scale: 1.05,
				boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
				transition: { duration: 0.3, ease: "easeOut" },
			}}
			whileTap={{
				scale: 0.98,
				transition: { duration: 0.1 },
			}}
			transition={{
				type: "spring",
				stiffness: 400,
				damping: 17,
				mass: 1,
			}}
			onClick={onClick}
			className={`${className}`}
			disabled={disabled}
		>
			{children}
		</motion.button>
	);
};
