import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef, useState } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		Cylinder026_cork_0: THREE.Mesh;
		Cylinder028_top_string_0: THREE.Mesh;
		Cylinder023_bot_string_0: THREE.Mesh;
		Cylinder024_top_string_0: THREE.Mesh;
		Cylinder025_string_guard_0: THREE.Mesh;
		Line013_goard_main_0: THREE.Mesh;
	};
	materials: {
		cork: THREE.MeshStandardMaterial;
		top_string: THREE.MeshStandardMaterial;
		bot_string: THREE.MeshStandardMaterial;
		string_guard: THREE.MeshStandardMaterial;
		goard_main: THREE.MeshStandardMaterial;
	};
};

export function GourdModel() {
	const { nodes, materials } = useGLTF("/gourd.glb") as unknown as GLTFResult;
	const scrollRef = useRef<THREE.Group>(null);
	const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

	useGSAP(() => {
		if (!scrollRef.current) return;
		const rotationProxy = { y: 0 };

		gsap.to(rotationProxy, {
			y: Math.PI * 8, // Full rotation
			scrollTrigger: {
				trigger: ".product-overview",
				start: "top bottom",
				end: "600% top",
				scrub: 1,
				onUpdate: () => {
					setRotation([0, rotationProxy.y, 0]);
				},
			},
			ease: "none",
		});
	});

	return (
		<group dispose={null} rotation={rotation} position={[-2.6, 0.0, 0.0]} ref={scrollRef}>
			<group>
				<group rotation={[-Math.PI / 2, -0.087, 0]}>
					<group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
						<group>
							<group position={[4.794, -7.344, 2.864]} rotation={[0.175, 0, 0]}>
								<group
									position={[-6.96, 25.893, -7.544]}
									rotation={[-1.745, 0.087, 0]}
									scale={0.614}
								>
									<mesh
										castShadow
										receiveShadow
										geometry={nodes.Cylinder026_cork_0.geometry}
										material={materials.cork}
										position={[6.278, -0.112, -31.279]}
									/>
								</group>
								<group position={[2.255, 6.283, -5.055]}>
									<mesh
										castShadow
										receiveShadow
										geometry={nodes.Cylinder028_top_string_0.geometry}
										material={materials.top_string}
										position={[-7.049, 0.452, 0.959]}
									/>
								</group>
								<group
									position={[-8.689, 0.838, -3.299]}
									rotation={[-0.175, -0.086, -0.015]}
									scale={1.145}
								>
									<group
										position={[-0.055, -2.712, -0.044]}
										rotation={[-Math.PI / 2, 0, 0]}
										scale={1.446}
									>
										<mesh
											castShadow
											receiveShadow
											geometry={nodes.Cylinder023_bot_string_0.geometry}
											material={materials.bot_string}
											position={[2.34, 0.026, 5.502]}
										/>
									</group>
									<group
										position={[-0.055, -1.73, -0.044]}
										rotation={[-Math.PI / 2, 0, 0]}
										scale={1.446}
									>
										<mesh
											castShadow
											receiveShadow
											geometry={nodes.Cylinder024_top_string_0.geometry}
											material={materials.top_string}
											position={[2.34, 0.026, 4.822]}
										/>
									</group>
									<group position={[7.266, 11.77, 0.005]} rotation={[-Math.PI / 2, 1.162, 0]}>
										<mesh
											castShadow
											receiveShadow
											geometry={nodes.Cylinder025_string_guard_0.geometry}
											material={materials.string_guard}
											position={[4.422, 0.086, -6.21]}
										/>
									</group>
									<mesh
										castShadow
										receiveShadow
										geometry={nodes.Line013_goard_main_0.geometry}
										material={materials.goard_main}
										position={[3.327, 5.243, -0.081]}
									/>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/gourd.glb");
