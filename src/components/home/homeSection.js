import About from "./about/About";
import WorkContainer from "./work/WorkContainer";
import BlogContainer from "./blog/BlogContainer";
import Contact from "./contact/Contact";

const SECTIONS = [
    {
        name: "about",
        component: About
    },
    {
        name: "work",
        component: WorkContainer
    },
    {
        name: "blog",
        component: BlogContainer
    },
    {
        name: "contact",
        component: Contact
    }
];   

export default SECTIONS;