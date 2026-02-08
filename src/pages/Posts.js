import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import PostsList from '../components/Posts/PostsList';
import postsData from '../data/posts/posts';

const Posts = () => {
  const [sortBy, setSortBy] = useState('date-desc');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(postsData.map((post) => post.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    let filtered = postsData;
    if (selectedCategory !== 'All') {
      filtered = postsData.filter((post) => post.category === selectedCategory);
    }

    return [...filtered].sort((a, b) => {
      if (sortBy === 'date-desc') {
        return new Date(b.date) - new Date(a.date);
      }
      if (sortBy === 'date-asc') {
        return new Date(a.date) - new Date(b.date);
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [selectedCategory, sortBy]);

  const toggleSort = () => {
    if (sortBy === 'date-desc') setSortBy('date-asc');
    else if (sortBy === 'date-asc') setSortBy('title');
    else setSortBy('date-desc');
  };

  const getSortLabel = () => {
    if (sortBy === 'date-desc') return 'Time (Newest)';
    if (sortBy === 'date-asc') return 'Time (Oldest)';
    return 'Name (A-Z)';
  };

  return (
    <Main
      title="Blog Posts by Ding Feng"
      description="Blog posts by Ding Feng covering computer science, programming, technology, and academic insights. Computer Science student at NUS Singapore."
      keywords="Ding Feng Blog, Computer Science Posts, Programming Blog, Computer Science, NUS Singapore, Technology Articles"
      path="/posts"
    >
      <article className="page-content" id="posts">
        <header>
          <div className="title">
            <h2>
              <Link to="/posts">Posts</Link>
            </h2>
            <p>Read my blog posts in various topics</p>
          </div>
        </header>

        <div
          className="controls"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '2em',
            alignItems: 'center',
          }}
        >
          <button type="button" onClick={toggleSort} className="button" style={{ cursor: 'pointer' }}>
            Sort: {getSortLabel()}
          </button>

          <div className="category-select">
            <select
              className="button"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ cursor: 'pointer', textAlignLast: 'center' }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <PostsList posts={filteredPosts} />
      </article>
    </Main>
  );
};

export default Posts;
