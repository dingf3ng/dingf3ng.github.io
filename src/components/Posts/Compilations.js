import React from 'react';
import { Link } from 'react-router-dom';
import postsData from '../../data/posts/posts.json';

const Compilations = () => {
  const categories = postsData.reduce((acc, post) => {
    const category = post.category || 'General';
    if (!acc[category]) acc[category] = [];
    acc[category].push(post);
    return acc;
  }, {});

  return (
    <div className="compilations">
      <div className="link-to" id="compilations" />
      <div className="title">
        <h2>Compilations</h2>
      </div>
      <div className="compilation-container">
        {Object.entries(categories).map(([category]) => (
          <nav className="links">
            <div className="compilation-box">
              <Link to="/">
                <h3>{category}</h3>
                <p> Introduction to this category.
                  Introduction.
                </p>
              </Link>
            </div>
          </nav>
        ))}
      </div>
    </div>
  );
};

export default Compilations;
