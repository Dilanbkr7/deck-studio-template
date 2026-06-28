export interface CameraState {
  x: number;
  y: number;
  z: number;
  lookX: number;
  lookY: number;
  lookZ: number;
  fov: number;
}

export interface SceneState {
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  scale: number;
  ringSpread: number;
  coreGlow: number;
  energyOpacity: number;
}

export interface LogoState {
  reveal: number;
  rotationY: number;
  depth: number;
  scale: number;
}

export interface SnakeState {
  reveal: number;
  explode: number;
  coil: number;
  headRotation: number;
  glow: number;
}

const initialCameraState: CameraState = {
  x: 0,
  y: 0,
  z: 8,
  lookX: 0.8,
  lookY: 0,
  lookZ: 0,
  fov: 45,
};

const initialSceneState: SceneState = {
  x: 1.65,
  y: 0,
  z: 0,
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
  scale: 1,
  ringSpread: 1,
  coreGlow: 0.35,
  energyOpacity: 0.08,
};

/*
 * Estos dos estados todavía no tienen modelos asociados.
 * Quedan preparados para conectar deck-logo.glb y snake-layers.glb.
 */
const initialLogoState: LogoState = {
  reveal: 0,
  rotationY: 0,
  depth: 0,
  scale: 1,
};

const initialSnakeState: SnakeState = {
  reveal: 0,
  explode: 0,
  coil: 0,
  headRotation: 0,
  glow: 0,
};

export const cameraState: CameraState = { ...initialCameraState };
export const sceneState: SceneState = { ...initialSceneState };
export const logoState: LogoState = { ...initialLogoState };
export const snakeState: SnakeState = { ...initialSnakeState };

export function resetCinematicState(): void {
  Object.assign(cameraState, initialCameraState);
  Object.assign(sceneState, initialSceneState);
  Object.assign(logoState, initialLogoState);
  Object.assign(snakeState, initialSnakeState);
}