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
			const lineSplit = new SplitText(".text1", {
				type: "lines",
				mask: "lines",
			});
			const lineSplit2 = new SplitText(".text2", {
				type: "lines",
				mask: "lines",
			});

			const icon = new SplitText(".icon", {
				type: "lines",
				mask: "lines",
			});

			const lineSplit3 = new SplitText(".description", {
				type: "lines",
				mask: "lines",
			});
			const lineSplit4 = new SplitText(".title", {
				type: "lines",
				mask: "lines",
			});

			gsap.set(split.chars, { y: 250 });
			gsap.set(lineSplit.lines, { y: -20 });
			gsap.set(lineSplit2.lines, { y: 20 });
			gsap.set(textRef2.current, { x: "140%" });
			gsap.set(lineSplit3.lines, { y: 20 });
			gsap.set(lineSplit4.lines, { y: 45 });
			gsap.set(".circular-mask", { clipPath: "circle(0% at 50% 50%)" });

			gsap.to(split.chars, {
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top 40%",
					end: "top top",
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

			gsap.to(lineSplit.lines, {
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top top",
					onEnter: () => {
						gsap.to(lineSplit.lines, {
							y: 0,
							stagger: 0.07,
							duration: 0.67,
							ease: "power2.out",
						});
					},
					onLeaveBack: () => {
						gsap.to(lineSplit.lines, {
							y: -20,
							stagger: 0.02,
							duration: 0.5,
							ease: "power2.inOut",
						});
					},
				},
			});

			gsap.to(lineSplit2.lines, {
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top top",
					onEnter: () => {
						gsap.to(lineSplit2.lines, {
							y: 0,
							stagger: 0.07,
							duration: 0.67,
							ease: "power2.out",
						});
					},
					onLeaveBack: () => {
						gsap.to(lineSplit2.lines, {
							y: 20,
							stagger: 0.02,
							duration: 0.5,
							ease: "power2.inOut",
						});
					},
				},
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top top",
					end: "500% top",
					scrub: 1,
					pin: true,
				},
			});

			tl.to(textRef.current, {
				x: "-101%",
				ease: "linear",
				duration: 0.15,
			});

			tl.to(
				lineSplit.lines,
				{
					opacity: 0,
					ease: "power2.out",
					duration: 0.02,
				},
				">-.06"
			);

			tl.to(
				lineSplit2.lines,
				{
					opacity: 0,
					ease: "power2.out",
					duration: 0.02,
				},
				"<"
			);

			tl.to(
				".circular-mask",
				{
					clipPath: "circle(71% at 50% 50%)",
					ease: "linear",
					duration: 0.05,
				},
				">-.02"
			);

			tl.to(
				textRef2.current,
				{
					x: "-101%",
					ease: "linear",
					duration: 0.05,
				},
				">.-0.1"
			);

			tl.to(
				".divider",
				{
					scaleX: "100%",
					duration: 0.05,
					ease: "power4.out",
				},
				">-.007"
			);

			tl.from(
				icon.lines,
				{
					y: 90,
					ease: "power2.out",
					duration: 0.02,
				},
				"<.005"
			);

			tl.to(
				lineSplit4.lines,
				{
					y: 0,
					ease: "power2.out",
					duration: 0.02,
				},
				"<.005"
			);

			tl.to(
				lineSplit3.lines,
				{
					y: 0,
					ease: "power2.out",
					duration: 0.02,
				},
				"<.005"
			);
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
					className="text-[8rem] md:text-[12rem] lg:text-[16rem]! font-bold  text-amber-900 whitespace-nowrap leading-none 
					px-10 will-change-transform -z-2"
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
					className="text-[8rem] md:text-[12rem] lg:text-[16rem]! font-bold  text-black whitespace-nowrap leading-none px-10 
					will-change-transform -z-2"
				>
					gourd bottle
				</h1>
			</div>

			<div className="text-white relative w-full h-full flex flex-col justify-center items-center">
				<p
					className="will-change-transform md:text-[3rem] lg:text-[4rem] self-start w-[25vw] text-[.9rem]! font-medium absolute 
				top-[15%] left-[10.5%] text1"
				>
					The gord was designed to store a refreshing supply of water (or sand). convenient to
					travel with from village to village.
				</p>

				<p
					className="will-change-transform md:text-[3rem] lg:text-[4rem] self-end w-[25vw] text-[.9rem]! font-medium absolute bottom-[16%] right-[8%] 
				text2"
				>
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
						<GiWaterDrop className="ml-auto" />
					</div>
					<div className="divider " />
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
