import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		// 1. Initialize Lenis
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			touchMultiplier: 2,
		});
		lenisRef.current = lenis;

		// 2. Sync with ScrollTrigger
		lenis.on("scroll", ScrollTrigger.update);

		// 3. Add to GSAP Ticker
		// We create a specific function reference to ensure removal works cleanly
		const tickerFn = (time: number) => {
			lenis.raf(time * 1000);
		};
		gsap.ticker.add(tickerFn);

		// 4. Disable lag smoothing
		gsap.ticker.lagSmoothing(0);

		// Cleanup
		return () => {
			gsap.ticker.remove(tickerFn);
			lenis.destroy();
		};
	}, []);
};
