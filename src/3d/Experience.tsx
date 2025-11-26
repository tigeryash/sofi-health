import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { GourdModel } from "./GourdModel";

function Experience() {
	const { color } = useControls({
		color: "#000",
	});

	const { rotation } = useControls({
		rotation: {
			value: [0, 0, 0],
			min: -Math.PI,
			max: Math.PI,
			step: 0.01,
		},
	});
	return (
		<>
			{/* <OrbitControls /> */}
			<color attach="background" args={[color]} />
			<directionalLight
				intensity={1}
				position={[1, 2, -3]}
				castShadow
				shadow-mapSize={[1024, 1024]}
			/>
			{/* <directionalLight intensity={1} position={[-193.35, 60.65, -207.35]} /> */}
			<ambientLight intensity={1} />
			<Center>
				<GourdModel rotation={rotation} />
			</Center>
		</>
	);
}

export default Experience;

useGLTF.preload("/gourd_bottle.glb");
