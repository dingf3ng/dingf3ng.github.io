import React from 'react';
import { Link } from 'react-router-dom';
import postsData from '../../data/posts/posts.json';
import compilationData from '../../data/posts/compilations.json';

const Compilations = () => {
  const categories = postsData.reduce((acc, post) => {
    const category = post.category || 'Uncategorized';
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
        {Object.entries(categories).map(([category]) => {
          const compilation = compilationData.find(
            (cat) => cat.title.trim().toLowerCase() === category.trim().toLowerCase(),
          );
          return (
            <nav className="links">
              <div className="compilation-box">
                <Link to="/">
                  <h3>{category}</h3>
                  <p>{compilation ? compilation.description : 'No description available.'}</p>
                </Link>
              </div>
            </nav>
          );
        })}
      </div>
    </div>
  );
};

export default Compilations;
