"use client";

import { Suspense } from "react";
import { AdaptiveDpr } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import CameraRig from "@/three/controllers/CameraRig";
import Universe from "@/three/scenes/Universe";

export default function SceneCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      performance={{
        min: 0.5,
      }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#020202");
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.12;
        gl.outputColorSpace = THREE.SRGBColorSpace;
      }}
      className="h-full w-full"
    >
      <color attach="background" args={["#020202"]} />
      <fog attach="fog" args={["#020202", 18, 70]} />

      <ambientLight intensity={0.42} />

      <directionalLight
        position={[5, 7, 6]}
        intensity={3.6}
        color="#f4d18a"
      />

      <pointLight
        position={[-4, -2, 4]}
        intensity={11}
        distance={20}
        color="#8f4f0e"
      />

      <pointLight
        position={[4, 1, -2]}
        intensity={8}
        distance={18}
        color="#c9a96e"
      />

      <CameraRig />

      <Suspense fallback={null}>
        <Universe />
      </Suspense>

      <AdaptiveDpr />
    </Canvas>
  );
}