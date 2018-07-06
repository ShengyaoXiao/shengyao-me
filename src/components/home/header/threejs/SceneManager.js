/*
 * SceneManager.js 
 * Create scene, renderer. camera, sceneSubjects
 * Pass scene to sceneSubject 
 * Expose update function and onWindowResize function  
 */
import * as THREE from 'three';
import SceneSubject from './SceneSubject';
// import GeneralLights from './GeneralLights';
// import addPassToComposer from './addPassToComposer';
// import EffectComposer, {RenderPass} from 'three-effectcomposer-es6';
// import OrbitControls from 'three-orbitcontrols';


export default canvas => {
    const clock = new THREE.Clock();
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }; 
    
    // const PARAMS = {
    //     minFilter: THREE.LinearFilter, 
    //     magFilter: THREE.LinearFilter,
    //     format: THREE.RGBFormat,
    //     stencilBuffer: false 
    // };

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    // const shadowBuffer = buildShadowBuffer(screenDimensions, PARAMS);
    const subjects = createSceneSubjects(scene);
    // const controls = buildControls(camera, renderer);
    // const {composer, passes} = buildComposer(screenDimensions, scene, camera);

    function buildScene() {
        const scene = new THREE.Scene();
        return scene;
    }

    function buildRender({width, height}) {
        const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);
        // renderer.shadowMap.enabled = true;
        // renderer.shadowMap.renderReverseSided = false; 
        return renderer;
    }

    function buildCamera({width, height}) {
        const aspectRatio = width / height;
        const fieldOfView = 40;
        const nearplane = 1;
        const farPlane = 10000;
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearplane, farPlane);

        camera.position.set(0, 0, 3);
        return camera;
    }
    
    // function buildShadowBuffer({width, height}, PARAMS) {
    //     const shadowBuffer = new THREE.WebGLRenderTarget(1, 1, PARAMS);
    //     shadowBuffer.setSize(width, height);
    //     return shadowBuffer;
    // }

    function createSceneSubjects(scene) {
        // the other option here is using array 

        // const sceneSubjects = [
        //     new SceneSubject(scene),
        //     new GeneralLights(scene),
        // ];
        const subjects = new SceneSubject(scene);
        // new GeneralLights(scene);
        return subjects;
    }

    // function buildControls(camera, renderer) {
    //     const controls = new OrbitControls(camera, renderer.domElement);
    //     return controls;
    // }

    // function buildComposer({width, height}, scene, camera) {
    //     const composer = new EffectComposer(renderer);
    //     composer.addPass(new RenderPass(scene, camera));
    //     const passes = addPassToComposer(composer, {width, height});
        
    //     return {composer, passes};
    // }

    function onWindowResize() {
        const {width, height} = canvas;
        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width/height;
        camera.updateProjectionMatrix();

        subjects.resize(width, height);
        // shadowBuffer.setSize(width, height);
        renderer.setSize(width, height);
        // composer.setSize(width, height);

        // passes.pass.uniforms.iResolution.value.set(width, height);
    }

    function render() {
        // let renderShadow = true;
        // subjects.changeMaterial(renderShadow);
        // renderer.render(scene, camera, shadowBuffer);
        // passes.pass.uniforms.tShadow.value = shadowBuffer.texture;

        // renderShadow = false;
        // subjects.changeMaterial(renderShadow);
        // const elapsed = clock.getElapsedTime();
        // passes.passFinal.uniforms.iTime.value = elapsed;

        // controls.update();
        // composer.render();
        const elapsedTime = clock.getElapsedTime();
        subjects.update(elapsedTime);
        renderer.render(scene, camera);
    }

    return {
        render,
        onWindowResize
    }
};