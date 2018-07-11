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
            name: "codepen",
            text: "",
            icon: "fab fa-codepen",
            url: "https://codepen.io/dashboard?type=view&opts_itemType=pen&opts_filter=all&opts_orderBy=id&opts_orderDirection=0&opts_tag=0&displayType=grid&previewType=iframe&page=0"
        },
        {
            name: "facebook",
            text: "",
            icon: "fab fa-facebook-f",
            url: ""
        }
    ] ) )
}