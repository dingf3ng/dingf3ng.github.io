import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import PostsList from '../components/Posts/PostsList';
import { usePosts } from '../hooks/usePosts';
import styles from './Posts.module.scss';

const Posts = () => {
  const { posts, loading } = usePosts();
  const [sortBy, setSortBy] = useState('date-desc');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(posts.map((post) => post.category));
    return ['All', ...Array.from(cats)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let filtered = posts;
    if (selectedCategory !== 'All') {
      filtered = posts.filter((post) => post.category === selectedCategory);
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
  }, [posts, selectedCategory, sortBy]);

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
      title="Blog Posts"
      description="Blog posts by Ding Feng covering computer science, programming, technology, and academic insights. Computer Science student at NUS Singapore."
      keywords="Ding Feng Blog, Computer Science Posts, Programming Blog, Computer Science, NUS Singapore, Technology Articles"
      path="/posts"
    >
      <article className="surface-panel">
        <header className="surface-panel__header">
          <div className="surface-panel__title-block">
            <h2 className="surface-panel__title">
              <Link to="/posts">Posts</Link>
            </h2>
            <p className="surface-panel__subtitle">Read my blog posts in various topics</p>
          </div>
        </header>

        {loading ? (
          <p className={styles.loading}>Loading posts...</p>
        ) : (
          <>
            <div className={styles.controls}>
              <button className={styles.controlButton} type="button" onClick={toggleSort}>
                Sort: {getSortLabel()}
              </button>

              <div className={styles.selectWrap}>
                <select
                  className={styles.select}
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <PostsList posts={filteredPosts} />
          </>
        )}
      </article>
    </Main>
  );
};

export default Posts;
