import React, { Component } from "react";
import Axios from "axios";

class Post extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    const id = this.props.match.params.post_id;

    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        // console.log(res);
        this.setState({
          post: res.data
        });
      });
  }

  render() {
    // console.log(this.state.post);

    const post = this.state.post ? (
      <div className="container">
        <h4>{ this.state.post.title }</h4>
        <p>{ this.state.post.body }</p>
      </div>
    ) : (
      <h4>Loading...</h4>
    )

    return (
      <div className="container">
        { post }
      </div>
    )
  }
}

export default Post;