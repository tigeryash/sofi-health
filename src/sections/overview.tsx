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
	const textRef2 = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
			if (!scrollRef.current || !textRef.current || !textRef2.current) return;

			const split = new SplitText(textRef.current, {
				type: "chars",
				mask: "chars",
				charsClass: "char",
			});

			gsap.set(split.chars, { y: 250 });
			gsap.set(textRef2.current, { x: "110%" });

			gsap.to(scrollRef.current, {
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top top",
					end: "500% top",
					scrub: 1,
					pin: true,
				},
			});

			gsap.to(split.chars, {
				// y: 0,
				// stagger: 0.05,
				// duration: 1,
				// ease: "power2.out",
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top 40%", // When top of container hits 40% of viewport
					end: "top top", // Defining the scroll zone
					// toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
					// play: animate to y:0
					// reverse: animate back to y:250
					onEnter: () => {
						gsap.to(split.chars, {
							y: 0,
							stagger: 0.02,
							duration: 1,
							ease: "power2.out",
						});
					},
					onLeaveBack: () => {
						gsap.to(split.chars, {
							y: 250,
							stagger: 0.02,
							duration: 0.4,
							ease: "power2.inOut",
						});
					},
				},
			});
			gsap.to(textRef.current, {
				x: "-101%",
				ease: "linear",
				duration: 1,
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top top",
					end: "100% top",
					scrub: 1,
				},
			});

			gsap.to(".circular-mask", {
				clipPath: "circle(100% at 50% 50%)",
				ease: "power4.in",
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top top",
					end: "110% top",
					scrub: 1,
				},
			});

			gsap.to(textRef2.current, {
				x: "-101%",
				ease: "linear",
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "120% top",
					end: "190% bottom",
					scrub: 1,
					markers: true,
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
					className="text-[8rem] md:text-[12rem] lg:text-[16rem]! font-bold  text-amber-900 whitespace-nowrap leading-none px-10 will-change-transform"
				>
					it all starts with a grain of sand
				</h1>
			</div>
			<div className="circular-mask"></div>
			<div
				className="absolute inset-0 flex items-center pointer-events-none"
				style={{ width: "200%" }}
			>
				<h1
					ref={textRef2}
					className="text-[8rem] md:text-[12rem] lg:text-[16rem]! font-bold  text-black whitespace-nowrap leading-none px-10 will-change-transform"
				>
					gourd bottle
				</h1>
			</div>

			<div>
				<p>
					The gord was designed to store a refreshing supply of water (or sand). convenient to
					travel with from village to village.
				</p>

				<p>
					With a durable design and easy-to-use features, the gourd bottle is the perfect companion
					for any ninja.
				</p>
			</div>

			<div className="tooltips text-black">
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
