import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../Hooks/useScrollReveal";
import { useParallaxMotion } from "../Hooks/useParallaxMotion";

export const HeroSection: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const parallaxRef = useRef<HTMLDivElement>(null);

	useScrollReveal(containerRef);
	useParallaxMotion(parallaxRef, { speed: 0.3 });

	return (
		<div ref={containerRef} className='relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-900 z-1'>
			{/* Parallax Background */}
			<div ref={parallaxRef} className='absolute inset-0 z-0'>
				<motion.div
					initial={{ opacity: 0, scale: 1 }}
					animate={{ opacity: 0.4, scale: 1 }}
					transition={{ duration: 0.8 }}
					className='w-full h-[120%] -mt-[10%] bg-gradient-to-br from-indigo-900 via-purple-900 to-black'
				/>
				<div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b")] bg-cover bg-center opacity-20 mix-blend-overlay' />
			</div>

			{/* Content Overlay */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.8 }}
				className='relative z-10 text-center px-4 max-w-4xl mx-auto'
			>
				<h1
					data-animate
					className='text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'
				>
					Next Generation <br /> Dashboard Experience
				</h1>

				<p data-animate className='text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed'>
					Seamlessly integrated analytics with performance. Experience data like never before.
				</p>
			</motion.div>

			{/* Scroll Indicator */}
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
				className='absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50'
			>
				<span className='text-sm uppercase tracking-widest'>Scroll</span>
				<div className='w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto mt-2' />
			</motion.div>
		</div>
	);
};
