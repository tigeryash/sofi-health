import { Center, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { GourdModel } from "./GourdModel";

function Experience() {
	const { color } = useControls({
		color: "transparent",
	});
	return (
		<>
			<color attach="background" args={[color]} />
			<directionalLight
				intensity={1}
				position={[1, 2, -3]}
				castShadow
				shadow-mapSize={[1024, 1024]}
			/>
			<directionalLight intensity={0.5} position={[-2, 0, -2]} />
			<ambientLight intensity={0.2} />
			<Center>
				<GourdModel />
			</Center>
		</>
	);
}

export default Experience;

useGLTF.preload("/gourd_bottle.glb");
