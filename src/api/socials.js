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
            name: "linkedin",
            text: "",
            icon: "fab fa-linkedin",
            url: "https://www.linkedin.com/in/shelley-xiao-103918190/"
        },
        {
            name: "facebook",
            text: "",
            icon: "fab fa-facebook-f",
            url: "https://www.facebook.com/profile.php?id=100007474726466"
        }
    ] ) )
}