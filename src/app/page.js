'use client'

import { StrictMode } from "react"
import { Canvas } from "@react-three/fiber"

import Experience from "./_components/Experience"
import { Leva } from "leva"
import { Color } from "three"

export default function Home() {

  return (
    <StrictMode>
      <Leva collapsed />
      <Canvas
        flat
        shadows
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [3, 2, 8]
        }}
      >
        <color args={['#000000']} attach="background" />
        <Experience />
      </Canvas>
    </StrictMode>
  );
}