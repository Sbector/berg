'use client'

import { StrictMode } from "react"
import { Canvas } from "@react-three/fiber"
import * as THREE from 'three'

import Experience from "./_components/Experience"

export default function Home() {
  return (
    <StrictMode>
      <Canvas
        gl={{
          outputColorSpace: THREE.SRGBColorSpace
        }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [3, 2, 6]
        }}>
        <Experience />
      </Canvas>
    </StrictMode>
  );
}