"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Index() {
  return (
    <Canvas style={{ background: "#000" }}>
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="city" />
      <OrbitControls enablePan={false} maxDistance={15} />
    </Canvas>
  );
}
