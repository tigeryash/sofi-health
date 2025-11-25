import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder026_cork_0: THREE.Mesh;
    Line013_goard_main_0: THREE.Mesh;
    Cylinder025_string_guard_0: THREE.Mesh;
    Cylinder024_top_string_0: THREE.Mesh;
    Cylinder023_bot_string_0: THREE.Mesh;
    Cylinder028_top_string_0: THREE.Mesh;
  };
  materials: {
    cork: THREE.MeshStandardMaterial;
    goard_main: THREE.MeshStandardMaterial;
    string_guard: THREE.MeshStandardMaterial;
    top_string: THREE.MeshStandardMaterial;
    bot_string: THREE.MeshStandardMaterial;
  };
};

export function GourdModel() {
  const { nodes, materials } = useGLTF(
    "/gourd_bottle.glb"
  ) as unknown as GLTFResult;
  return (
    <group dispose={null} rotation={[Math.PI/2,0,Math.PI/4]}>
      <group scale={0.01}>
        <group position={[-193.35, 39.65, -213.35]} rotation={[0.17, 0, 0]}>
          <group
            position={[-8.69, 0.84, -3.3]}
            rotation={[-0.18, -0.09, -0.02]}
            scale={1.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line013_goard_main_0.geometry}
              material={materials.goard_main}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder025_string_guard_0.geometry}
              material={materials.string_guard}
              position={[7.27, 11.77, 0.01]}
              rotation={[-Math.PI / 2, 1.16, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder024_top_string_0.geometry}
              material={materials.top_string}
              position={[-0.06, -1.73, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1.45}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder023_bot_string_0.geometry}
              material={materials.bot_string}
              position={[-0.06, -2.71, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1.45}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026_cork_0.geometry}
            material={materials.cork}
            position={[-6.96, 25.89, -7.54]}
            rotation={[-1.75, 0.09, 0]}
            scale={0.61}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028_top_string_0.geometry}
            material={materials.top_string}
            position={[2.25, 6.28, -5.06]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/gourd_bottle.glb");
