import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Ball from '../ball.jpeg';

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const posts = res.data.slice(0, 15);
        this.setState({posts});
      });
  }

  render() {
    const { posts } = this.state;
    const listPosts = posts.map(post => (
      <div className="post card" key={ post.id }>
        <img src={ Ball } alt="pokie ball" />
        <div className="card-content">
          <Link to={ `/${post.id}` }>
            <span className="card-title">{ post.title }</span>
          </Link>          
          <p>{ post.body }</p>
        </div>
      </div>
    ));

    return (
      <div className="home container">
        <h4 className="center">Home</h4>
        { listPosts }  
      </div>
    )
  }    
}

export default Home;