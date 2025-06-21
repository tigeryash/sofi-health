import { useControls } from "leva";
import { useGLTF } from "@react-three/drei";
import { GourdModel } from "./GourdModel";

function Experience() {
  const { color } = useControls({
    color: "#000",
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
      <GourdModel />
    </>
  );
}

export default Experience;

useGLTF.preload("/gourd_bottle.glb");
