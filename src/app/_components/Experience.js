import { OrbitControls, useGLTF } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

export default function Experience() {
    const url = "./models/Berg.glb";
    const gltf = useGLTF(url);
    console.log(gltf);

    return (
        <>
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <directionalLight castShadow position={[1, 2, 3]} intensity={2.5} />
            <ambientLight />

            <mesh recieveShadow rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>
            <Suspense>
                <primitive

                    object={gltf.scene}
                    position={[0, -2, 0]}
                    scale={0.5}
                />
            </Suspense>
        </>
    )
}