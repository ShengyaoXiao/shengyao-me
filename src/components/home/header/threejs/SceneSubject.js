/*
 * SceneSubect.js
 * Create mesh and add it to the scene
 * Expose an update function
 */
import * as THREE from "three";

export default (scene) => {
  // const matNormal = new THREE.MeshNormalMaterial();

  // const matShadow = new THREE.MeshPhongMaterial({
  //     color: 0xffffff,
  //     shininess: 0.0
  // });

  // const floorGeo = new THREE.PlaneBufferGeometry(3.0, 3.0);
  // const floor = new THREE.Mesh(floorGeo, matNormal);
  // floor.position.set(0, -0.5, 0);
  // floor.rotation.x = -((Math.PI*90)/180);
  // floor.receiveShadow = true;

  // const sphereGeo = new THREE.SphereBufferGeometry(0.5, 32, 32);
  // const sphere = new THREE.Mesh(sphereGeo, matNormal);
  // sphere.castShadow = true;
  // sphere.receiveShadow = true;

  // scene.add(floor);
  // scene.add(sphere);

  // function changeMaterial(renderShadow) {
  //     const material = renderShadow ? matShadow : matNormal;
  //     floor.material = material;
  //     sphere.material = material;
  // }

  // return {
  //     changeMaterial
  // };

  const uniforms = {
    u_resolution: { type: "v2", value: new THREE.Vector2() },
    u_time: { type: "f", value: 0.0 },
  };

  const vertexShader = `
        void main() {
            gl_Position = vec4(position, 1.0);
        }
    `;

  const fragmentShader = `
        uniform vec2 u_resolution;
        uniform float u_time;
        
        vec2 random2(vec2 st){
            st = vec2( dot(st,vec2(127.1,311.7)),
                    dot(st,vec2(269.5,183.3)) );
            return -1.0 + 2.0*fract(sin(st)*43758.5453123);
        }
        
        // Value Noise by Inigo Quilez - iq/2013
        // https://www.shadertoy.com/view/lsf3WH
        float noise(vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);
        
            vec2 u = f*f*(3.0-2.0*f);
        
            return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                            dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                        mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                            dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
        }
        void main() {
            vec2 st = gl_FragCoord.xy/u_resolution.xy;
            st.x *= u_resolution.x/u_resolution.y;
            vec3 color = vec3(0.0);
    
            float t = abs(1.0-sin(u_time*0.1))*2.0;
            
            // Animate the coordinate space
            st += noise(st*4.)*t;
            //t = abs(1.0-sin(u_time*0.1))*2.0;
            st += noise(st*10.)*t;
            color = vec3(1.0)*smoothstep(.18, .1, st.x);
            color += smoothstep(.15, .2, st.y*10.);
            // color -= smoothstep(.45,.5,st.x);
            gl_FragColor = vec4(color, 1.0);
        }
    `;

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });

  const geometry = new THREE.PlaneBufferGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, shaderMaterial);

  scene.add(mesh);

  function update(time) {
    uniforms.u_time.value += time;
  }

  function resize(width, height) {
    uniforms.u_resolution.value.x = width;
    uniforms.u_resolution.value.y = height;
  }

  return {
    update,
    resize,
  };
};
