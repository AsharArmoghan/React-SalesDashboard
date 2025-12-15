import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

interface AnimationProviderProps {
	children: React.ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
	const lenisRef = useRef<Lenis | null>(null);

	useLayoutEffect(() => {
		const lenis = new Lenis({
			duration: 1.5,
			easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1.2,
			touchMultiplier: 2.0,
		});

		lenisRef.current = lenis;

		lenis.on("scroll", ScrollTrigger.update);

		gsap.ticker.add(time => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		return () => {
			lenis.destroy();
			gsap.ticker.remove(time => {
				lenis.raf(time * 1000);
			});
		};
	}, []);

	return <div className='w-full min-h-screen'>{children}</div>;
};
