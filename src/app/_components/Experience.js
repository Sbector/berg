import { PivotControls, TransformControls, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
    const cube = useRef()

    return (
        <>
            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} />
            <ambientLight />
            <group >
                <mesh ref={cube} rotation-y={Math.PI * 0.5} position-x={2.5} scale={1.7}>
                    <boxGeometry />
                    <meshStandardMaterial color='mediumPurple' />
                </mesh>

                <TransformControls object={cube} mode="translate" />

                <PivotControls 
                anchor={[0, 0, 0]} 
                depthTest={false}
                lineWidth={1}
                axisColors={['#9381ff','#ff4d6d','#7ae582']}
                >
                    <mesh position-x={-2.5} scale={0.7}>
                        <sphereGeometry args={[1.5, 32, 32]} />
                        <meshStandardMaterial color='orange' />
                    </mesh>
                </PivotControls>
            </group>

            <mesh rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='lightSkyBlue' />
            </mesh>
        </>
    )
}