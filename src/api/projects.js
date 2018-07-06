export default {
    fetchProjects: () => new Promise((resolve, reject) => resolve(
        [
            {
                id: "Postprocessing",
                name: "Postprocessing",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fdemo.png?alt=media&token=dcfd157a-43c7-4e99-aa77-620f70539e6b",
                highlight: true
            },
            {
                id: "Serendipity",
                name: "Serendipity",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fcover.jpg?alt=media&token=add7e101-75c8-4102-a20b-2c26c07a4743",
                highlight: true
            },
            {
                id: "ShinyMoon",
                name: "Shiny Moon",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmoonAfter.png?alt=media&token=60c2e0bf-d76d-44f3-b5e9-c59d57ed50dc",
                highlight: false 
            }
        ]
    ))
}