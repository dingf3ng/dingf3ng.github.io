import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.excerpt}</p>
    <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>Read More</Link>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    content: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Post;
