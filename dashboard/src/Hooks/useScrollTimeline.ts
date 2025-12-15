import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollTimelineOptions {
	startColor?: string;
	endColor?: string;
	startScale?: number;
	endScale?: number;
}

export const useScrollTimeline = (
	ref: React.RefObject<HTMLElement | null>,
	{ startColor = "#ffffff", endColor = "#000000", startScale = 1, endScale = 1.2 }: ScrollTimelineOptions = {}
) => {
	useLayoutEffect(() => {
		const element = ref.current;
		if (!element) return;

		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: element,
					start: "top center",
					end: "bottom center",
					scrub: 2,
				},
			});

			tl.fromTo(
				element,
				{
					backgroundColor: startColor,
					scale: startScale,
				},
				{
					backgroundColor: endColor,
					scale: endScale,
					duration: 1,
					ease: "none",
				}
			);
		}, ref);

		return () => ctx.revert();
	}, [ref, startColor, endColor, startScale, endScale]);
};
