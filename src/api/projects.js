export default {
    fetchProjects: () => new Promise((resolve, reject) => resolve(
        [
            {
                id: "Postprocessing",
                name: "Postprocessing",
                subtitle: "Playing around with shaders and post-processing effects",
                description: "This project is built with Three.js and GLSL. This hand-drawing effect is created by multiple shaders. One shader is for edge detection and the other one uses noise function for such sense of randomness.",
                links: [{url:"https://github.com/ShengyaoXiao/postprocessing", name:"Open Project", icon: "fab fa-github"}],
                secondaryLinks: [], 
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fdemo.png?alt=media&token=dcfd157a-43c7-4e99-aa77-620f70539e6b",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fdemo.png?alt=media&token=dcfd157a-43c7-4e99-aa77-620f70539e6b",
                highlight: true
            },
            {
                id: "Serendipity",
                name: "Serendipity",
                subtitle: "Playing around with shaders and post-processing effects",
                description: "This project is built with Three.js and GLSL. The random shape of the mesh is done by a vertex shader which change the vertex displacement randomly. Its glowing post-effect is created by a bloom shader. I named this project 'Serendipity' as it looks like a shiny magic diamond.",
                links: [{url:"https://github.com/ShengyaoXiao/glsl/tree/master/experiment%235", name:"Open Project",icon: "fab fa-github"}],
                secondaryLinks: [],
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fcover.jpg?alt=media&token=add7e101-75c8-4102-a20b-2c26c07a4743",
                img:  "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fcover.jpg?alt=media&token=add7e101-75c8-4102-a20b-2c26c07a4743",
                highlight: true
            },
            {
                id: "ShinyMoon",
                name: "Shiny Moon",
                subtitle: "An expriment with bloom shader.",
                description: "Shiny moon is inspired by a moon night-lights. I wrote a short article about how to render post effects using Three.js. Check the link blow if you are interested. ",
                links: [{url:"https://zhuanlan.zhihu.com/p/38612359", name: "Open Website",icon: "fas fa-external-link-alt"}],
                secondaryLinks: [{url: "https://codepen.io/higashino/pen/xzQwoe", name: "Play live", icon: "fab fa-codepen"}],
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmoonAfter.png?alt=media&token=60c2e0bf-d76d-44f3-b5e9-c59d57ed50dc",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmoonAfter.png?alt=media&token=60c2e0bf-d76d-44f3-b5e9-c59d57ed50dc",
                highlight: false
            },
            {
                id: "Lava",
                name: "Lava",
                subtitle: "An experiment learning GLSL, noise function and random function.",
                description: "It's",
                links: [],
                secondaryLinks: [],
                img: null, 
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Flava.png?alt=media&token=6e4de242-99e8-43e3-96be-0116b8ad25d0",
                highlight: false
            },
            {
                id: "Grasswithnoise",
                name: "Grass with Noise",
                subtitle: "An experiment learning GLSL, noise function and random function.",
                description: "2D noise function creates this water wave/wind motion.",
                links: [],
                secondaryLinks: [],
                img: null, 
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fgrass.png?alt=media&token=d28313d1-7b63-4437-9b65-d944011799c2",
                highlight: false
            },
            {
                id: "Earthinsmoke",
                name: "Earth in Smoke",
                subtitle: "An experiment with shaders.",
                description: "This smoke visual is created by changing the coordinates of the texture, and sampling the texture twice.",
                links: [],
                secondaryLinks:[], 
                img: null, 
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fearth.png?alt=media&token=0c65e206-163f-4a71-b5b2-fe0b5b2cb612",
                highlight: false
            },
            {
                id: "Sakura",
                name: "Sakura",
                subtitle: "An experiment learning GLSL, noise function and random function.",
                description: "First shader that I created! Yeaah!",
                linkss: [],
                secondaryLinks: [],
                img: null,
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fsakura.png?alt=media&token=539550f6-3ef9-405c-9076-0b4f1df33d71",
                highlight: false
            }
        ]
    ))
}