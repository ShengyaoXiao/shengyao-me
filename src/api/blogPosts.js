import * as contentful from "contentful";

export default {
  fetchBlogPosts: () => {
    const client = contentful.createClient({
      space: "iufevzkny30o",
      accessToken:
        "090cdbac45fed8c12170321274c12c06b13de21d1cf985d6d96da771d344a4c5",
    });

    return client.getEntries().then((entries) => entries.items);
  },
};
