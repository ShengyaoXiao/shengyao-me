import React from 'react';

import "./post.css";

const Post = ({post, onClick}) => {
    return (
        <div className="post-card clickable text-unselectable" onClick={ev=>onClick(post.id)} >
            <div className="title">{post.title}</div>
            {/* <div className="subtitle">
            </div>  */}
        </div> 
    )
}

export default Post; 