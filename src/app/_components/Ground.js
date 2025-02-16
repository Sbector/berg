import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'
import * as THREE from 'three'

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new THREE.Color('#ffffff'),
        uColorEnd: new THREE.Color('#000000')
    },
    portalVertexShader,
    portalFragmentShader
)

extend({ PortalMaterial })

export default function Ground(props) {
    return (
        <>
            <mesh rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
                <planeGeometry />
                <portalMaterial ref={props}/>


                {/* <meshToonMaterial color={'greenYellow'}/> */}
            </mesh>
        </>
    )
}