// PostsList.js
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PostsList.module.scss';

const PostsList = ({ posts }) => (
  <div className={styles.list}>
    {posts.map((post) => (
      <article className={styles.card} key={post.id}>
        <Link className={styles.link} to={`/posts/${post.id}`}>
          <h3 className={styles.title}>{post.title}</h3>
          <h4 className={styles.category}>{post.category}</h4>
          <h4 className={styles.date}>{post.date}</h4>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </Link>
      </article>
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
