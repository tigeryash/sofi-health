import { Canvas } from "@react-three/fiber";
import Experience from "@/3d/Experience";

const Scene = () => {
	return (
		<Canvas
			gl={{ antialias: true, alpha: true }}
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [0, 0, 1],
			}}
		>
			<Experience />
		</Canvas>
	);
};

export default Scene;
