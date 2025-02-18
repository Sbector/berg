/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { Outlines, useGLTF } from '@react-three/drei'
import { MeshNormalMaterial } from 'three'

export default function Berg(props) {
  const { nodes, materials } = useGLTF('./models/Berg.glb')

  const berg = useRef()

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={berg}
        castShadow={false}
        receiveShadow={false}
        geometry={nodes.Berg.geometry}
        
      >
        <meshToonMaterial color={'#ff7e29'} />
        <Outlines thickness={0.7} />
      </mesh>
      <group position={[0.648, 7.115, 0.756]} rotation={[0, 0.256, 0]} scale={1.05}>
        <mesh
          geometry={nodes.Sphere001.geometry}
          material={materials.Iris}
        />
        <mesh
          geometry={nodes.Sphere001_1.geometry}
        >
          <meshBasicMaterial color={'#ffffaa'} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/Berg.glb')
