import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { FaBoltLightning } from "react-icons/fa6";
import { GiWaterDrop } from "react-icons/gi";
import Scene from "../3d/Scene";

const Overview = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

	useGSAP(() => {
		if (!scrollRef.current) return;
		const rotationProxy = { y: 0 };

		gsap
			.timeline()
			.to(scrollRef.current, {
				scrollTrigger: {
					trigger: scrollRef.current,
					start: "top top",
					end: "500% top",
					scrub: 1,
					pin: true,
				},
			})
			.to(rotationProxy, {
				y: 0,
				duration: 1,
			});
	});
	return (
		<section ref={scrollRef} className="product-overview text-black z-1 pointer-events-none">
			<div className="header-1">
				<h1>Store an endless supply of water (or sand)</h1>
			</div>
			<div className="header-2">
				<h1>GOURD Bottle</h1>
			</div>

			<div className="circular-mask"></div>

			<div className="tooltips">
				<div className="tooltip">
					<div className="icon">
						<FaBoltLightning />
					</div>
					<div className="divider"></div>
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
					<div className="divider"></div>
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
