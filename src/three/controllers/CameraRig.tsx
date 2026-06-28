"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { cameraState } from "@/three/animations/cinematicState";

export default function CameraRig() {
  /*
   * Esta cámara pertenece al componente mediante un ref.
   * Por eso puede actualizarse de forma imperativa dentro de useFrame.
   */
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  const targetPosition = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    const camera = cameraRef.current;

    if (!camera) {
      return;
    }

    const damping = 1 - Math.exp(-4.8 * delta);

    targetPosition.current.set(
      cameraState.x,
      cameraState.y,
      cameraState.z,
    );

    targetLookAt.current.set(
      cameraState.lookX,
      cameraState.lookY,
      cameraState.lookZ,
    );

    camera.position.lerp(
      targetPosition.current,
      damping,
    );

    currentLookAt.current.lerp(
      targetLookAt.current,
      damping,
    );

    camera.lookAt(currentLookAt.current);

    const nextFov = THREE.MathUtils.lerp(
      camera.fov,
      cameraState.fov,
      damping,
    );

    if (Math.abs(camera.fov - nextFov) > 0.001) {
      camera.fov = nextFov;
      camera.updateProjectionMatrix();
    }
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0, 8]}
      fov={45}
      near={0.1}
      far={180}
    />
  );
}