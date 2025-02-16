import { shaderMaterial, Sparkles, Sky, BakeShadows, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense, useRef } from "react";
import { useFrame, extend } from '@react-three/fiber'
import Berg from "./Berg";
import Placeholder from "./Placeholder";
import Shadows from "./Shadows";
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

    // const { sunPosition } = useControls('sky', {
    //     sunPosition: { value: [1.5, 3, 3] }
    // })

    const portalMaterial = useRef()
    useFrame((state, delta) => {
        portalMaterial.current.uTime += delta * 2
    })

    return (
        <>
            {/* <BakeShadows /> */}

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
            {/* <Sky sunPosition={sunPosition} /> */}
            <directionalLight
                position={[0, 2, 0]}
                intensity={1}
            // castShadow
            // shadow-normalBias={0.04}
            // shadow-mapSize={[1024, 1024]}
            // shadow-camera-near={1}
            // shadow-camera-far={9}
            // shadow-camera-top={2}
            // shadow-camera-bottom={-2.5}
            // shadow-camera-left={-2}
            // shadow-camera-right={2}
            />
            <directionalLight
                position={[0, -1, 0]}
                intensity={1}
                color={'#ff0000'}
            />
            <directionalLight
                position={[0, 2, -1]}
                intensity={8}
                color={'#0000aa'}
            />
            <ambientLight
                intensity={1}
                color={'#ffeeee'}
            />

            <mesh rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
                <planeGeometry />
                <portalMaterial ref={portalMaterial}/>


                {/* <meshToonMaterial color={'greenYellow'}/> */}
            </mesh>


            <Sparkles
                size={6}
                scale={[6, 6, 6]}
                speed={0.4}
                count={40}
                position-y={2}
            />
            <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
                <Berg scale={0.5} position={[0, 0, 0]} />
                {/* <Shadows /> */}
            </Suspense>
        </>
    )
}