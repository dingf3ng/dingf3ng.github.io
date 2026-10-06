// PostsList.js
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useGridRows from '../../hooks/useGridRows';
import styles from './PostsList.module.scss';

const PostsList = ({ posts }) => {
  const gridRef = useGridRows(posts);
  return (
    <div className={styles.list} ref={gridRef}>
      {posts.map((post) => (
        <article className={styles.card} key={post.id}>
          <Link className={styles.link} data-grid-row to={`/posts/${post.id}`}>
            <time className={styles.date} data-grid-content dateTime={post.date}>{post.date}</time>
            <div className={styles.body} data-grid-content>
              <p className={styles.category}>{post.category}</p>
              <div className={styles.content}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
            </div>
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
};

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
