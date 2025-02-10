import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import CustomObject from "./CustomObject"

extend({ OrbitControls })

export default function Experience() {

    const { camera, gl } = useThree()

    useFrame((state, delta) => {
        // const angle = state.clock.elapsedTime
        // state.camera.position.z = Math.cos(angle*0.2) * 8
        // state.camera.position.x = Math.sin(angle*0.2) * 8
        // state.camera.lookAt(0, 0, 0)

        cubeRef.current.rotation.y += delta * 0.5
        cubeRef.current.rotation.x += delta * 0.08
        groupRef.current.rotation.y += delta * 0.5


    })

    const cubeRef = useRef()
    const groupRef = useRef()

    return (
        <>
            <orbitControls args={[camera, gl.domElement]} />

            <directionalLight position={[1, 2, 3]} />
            <ambientLight />

            <group ref={groupRef}>
                <mesh ref={cubeRef} rotation-y={Math.PI * 0.5} position-x={2.5} scale={1.7}>
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
                <meshStandardMaterial color='brown' />
            </mesh>

            <CustomObject />
        </>
    )
}