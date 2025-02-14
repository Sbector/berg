'use client'

import { StrictMode } from "react"
import { Canvas } from "@react-three/fiber"

import Experience from "./_components/Experience"
import { Leva } from "leva"

export default function Home() {

  return (
    <StrictMode>
      <Leva collapsed />
      <Canvas
        shadows
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [3, 2, 8]
        }}
      >
        <Experience />
      </Canvas>
    </StrictMode>
  );
}