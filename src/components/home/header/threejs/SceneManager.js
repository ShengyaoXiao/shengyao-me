/*
 * SceneManager.js 
 * Create scene, renderer. camera, sceneSubjects
 * Pass scene to sceneSubject 
 * Expose update function and onWindowResize function  
 */
import * as THREE from 'three';
import SceneSubject from './SceneSubject';

export default canvas => {
    const clock = new THREE.Clock();
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    };

    const scene = buildScene();
    console.log('in buildScene', scene);
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);

    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x003300);
       
        return scene;
    }

    function buildRender({width, height}) {
        const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);
        return renderer;
    }

    function buildCamera({width, height}) {
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearplane = 1;
        const farPlane = 1000;
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearplane, farPlane);

        camera.position.set(0, 75, 100);
        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new SceneSubject(scene)
        ];

        return sceneSubjects;
    }

    function update() {
        // update sceneSubject 
        const elapsedTime = clock.getElapsedTime();
        for(let i = 0; i < sceneSubjects.length; i++) {
            sceneSubjects[i].update(elapsedTime);
        }

        // update camera 
        var time = Date.now() / 6000;
        camera.position.x = 80 * Math.cos( time );
        camera.position.z = 80 * Math.sin( time );
        camera.lookAt( scene.position );
        
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        const {width, height} = canvas;
        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width/height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    }

    return {
        update,
        onWindowResize
    }
};