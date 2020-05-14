import * as THREE from "three";

export default (scene) => {
  const SHADOW_MAP_SIZE = 1024;
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
  directionalLight.position.set(-1, 1.75, 1);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = SHADOW_MAP_SIZE;
  directionalLight.shadow.mapSize.height = SHADOW_MAP_SIZE;
  directionalLight.shadow.camera.far = 3500;
  directionalLight.shadow.bias = -0.0001;

  scene.add(directionalLight);
};
