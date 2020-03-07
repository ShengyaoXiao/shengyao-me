export default {
    fetchProjects: () => new Promise((resolve, reject) => resolve(
        [
            {
                id: "WhatLiesintheDark",
                name: "What Lies in the Dark",
                labels: ["Unity3D", "VR"],
                subtitle: "4 vs 1 multiplayer survival game designed for the festival",
                description: "What Lies in the Dark is a game that 4 Xbox players being monsters play versus 1 VR player being a little boy. In this round of Building Virtual Worlds (academic course at the Entertainment Technology Center,) we needed to design an experience for the festival. Hence, we should have more people in each play so they won't wait in a long line. Also, the more people participate in a game, the more interesting the game becomes. <br/><br/>To make the experience is innovative and fun to play, we designed to have 4 monsters players using Xbox controllers. We let them sit in front of the screen where they can collaborate with their monster players. The VR player, on the other hand, is giving an immersive experience in a dark forest where he is haunted by 4 monsters. <br/><br/>The hardest part is the balance of the power between the monster players and the human player. Through playtesting, we noticed that guests with matched gaming skills enjoyed were more likely to enjoy the game. However, naive guests found that a learning curve is needed. While re-designing some game rules, we decided to make separate tutorials for monster players and VR players. Tutorials let players prepared for the tasks like using controllers to move and attack, which they need to perform in the actual game. <br/><br/>What Lies in the Dark is a three-weeks project in teams of 5 students at the Entertainment Technology Center in CMU. My role was the programmer.",
                links:[],
                secondaryLinks: [],
                img:"https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fwhatliesinthedar%2Fdark.jpeg?alt=media&token=0cd32558-b2b8-401c-ae20-9450b869b3e1",
                imgGif:"https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fwhatliesinthedar%2FwtliesinthedarkGif.gif?alt=media&token=34f59897-4f24-4f1b-92f2-4c1d187dc163",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fwhatliesinthedar%2F1.jpeg?alt=media&token=da8a9a2e-85a0-4f1b-a2ad-5b865c8388b7",
                highlight: true

            },  
            {
                id: "BabyGo",
                name: "Baby Go",
                labels: ["Unity3D", "VR"],
                subtitle: "VR experience designed for naive guests",
                description: "Baby Go is a VR experience for a native guest as being a baby to explore the baby's room filled with interactive toys. The design goal is to give the guest freedom while letting him enjoy the experience without frustration. Therefore we designed many interactive toys that the guest can play.  Also, the toys and candies form visual cues to lead the guest. <br/><br/>Through playtesting, we noticed that grabbing, climbing, and throwing are simple activities that the guest can perform intuitively in VR. With sound effects, those activities are rewarding too. <br/><br/>Baby Go is a two-weeks project in teams of 5 students at the Entertainment Technology Center in CMU. My role was the programmer. As a programmer, I learned that playtesting is important to improve the experience, but sometimes a small improvement in gameplay can take a long time to achieve.<br/><br/> If you want to know more about Baby Go, feel free to watch the demo.",
                links:[],
                secondaryLinks: [{url:"https://youtu.be/DPLgVPFbVKI", name:"Watch Demo",icon:"fab fa-youtube"}],
                img:"https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FbabyGo.png?alt=media&token=7045101b-a0e3-49aa-9793-669ba19d2481",
                imgGif:"https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fbabygogif.gif?alt=media&token=320f6f9f-09ee-4a62-b5d3-c36cf591dd70",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FbabyGo.png?alt=media&token=7045101b-a0e3-49aa-9793-669ba19d2481",
                highlight: true

            },
            {
                id: "Furnitrade",
                name: "Furnitrade",
                labels: ["React.js", "Web App"],
                subtitle: "The web app that helps you find desired used furniture or sell one easily",
                description: "Furnitrade is a furniture trading platform where its users can browse furniture, contact the sellers, and post information about the furniture that they want to sell. <br/><br/> The idea of Furnitrade was born when we, as college students who were on a budget, always complained that it's difficult to find cheap second-hand furniture or sell them at a fair price: When we want to buy some cheap used furniture, we often spent lots of time searching and comparing products from different platforms. When we want to sell used furniture, we had to post them on different platforms as well. Plus we might encounter with potentially untrusted buyers and sellers. <br/><br/>Therefore, Furnitrade is designed to improve used furniture trading experience by providing organized information about furniture as well as quick, trustful access to sellers. <br/><br/> Technologies used: React.js, Flask, and MongoDB. <br/><br/> If you want to know more about Furnitrade, feel free to watch the demo.",
                links: [{url:"https://www.youtube.com/watch?v=7hTTqTOZBfY", name:"Watch Demo",icon:"fab fa-youtube"}], 
                secondaryLinks: [], 
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FfurnitradeWide.gif?alt=media&token=dad828e2-9004-41dd-b618-9757196ef38d",
                imgGif: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Ffurnitrade.gif?alt=media&token=a3e1fc50-1bdf-45b3-a55d-cc51161b83ae",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FfurnitradeStatic.png?alt=media&token=f81edc05-f9b8-4844-b809-6b5024a6a6c2",
                highlight: true
            },
            {
                id: "Mememaster",
                name: "Meme Master",
                labels: ["Web App", "Canvas", "Firebase"],
                subtitle: "Let's create a meme",
                description: "Meme Master is a web application that allows users to create, manage, and distribute Memes using vanilla JavaScript, HTML, and CSS. I structured and coded scalable database utilizing Google Firebase. <br/><br/>The HTML Canvas API was used to implement the functionality of text editing on the images. Users can upload a picture as the background of the meme, and they can change the text contents, colors, sizes and fonts.",
                links: [],
                secondaryLinks: [], 
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmememasterLarge.gif?alt=media&token=da31dcfe-f6db-48ed-b7f9-b4bf17497afd",
                imgGif: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fmememaster.gif?alt=media&token=caca0872-27fe-4bf5-bf08-2cda59b89a04",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmemeMasterStatic.png?alt=media&token=860f1645-bc89-4da4-adcc-21dc3bb669ea",
                highlight: true
            },
            {
                id: "Sudoku",
                name: "Sudoku",
                labels: ["Three.js", "CSS3DRenderer", "TweenJS"],
                subtitle: "Web 3D implementation of Sodoku",
                description: "A web 3D Sudoku game with functionality including to start a new game, reset the board, check input value collisions, enter and delete values. The game is built with Three.js. <br/><br/>To allow user interaction in a 3D scene, the game is rendered by CSS3DRenderer, a Three.js feature that applies 3D transformations to DOM elements via CSS properties. So each cell of the board is both a 3D object and DOM element.",
                links: [{url:"https://shengyaoxiao.github.io/basicSudoku/index.html", name:"Plat it", icon:"far fa-arrow-alt-circle-right"}],
                secondaryLinks: [{url:"https://github.com/ShengyaoXiao/basic-sudoku", name:"Open Project", icon: "fab fa-github"}], 
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FsudokuSmall.gif?alt=media&token=171cef4f-c17c-418d-8eb0-eba738929260",
                imgGif: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FsudokuSmall.gif?alt=media&token=171cef4f-c17c-418d-8eb0-eba738929260",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FsudokuStatic.png?alt=media&token=19e9d199-fd30-49e3-90df-dc14f32cb7d5",
                highlight: false
            },
            {
                id: "MonsterFighter",
                name: "Monster Fighter",
                labels: ["Web App"],
                subtitle: "Human-centered Application Design and Development ",
                description: "Monster Fighter is the digital prototype that we created for an HCI course, CSE170/COGS120. This design and development focused on the human-centered design process. <br/><br/> We started this project by need-finding, which means that we observed and interviewed people and identified user needs. Based on the user needs that we found, we concluded a core problem that we intended to solve. With the problem, we spent the next two weeks drawing the storyboards and paper prototypes. Then we showed our prototypes to our classmates, and we did heuristic evaluations, which I found was the most interesting part of the course. Through heuristic evaluations, we received useful feedback from our classmates, and then we were able to make revisions on the prototypes. Once we were satisfied with our prototypes, we started to implement the app and do various kinds of testing on the app. I found user testing was helpful for us to understand the users’ mental models. <br/><br/> If you want to know more about Monster Fighter, feel free to watch the demo. ",
                links: [{url:"https://www.youtube.com/watch?v=qJy5KI7WzPs",  name:"Watch Demo",icon:"fab fa-youtube"}],
                secondaryLinks: [], 
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmfLarge.gif?alt=media&token=9e326b19-f857-47fc-a144-80cfd99b0e12",
                imgGif: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmfLarge.gif?alt=media&token=9e326b19-f857-47fc-a144-80cfd99b0e12",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmfStatic.png?alt=media&token=7fbdcbbf-182f-4ca0-8729-4dc75ac91677",
                highlight: false
            },
            {
                id: "Postprocessing",
                name: "Postprocessing",
                labels: ["Three.js", "GLSL"],
                subtitle: "Playing around with shaders and post-processing effects",
                description: "This project is built with Three.js and GLSL. This hand-drawing effect is created by multiple shader passes. One shader pass is for edge detection, and another uses noise function to create such sense of randomness.",
                links: [{url:"https://github.com/ShengyaoXiao/postprocessing", name:"Open Project", icon: "fab fa-github"}],
                secondaryLinks: [], 
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fpostprocessing.gif?alt=media&token=0291b8ff-babc-4d40-9392-37d992a57961",
                imgGif: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FpostprocessingSmall.gif?alt=media&token=4eae330c-1013-47e7-8ab9-799cc3351e84",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FpostprocessingStatic.png?alt=media&token=b280a71e-a21c-402d-925c-40b60e23ba8b",
                highlight: false
            },
            {
                id: "Serendipity",
                name: "Serendipity",
                labels: ["Three.js", "GLSL"],
                subtitle: "Playing around with shaders and post-processing effects",
                description: "This is an experiment with Three.js and GLSL. The random shape of the object is created by a vertex shader program that changes the vertex displacement randomly. A bloom shader pass creates its glowing effect. I named this project 'Serendipity' as it looks like a magic gem.",
                links: [{url:"https://github.com/ShengyaoXiao/glsl/tree/master/experiment%235", name:"Open Project",icon: "fab fa-github"}],
                secondaryLinks: [],
                imgGif: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FserendipitySmall.gif?alt=media&token=a5628291-cd31-4ae6-9cd2-433b43722d5d",
                img:  "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fserendipity.jpg?alt=media&token=3711fd88-3c4a-47c0-99a9-db2317fc5f55",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FserendipityStatic.png?alt=media&token=b561ed51-def2-45b9-99c5-a936af75a985",
                highlight: false
            },
            {
                id: "ShinyMoon",
                name: "Shiny Moon",
                labels: ["Three.js", "GLSL"],
                subtitle: "An expriment with bloom shader.",
                description: "Shiny Moon is an experiment inspired by a moon night-lights that I put on my night table. I wrote a short blog about how to render post effects using Three.js. Check the link below if you are interested. ",
                links: [{url:"https://zhuanlan.zhihu.com/p/38612359", name: "Read the blog",icon: "fas fa-external-link-alt"}],
                secondaryLinks: [{url: "https://codepen.io/higashino/pen/xzQwoe", name: "Play it", icon: "fab fa-codepen"}],
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmoonAfter.png?alt=media&token=60c2e0bf-d76d-44f3-b5e9-c59d57ed50dc",
                imgGif: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmoonAfter.png?alt=media&token=60c2e0bf-d76d-44f3-b5e9-c59d57ed50dc",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmoonAfter.png?alt=media&token=60c2e0bf-d76d-44f3-b5e9-c59d57ed50dc",
                highlight: false
            },
            {
                id: "Lava",
                name: "Lava",
                labels:["GLSL"],
                subtitle: "An experiment with GLSL, noise function and random function.",
                description: "I made this shader when I was first learning GLSL and noise function. I used this shader for the header of this site as I like the effect of the vertical flow.  ",
                links: [{url: "https://github.com/ShengyaoXiao/glsl/tree/master/experiment%236", name: "Open Project", icon: "fab fa-github"}],
                secondaryLinks: [],
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Flava.gif?alt=media&token=35525f3d-be45-4da9-aa01-090997b30dc7", 
                imgGif: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FlavaSmall.gif?alt=media&token=07943c78-2836-4c38-9eed-f3f49194143e",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FlavaStatic.png?alt=media&token=f8146be7-7a4c-49e8-941c-91183391996f",
                highlight: false
            },
            {
                id: "Grasswithnoise",
                name: "Grass with Noise",
                labels:["GLSL"],
                subtitle: "An experiment with GLSL, noise function and random function.",
                description: "This experiment is written to learn how to use 2D noise function to create water wave/wind motion.",
                links: [],
                secondaryLinks: [],
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fgrass.gif?alt=media&token=4dd84e3e-5f04-4ea2-99d3-30fd1954ba9f", 
                imgGif: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FgrassSmall.gif?alt=media&token=cc92ec1c-db25-451f-8516-c8f7a3274825",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FgrassStatics.png?alt=media&token=165674ab-fe15-47a1-8f88-a33a47694aa1",
                highlight: false
            },
            {
                id: "Earthinsmoke",
                name: "Earth in Smoke",
                labels:["Three.js", "GLSL"],
                subtitle: "An experiment with GLSL",
                description: "The smoke around the earth is not created by complicated shaders but changing the coordinates of the texture and sampling the texture multiple times. Usually, applying some tricks to the texture is both easier and efficient when we want to create awesome effects.",
                links: [],
                secondaryLinks:[], 
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fearth.gif?alt=media&token=c61ad868-15d3-4e40-8a62-ea73975f8085", 
                imgGif: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FearthSmall.gif?alt=media&token=7df3602e-a326-41c8-9ad4-735004e0571a",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FearthStatic.png?alt=media&token=7b913328-0c79-49f5-bfc5-c3e3dd2590bf",
                highlight: false
            },
            // {
            //     id: "Sakura",
            //     name: "Sakura",
            //     labels:["GLSL"],
            //     subtitle: "An experiment learning GLSL, noise function and random function.",
            //     description: "First shader that I created! Yeaah!",
            //     linkss: [],
            //     secondaryLinks: [],
            //     img: null,
            //     imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fsakura.png?alt=media&token=539550f6-3ef9-405c-9076-0b4f1df33d71",
            //     highlight: false
            // }
        ]
    ))
}