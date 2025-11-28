import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Scene = () => {
	return (
		<Canvas
			gl={{ antialias: true, alpha: true }}
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-2.7, 0, 1],
				rotation: [0, -0, 0.3],
			}}
		>
			<Experience />
		</Canvas>
	);
};

export default Scene;
