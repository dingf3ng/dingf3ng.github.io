import React, {
  useState, useEffect, lazy, Suspense,
} from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import Main from '../layouts/Main';

// This is the correct use of lazy() - for component code-splitting
const MathMarkdown = lazy(() => Promise.all([
  import('react-markdown'),
  import('remark-math'),
  import('rehype-katex'),
  import('katex/dist/katex.min.css'),
]).then(([markdown, remarkMath, rehypeKatex]) => ({
  default: ({ children }) => (
    <markdown.default
      rehypePlugins={[rehypeKatex.default]}
      remarkPlugins={[remarkMath.default]}
    >
      {children}
    </markdown.default>
  ),
})));

const PostTemplate = ({ post: propPost }) => {
  const { id } = useParams();
  const [post, setPost] = useState(propPost);
  const [loading, setLoading] = useState(!propPost);
  const [error, setError] = useState(false);

  // Data loading logic goes in useEffect, not lazy()
  useEffect(() => {
    if (!propPost && id) {
      setLoading(true);
      import('../data/posts/posts')
        .then((module) => {
          const posts = module.default;
          const foundPost = posts.find((p) => p.id === id);
          if (foundPost?.address) {
            return import(`../data/posts/src/${foundPost.address}`)
              .then((res) => fetch(res.default))
              .then((response) => response.text())
              .then((content) => ({ ...foundPost, content }));
          }
          throw new Error('Post not found');
        })
        .then(setPost)
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }
  }, [propPost, id]);

  const count = (content) => {
    if (!content) return 0;
    return content.split(/\s+/).filter((s) => s.trim().length).length;
  };

  if (loading) {
    return (
      <Main title="Loading..." description="Loading post...">
        <article className="page-content page-content-md">
          <p>Loading content...</p>
        </article>
      </Main>
    );
  }

  if (error || !post) {
    return (
      <Main title="Not Found" description="Post not found">
        <article className="page-content page-content-md">
          <header>
            <div className="title">
              <h2><Link to="/posts">Post not found</Link></h2>
            </div>
          </header>
        </article>
      </Main>
    );
  }

  return (
    <Main title={post.title} fullPage description="Learn More">
      <article className="page-content page-content-md" id={post.id}>
        <header>
          <div className="title">
            <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
            <p>(in about {count(post.content)} words)</p>
          </div>
        </header>
        <Suspense fallback={<div>Loading math support...</div>}>
          <MathMarkdown>{post.content}</MathMarkdown>
        </Suspense>
      </article>
    </Main>
  );
};

PostTemplate.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
};

PostTemplate.defaultProps = {
  post: null,
};

export default PostTemplate;
