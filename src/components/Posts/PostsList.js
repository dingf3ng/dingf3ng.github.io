// PostsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostsList = ({ posts }) => (
  <div className="postslist">
    <div className="link-to" id="postslist" />
    {posts.map((post) => (
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
    ))}
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};

export default PostsList;
