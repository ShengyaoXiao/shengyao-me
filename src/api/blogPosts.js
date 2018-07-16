import * as contentful from 'contentful';

export default {
    fetchBlogPosts: () => {
        const client = contentful.createClient({
            space: "iufevzkny30o",
            accessToken: "090cdbac45fed8c12170321274c12c06b13de21d1cf985d6d96da771d344a4c5"
        });
        
        // const error = err=>console.log(err);
        
        // const blogPosts = [];
        // client.getEntries().then(entries => {
        //     entries.items.forEach(entry => {
        //         blogPosts.push(entry);
        //     })
        // }).catch(error);

        return client.getEntries();
    }
}