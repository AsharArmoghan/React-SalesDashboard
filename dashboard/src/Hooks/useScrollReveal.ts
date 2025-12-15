import { useLayoutEffect } from "react";
import gsap from "gsap";

interface ScrollRevealOptions {
	duration?: number;
	stagger?: number;
	ease?: string;
}

export const useScrollReveal = (
	ref: React.RefObject<HTMLElement | null>,
	{ duration = 1.2, stagger = 0.15, ease = "power4.out" }: ScrollRevealOptions = {}
) => {
	useLayoutEffect(() => {
		const element = ref.current;
		if (!element) return;

		const ctx = gsap.context(() => {
			const items = element.querySelectorAll("[data-animate]");

			gsap.from(items, {
				opacity: 0,
				y: 50,
				rotationX: 10,
				duration: duration,
				stagger: stagger,
				ease: ease,
				scrollTrigger: {
					trigger: element,
					start: "top 80%",
					scrub: 0.5,
				},
			});
		}, ref);

		return () => ctx.revert();
	}, [ref, duration, stagger, ease]);
};
