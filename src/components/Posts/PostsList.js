// PostsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import postsData from '../../data/posts/posts'; // Import the JSON data

const PostsList = () => (
  <div className="postslist">
    <div className="link-to" id="postslist" />
    <div className="title">
      <h2>Posts</h2>
    </div>
    {// sort posts by date in descending order
      postsData.sort((a, b) => new Date(b.date) - new Date(a.date)).map((post) => (
        <div className="postbox" key={post.id}>
          <nav className="links">
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
              <h4 className="category">{post.category}</h4>
              <h4 className="date">{post.date}</h4>
              <p>{post.excerpt}</p>
            </Link>
          </nav>
        </div>
      ))
    }
  </div>
);

export default PostsList;
