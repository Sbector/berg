import { MeshReflectorMaterial, Float, Text, Html, PivotControls, TransformControls, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
    const cube = useRef()
    const sphere = useRef()

    return (
        <>
            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} />
            <ambientLight />
            <group >

                <PivotControls
                    anchor={[0, 0, 0]}
                    depthTest={false}
                    lineWidth={2}
                    axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
                    scale={70}
                    fixed
                >
                    <mesh ref={cube} rotation-y={Math.PI * 0.5} position-x={2.5} scale={1.7}>
                        <boxGeometry />
                        <meshStandardMaterial color='mediumPurple' />
                        <Html
                            position={[0,0.8, 0.8]}
                            wrapperClass="label"
                            center
                            distanceFactor={10}
                            occlude={[sphere, cube]}
                        >cube</Html>
                    </mesh>
                </PivotControls>

                <PivotControls
                    anchor={[0, 0, 0]}
                    depthTest={false}
                    lineWidth={2}
                    axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
                    scale={70}
                    fixed
                >
                    <mesh ref={sphere} position-x={-2.5} scale={0.7}>
                        <sphereGeometry args={[1.5, 32, 32]} />
                        <meshStandardMaterial color='orange' />
                        <Html
                            position={[-1.8, 1.8, 0]}
                            wrapperClass="label"
                            center
                            distanceFactor={10}
                            occlude={[sphere, cube]}
                        >sphere</Html>
                    </mesh>
                </PivotControls>
            </group>

            <mesh rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
                <planeGeometry />
                <MeshReflectorMaterial
                    resolution={512}
                    blur={[1000, 1000]}
                    mixBlur={1}
                    mirror={1}
                />
            </mesh>

            <Float
                speed={10}
            >

            </Float>
        </>
    )
}