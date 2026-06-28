import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import type { Group } from "three";

const gltfLoader = new GLTFLoader();

/**
 * Carga un modelo GLB o GLTF y devuelve su escena principal.
 *
 * @param url Ruta pública del modelo.
 * @returns Escena principal del archivo cargado.
 */
export function loadGLB(url: string): Promise<Group> {
  return new Promise((resolve, reject) => {
    gltfLoader.load(
      url,
      (gltf) => {
        resolve(gltf.scene);
      },
      undefined,
      (error) => {
        console.error(`No se pudo cargar el modelo 3D: ${url}`, error);
        reject(error);
      },
    );
  });
}