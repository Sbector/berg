import { shaderMaterial, Sparkles, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense, useState, useRef } from "react";
import { useFrame, extend } from '@react-three/fiber'
import Berg from "./Berg";
import Placeholder from "./Placeholder";
import { useControls } from "leva";
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'
import * as THREE from 'three'

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new THREE.Color('#000000'),
        uColorEnd: new THREE.Color('#ff7e29')
    },
    portalVertexShader,
    portalFragmentShader,
)

extend({ PortalMaterial })

export default function Experience() {

    const portalMaterial = useRef()

    const [animation, setAnimation] = useState(true)

    const eventHandler = () => {
        setAnimation(!animation)
    }

    useFrame((state, delta) => {
        if (animation) {
            portalMaterial.current.uTime += delta * 2
        }
    })


    return (
        <>
            <Perf position="top-left" />
            <OrbitControls
                makeDefault
                target={[0, 2, 0]}
                minDistance={3.5}
                maxDistance={20}
                enablePan={false}
                maxPolarAngle={1.7}
                rotateSpeed={0.7}
            />

            <directionalLight
                position={[0, 2, 0]}
                intensity={2}
                color={'#0000ff'}
            />
            <directionalLight
                position={[0, -2, 0]}
                intensity={2}
                color={'#ff0000'}
            />
            <pointLight
                position={[0, 8, 0.25]}
                intensity={250}
                color={'#0000ff'}
            />
            <ambientLight
                intensity={1.5}
            />

            {/* <mesh position={[0, 4.3, 0.25]} scale={[0.17, 0.25, 0.17]}>
                <sphereGeometry />
                <meshToonMaterial color={'#0d0d0d'} />
            </mesh> */}

            <mesh rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
                <planeGeometry />
                <portalMaterial ref={portalMaterial} />
            </mesh>


            <Sparkles
                size={6}
                scale={[6, 6, 6]}
                speed={0.4}
                count={40}
                position-y={2}
            />

            <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
                <Berg scale={0.5} position={[0, 0, 0]} onClick={eventHandler} />
            </Suspense>
        </>
    )
}