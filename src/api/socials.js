export default {
    fetchSocials: () => new Promise( (resolve, reject) => resolve( [
        {   
            name: "email",
            text: "higashinoyuu@gmail.com",
            icon: "fas fa-envelope",
            url: "mailto:higashinoyuu@gmail.com"
        },
        {
            name: "github",
            text: "",
            icon: "fab fa-github",
            url: "https://github.com/ShengyaoXiao"
        },
        {
            name: "instagram",
            text: "",
            icon: "fab fa-instagram",
            url: ""
        },
        {
            name: "facebook",
            text: "",
            icon: "fab fa-facebook-f",
            url: ""
        }
    ] ) )
}