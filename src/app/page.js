'use client'

import { Canvas } from "@react-three/fiber"

import Experience from "./_components/Experience"

export default function Home() {
  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  );
}
