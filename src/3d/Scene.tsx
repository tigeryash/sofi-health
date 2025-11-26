import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Scene = ({ rotation }: { rotation: [number, number, number] }) => {
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
			style={{ width: "100vw", height: "100svh" }}
		>
			<Experience rotation={rotation} />
		</Canvas>
	);
};

export default Scene;
