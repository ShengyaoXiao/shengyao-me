import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

// import "./postDetails.css";

class PostDetails extends Component {
  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyDown);
  };

  componentWiillUnmount = () => {
    document.removeEventListener("keydown", this.handleKeyDown);
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.close();
    }
  };

  close = () => {
    this.props.history.push("");
  };

  render() {
    const postId = this.props.location.pathname.substring(1);
    const post = this.props.blogPosts.find((post) => post.id === postId);

    return (
      <div className="post-details-dialog-container margin home-section">
        <div
          className="post-details-navigate-back-button padding clickable text-unselectable"
          onClick={this.close}
        >
          <i
            className="fa fa-arrow-left post-details-icon"
            aria-hidden="true"
          />
          <span>show all blog posts</span>
        </div>
        {post ? (
          <PostDetailsCard post={post} />
        ) : (
          <div className="post-not-found">Not found</div>
        )}
      </div>
    );
  }
}

const PostDetailsCard = ({ post, onClick }) => {
  return (
    <div className="post-details-card" onClick={onClick}>
      <div className="post-details-text padding">
        <div className="post-details-title">{post.title}</div>
        <div className="post-details-subtitle">This is subtitle</div>
        <div className="post-details-content">{post.content}></div>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  blogPosts: store.blogPosts,
});

export default withRouter(connect(mapStateToProps)(PostDetails));
