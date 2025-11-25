import { FaBoltLightning } from "react-icons/fa6";
import { GiWaterDrop } from "react-icons/gi";
import Scene from "../3d/Scene";

const Overview = () => {
	return (
		<section className="product-overview text-black">
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
