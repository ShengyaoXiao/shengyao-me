# Shengyao
 My personal website WIP built with React + Redux. Check it out: https://www.xiaoshengyao.me

## Header is built with Three.js.
Directory structure. 
```
├── Header
|    ├── threejs
|    │     ├── addPassToComposer.js
|    |     ├── GeneralLights.js
|    |     ├── SceneSubject.js
|    |     ├── SceneManager.js
|    |     └── threeEntryPoint.js
|    ├── header.css
|    └── Header.js
```

addPassToComposer is a function for image process. It creates shader pass and add it to composer. 

GeneralLights only takes care of the lights. It exposes some public methods if necessary.

SceneSubject only takes care of the meshes, or groups. It exposes some public methods if necessary. 

SceneManager is a function that contains the threejs code. It creates threejs instances such as scene, camera, and renderer, and it has render method. 

threeEntryPoint creates the canvas, an instance of SenceManager and calls the render method in SceneManager. 


