import { useLayoutEffect } from "react";
import gsap from "gsap";

interface ParallaxMotionOptions {
	speed?: number;
	rotationMultiplier?: number;
}

export const useParallaxMotion = (ref: React.RefObject<HTMLElement | null>, { speed = 0.5, rotationMultiplier = 5 }: ParallaxMotionOptions = {}) => {
	useLayoutEffect(() => {
		const element = ref.current;
		if (!element) return;

		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia();

			mm.add("(min-width: 768px)", () => {
				gsap.to(element, {
					scrollTrigger: {
						trigger: element,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
						onUpdate: self => {
							const progress = self.progress;
							const yOffset = progress * 100 * speed;
							const rotation = progress * rotationMultiplier;
							const opacity = 1 - progress * 0.1;

							gsap.set(element, {
								y: yOffset,
								rotation: rotation,
								opacity: opacity,
							});
						},
					},
				});
			});
		}, ref);

		return () => ctx.revert();
	}, [ref, speed, rotationMultiplier]);
};
