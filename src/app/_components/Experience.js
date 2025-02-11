import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
    const cube = useRef()
    const sphere = useRef()

    return (
        <>
            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={2.5}/>
            <ambientLight />
            <group >
                <mesh position-x={2.5} scale={1.7}>
                    <boxGeometry />
                    <meshStandardMaterial color='mediumPurple' />
                </mesh>

                <mesh position-x={-2.5} scale={0.7}>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial color='orange' />
                </mesh>
            </group>

            <mesh rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>
        </>
    )
}