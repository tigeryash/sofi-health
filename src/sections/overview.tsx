import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { FaBoltLightning } from "react-icons/fa6";
import { GiWaterDrop } from "react-icons/gi";
import Scene from "../3d/Scene";

const Overview = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
			if (!scrollRef.current || !textRef.current) return;

			const split = new SplitText(textRef.current, {
				type: "chars",
				mask: "chars",
			});

			gsap.set(split.chars, { y: 250 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top top",
					end: "500% top",
					scrub: 1,
					pin: true,
				},
			});

			gsap.to(split.chars, {
				y: 0,
				stagger: 0.05,
				duration: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top 40%", // When top of container hits 40% of viewport
					end: "top top", // Defining the scroll zone

					// toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
					// play: animate to y:0
					// reverse: animate back to y:250
					toggleActions: "play none none",
					onLeaveBack: () => {
						gsap.to(split.chars, {
							y: 250,
							stagger: 0.05,
							duration: 1,
							ease: "power2.out",
						});
					},
				},
			});
		},
		{ scope: scrollRef }
	);

	return (
		<section
			ref={scrollRef}
			className="product-overview text-black z-1 pointer-events-none relative flex justify-center items-center"
		>
			<div
				className="absolute inset-0 flex items-center pointer-events-none"
				style={{ width: "200%" }}
			>
				<h1
					ref={textRef}
					className="text-[8rem] md:text-[12rem] lg:text-[16rem]! font-bold text-amber-900 whitespace-nowrap leading-none px-10 will-change-transform"
				>
					Store an endless supply of water (or sand)
				</h1>
			</div>
			<h1>GOURD Bottle</h1>

			<div className="circular-mask"></div>

			<div className="tooltips">
				<div className="tooltip">
					<div className="icon">
						<FaBoltLightning />
					</div>
					<div className="divider" />
					<div className="title">
						<h2>#1 Defense</h2>
					</div>
					<div className="description">
						<p>
							Designed to last through S rank missions. GOURD is Gaara approved for durability. No
							distractions, keep fighting.{" "}
						</p>
					</div>
				</div>

				<div className="tooltip">
					<div className="icon">
						<GiWaterDrop />
					</div>
					<div className="divider" />
					<div className="title">
						<h2>Hydration</h2>
					</div>
					<div className="description">
						<p>Lasts you a trip from Sunagakure to the Konohagakure. Refill. Store. Repeat.</p>
					</div>
				</div>
			</div>

			<div className="model-container">
				<Scene />
			</div>
		</section>
	);
};

export default Overview;
