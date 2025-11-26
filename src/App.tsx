import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Intro from "@/sections/intro";
import Outro from "@/sections/outro";
import Overview from "@/sections/overview";

gsap.registerPlugin(ScrollTrigger, SplitText);

const animOptions = {
	duration: 1,
	ease: "power3.out",
	stagger: 0.025,
};
const tooltipSelectors = [
	{
		trigger: 0.65,
		elements: [
			".tooltip:nth-child(1) .icon",
			".tooltip:nth-child(1) .title .line > span",
			".tooltip:nth-child(1) .description .line > span",
		],
	},
	{
		trigger: 0.85,
		elements: [
			".tooltip:nth-child(2) .icon",
			".tooltip:nth-child(2) .title .line > span",
			".tooltip:nth-child(2) .description .line > span",
		],
	},
];

const App = () => {
	useSmoothScroll();

	const mainRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const header1Split = new SplitText(".header-1 h1", {
				type: "chars",
				charsClass: "char",
			});
			const titleSplits = new SplitText(".tooltip .title h2", {
				type: "lines",
				linesClass: "line",
			});
			const descriptionSplits = new SplitText(".tooltip .description p", {
				type: "lines",
				linesClass: "line",
			});

			ScrollTrigger.create({
				trigger: ".product-overview",
				start: "75% bottom",
				onEnter: () =>
					gsap.to(header1Split.chars, {
						y: 0,
						...animOptions,
					}),
				onLeaveBack: () =>
					gsap.to(header1Split.chars, {
						y: "100%",
						...animOptions,
					}),
			});
			return () => {
				header1Split.revert();
				titleSplits.revert();
				descriptionSplits.revert();
			};
		},
		{ scope: mainRef }
	);
	return (
		<main ref={mainRef}>
			<Intro />
			<Overview />
			<Outro />
		</main>
	);
};

export default App;
