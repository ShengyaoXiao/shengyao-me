import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import PostsContainer from './PostsContainer';

import "../../_common/common.css";
import "./blog.css";
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state={activeLabels: []};
    }

    onPostClick = postId => {
        this.props.history.push(postId);
    }
    
    render() {
        const {blogPosts} = this.props;
        // console.log("in Blog, blogPosts is ", blogPosts);
        return (
            <div className="home-section blog-container">
                <div className="posts-conatiner-blog">
                    <PostsContainer blogPosts={blogPosts} postClick={this.onPostClick}/> 
                </div>  
            </div>
        );
    }
}

const mapStateToProps = store => ({
    blogPosts: store.blogPosts
})

export default withRouter(connect(mapStateToProps)(Blog));