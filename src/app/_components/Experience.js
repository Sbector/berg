import { SoftShadows, BakeShadows, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Berg from "./Berg";
import Placeholder from "./Placeholder";
import Shadows from "./Shadows";

export default function Experience() {


    return (
        <>
            {/* <BakeShadows /> */}
            <SoftShadows size={20} samples={20} focus={0} />
            <Perf position="top-left" />
            <OrbitControls makeDefault />

            <directionalLight
                position={[1.5, 3, 3]}
                intensity={2.5}
                castShadow
                shadow-normalBias={0.04}
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={1}
                shadow-camera-far={9}
                shadow-camera-top={2}
                shadow-camera-bottom={-2.5}
                shadow-camera-left={-2}
                shadow-camera-right={2}
            />
            <ambientLight intensity={0.5} />

            <mesh rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>
            <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
                <Shadows />
                <Berg scale={0.5} position={[0, -2, 0]} />
            </Suspense>
        </>
    )
}