import React from 'react';

import "./post.css";
import img from "../../../assets/images/moonBefore.png";

const Post = ({post, onClick}) => {
    return (
        <div className="post-card clickable text-unselectable" onClick={ev=>onClick(post.id)} >
            <div className="post-image-wrapper padding"> 
                <img className="post-image size" alt={post.title} src={img} />
            </div> 
            <div className="post-text padding">
                <div className="post-title">How to Fetch Data in React</div>
                <div className="post-subtitle">dejkfkhskhfoiehfeh</div> 
            </div> 
        </div>
    )
}

export default Post; 