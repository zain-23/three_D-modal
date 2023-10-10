"use client";
import { Canvas } from "@react-three/fiber";
import { Model } from "../public/gltf/Scene";
import { OrbitControls } from "@react-three/drei/core";

export default function Home() {
  return (
    <>
      <Canvas
        style={{ background: "#171717", height: "100vh" }}
        camera={{ fov: 35 }}
      >
        <ambientLight intensity={2} />
        <spotLight
          intensity={2.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <OrbitControls />
        <Model />
      </Canvas>
    </>
  );
}
