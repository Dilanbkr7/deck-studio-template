"use client";

import { Sparkles, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { sceneState } from "@/three/animations/cinematicState";

export default function Universe() {
  const worldRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const orbitersRef = useRef<THREE.Group>(null);

  const ringOneRef = useRef<THREE.Mesh>(null);
  const ringTwoRef = useRef<THREE.Mesh>(null);
  const ringThreeRef = useRef<THREE.Mesh>(null);

  const coreMaterialRef =
    useRef<THREE.MeshPhysicalMaterial>(null);

  const haloMaterialRef =
    useRef<THREE.MeshBasicMaterial>(null);

  const targetPosition = useRef(new THREE.Vector3());
  const targetScale = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;
    const damping = 1 - Math.exp(-3.6 * delta);

    const world = worldRef.current;

    if (world) {
      targetPosition.current.set(
        sceneState.x,
        sceneState.y,
        sceneState.z,
      );

      targetScale.current.setScalar(sceneState.scale);

      world.position.lerp(targetPosition.current, damping);
      world.scale.lerp(targetScale.current, damping);

      world.rotation.x = THREE.MathUtils.lerp(
        world.rotation.x,
        sceneState.rotationX + state.pointer.y * 0.035,
        damping,
      );

      world.rotation.y = THREE.MathUtils.lerp(
        world.rotation.y,
        sceneState.rotationY +
          elapsed * 0.025 +
          state.pointer.x * 0.04,
        damping,
      );

      world.rotation.z = THREE.MathUtils.lerp(
        world.rotation.z,
        sceneState.rotationZ,
        damping,
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.08;
      coreRef.current.rotation.y += delta * 0.14;
      coreRef.current.position.y =
        Math.sin(elapsed * 0.68) * 0.08;
    }

    if (orbitersRef.current) {
      orbitersRef.current.rotation.y = elapsed * 0.28;
      orbitersRef.current.rotation.z =
        Math.sin(elapsed * 0.3) * 0.2;
    }

    const rings = [
      ringOneRef.current,
      ringTwoRef.current,
      ringThreeRef.current,
    ];

    rings.forEach((ring, index) => {
      if (!ring) {
        return;
      }

      const spreadMultiplier = 1 + index * 0.09;

      const ringScale = THREE.MathUtils.lerp(
        ring.scale.x,
        sceneState.ringSpread * spreadMultiplier,
        damping,
      );

      ring.scale.setScalar(ringScale);
    });

    if (ringOneRef.current) {
      ringOneRef.current.rotation.x += delta * 0.075;
      ringOneRef.current.rotation.z -= delta * 0.095;
    }

    if (ringTwoRef.current) {
      ringTwoRef.current.rotation.y -= delta * 0.11;
      ringTwoRef.current.rotation.z += delta * 0.07;
    }

    if (ringThreeRef.current) {
      ringThreeRef.current.rotation.x -= delta * 0.055;
      ringThreeRef.current.rotation.y += delta * 0.08;
    }

    if (coreMaterialRef.current) {
      coreMaterialRef.current.emissiveIntensity =
        THREE.MathUtils.lerp(
          coreMaterialRef.current.emissiveIntensity,
          sceneState.coreGlow,
          damping,
        );
    }

    if (haloMaterialRef.current) {
      haloMaterialRef.current.opacity =
        THREE.MathUtils.lerp(
          haloMaterialRef.current.opacity,
          sceneState.energyOpacity,
          damping,
        );
    }
  });

  return (
    <>
      <Stars
        radius={75}
        depth={45}
        count={1500}
        factor={3}
        saturation={0}
        fade
        speed={0.2}
      />

      <Sparkles
        count={90}
        scale={[14, 9, 8]}
        size={1.8}
        speed={0.28}
        opacity={0.48}
        color="#d4a34c"
        noise={1.2}
      />

      <group
        ref={worldRef}
        position={[sceneState.x, sceneState.y, sceneState.z]}
      >
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.28, 5]} />

          <meshPhysicalMaterial
            ref={coreMaterialRef}
            color="#8c531c"
            metalness={0.9}
            roughness={0.18}
            clearcoat={1}
            clearcoatRoughness={0.12}
            emissive="#3d1d04"
            emissiveIntensity={sceneState.coreGlow}
          />
        </mesh>

        <mesh ref={ringOneRef} rotation={[0.72, 0.25, 0.18]}>
          <torusGeometry args={[2.05, 0.025, 16, 180]} />

          <meshStandardMaterial
            color="#f4cf78"
            metalness={1}
            roughness={0.14}
            emissive="#6d3507"
            emissiveIntensity={0.85}
          />
        </mesh>

        <mesh ref={ringTwoRef} rotation={[0.18, 0.92, 1.08]}>
          <torusGeometry args={[1.72, 0.015, 12, 160]} />

          <meshStandardMaterial
            color="#a96d27"
            metalness={1}
            roughness={0.22}
            emissive="#3d1d04"
            emissiveIntensity={0.5}
          />
        </mesh>

        <mesh ref={ringThreeRef} rotation={[1.1, 0.3, 0.82]}>
          <torusGeometry args={[2.38, 0.01, 10, 180]} />

          <meshStandardMaterial
            color="#7c4a18"
            metalness={1}
            roughness={0.28}
            emissive="#2e1503"
            emissiveIntensity={0.35}
          />
        </mesh>

        <mesh scale={3.2}>
          <sphereGeometry args={[1, 48, 48]} />

          <meshBasicMaterial
            ref={haloMaterialRef}
            color="#8a470d"
            transparent
            opacity={sceneState.energyOpacity}
            depthWrite={false}
            side={THREE.BackSide}
          />
        </mesh>

        <group ref={orbitersRef}>
          <mesh position={[2.55, 0.2, 0]}>
            <sphereGeometry args={[0.075, 18, 18]} />
            <meshBasicMaterial color="#f5d287" />
          </mesh>

          <mesh position={[-2.15, 0.8, 0.35]}>
            <sphereGeometry args={[0.045, 18, 18]} />
            <meshBasicMaterial color="#c8842f" />
          </mesh>

          <mesh position={[0.35, -2.45, 0.55]}>
            <sphereGeometry args={[0.055, 18, 18]} />
            <meshBasicMaterial color="#efbd65" />
          </mesh>
        </group>
      </group>
    </>
  );
}