import React from 'react';
import Post from "./Post";
import "./postsContainer.css";

const PostsContainer = ({blogPosts, postClick}) => {
    return (
        <div className="posts-container">
            {blogPosts.map(post=><Post key={post.title} post={post} onCllick={postClick} />)}
        </div> 
    );
}

export default PostsContainer;
