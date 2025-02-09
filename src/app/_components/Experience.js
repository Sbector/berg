import { useThree, extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

export default function Experience() {

    const {camera, gl} = useThree()
    console.log(gl)

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta * 0.5
        cubeRef.current.rotation.x += delta * 0.08
        groupRef.current.rotation.y += delta * 0.5
    })

    const cubeRef = useRef()
    const groupRef = useRef()

    return (
        <>
            <orbitControls args = { [camera, gl.domElement] }/>
            <group ref={groupRef}>
                <mesh ref={cubeRef} rotation-y={Math.PI * 0.5} position-x={2.5} scale={1.7}>
                    <boxGeometry />
                    <meshBasicMaterial color='mediumPurple' />
                </mesh>
                <mesh position-x={-2.5} scale={0.7}>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshBasicMaterial color='orange' />
                </mesh>
            </group>
            <mesh rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
                <planeGeometry />
                <meshBasicMaterial color='brown' />
            </mesh>
        </>
    )
}