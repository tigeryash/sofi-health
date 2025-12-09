import { GourdModel } from "./GourdModel";

function Experience() {
	return (
		<>
			{/* <OrbitControls /> */}
			<directionalLight
				intensity={1}
				position={[1, 2, -3]}
				castShadow
				shadow-mapSize={[1024, 1024]}
			/>
			{/* <directionalLight intensity={1} position={[-193.35, 60.65, -207.35]} /> */}
			<ambientLight intensity={1} />
			<GourdModel />
		</>
	);
}

export default Experience;
