import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Berg from "./Berg";
import Placeholder from "./Placeholder";

export default function Experience() {
    

    return (
        <>
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <directionalLight position={[1.5, 2, 3]} intensity={2.5} castShadow shadow-normalBias={0.04}/>
            <ambientLight intensity={0.1}/>

            <mesh receiveShadow rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>
            <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]}/>}>
                <Berg scale= {0.5} position={[0, -2, 0]}/>
            </Suspense>
        </>
    )
}