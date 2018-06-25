/* 
 * SceneSubect.js
 * Create mesh and add it to the scene
 * Expose an update function  
 */

import * as THREE from 'three';

export default scene => {
    const matNormal = new THREE.MeshNormalMaterial();
    
    const matShadow = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shininess: 0.0
    });

    const floorGeo = new THREE.PlaneBufferGeometry(3.0, 3.0);
    const floor = new THREE.Mesh(floorGeo, matNormal);
    floor.position.set(0, -0.5, 0);
    floor.rotation.x = -((Math.PI*90)/180);
    floor.receiveShadow = true;
    
    const sphereGeo = new THREE.SphereBufferGeometry(0.5, 32, 32);
    const sphere = new THREE.Mesh(sphereGeo, matNormal);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    
    scene.add(floor);
    scene.add(sphere);    

    // function update(time) {
    //     // uniforms.time.value = time;
    // }

    // return {
    //     update
    // }
    function changeMaterial(renderShadow) {
        const material = renderShadow ? matShadow : matNormal;
        floor.material = material;
        sphere.material = material; 
    }
   
    return {
        changeMaterial
    };
}