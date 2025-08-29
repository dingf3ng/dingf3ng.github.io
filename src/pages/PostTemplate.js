import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';

import Main from '../layouts/Main';

const PostTemplate = ({ post: propPost }) => {
  const { id } = useParams();
  const [post, setPost] = useState(propPost);
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(!propPost);
  const [mathPlugins, setMathPlugins] = useState({ remarkMath: null, rehypeKatex: null });

  useEffect(() => {
    const loadMathPlugins = async () => {
      try {
        const [remarkMathModule, rehypeKatexModule] = await Promise.all([
          import('remark-math'),
          import('rehype-katex'),
        ]);

        // Import KaTeX CSS
        await import('katex/dist/katex.min.css');

        setMathPlugins({
          remarkMath: remarkMathModule.default,
          rehypeKatex: rehypeKatexModule.default,
        });
      } catch (error) {
        console.error('Error loading math plugins:', error);
      }
    };

    const loadPostAndContent = () => {
      let currentPost = propPost;

      // If no post prop was provided, load posts and find the one we need
      (!propPost && id
        ? import('../data/posts/posts')
          .then((module) => {
            const posts = module.default;
            currentPost = posts.find((p) => p.id === id);
            setPost(currentPost);
            return currentPost;
          }) : Promise.resolve(currentPost))
        .then(async (foundPost) => {
          if (foundPost?.address) {
            const res = await import(`../data/posts/src/${foundPost.address}`);
            const response = await fetch(res.default);
            const markdownContent = await response.text();
            return setMarkdown(markdownContent);
          }
          return Promise.resolve();
        })
        .then(() => setLoading(false))
        .catch((error) => {
          console.error('Error loading post:', error);
          setLoading(false);
        });
    };

    loadMathPlugins();
    loadPostAndContent();
  }, [propPost, id]);

  if (loading) {
    return (
      <Main title="Loading..." description="Loading post...">
        <article className="pagepost markdown">
          <p>Loading content...</p>
        </article>
      </Main>
    );
  }

  if (!post) {
    return (
      <Main title="Not Found" description="Post not found">
        <article className="pagepost markdown">
          <header>
            <div className="title">
              <h2>
                <Link to="/posts">Post not found</Link>
              </h2>
            </div>
          </header>
        </article>
      </Main>
    );
  }

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title={post.title} fullPage description="Learn More">
      <article className="pagepost markdown" id={post.id}>
        <header>
          <div className="title">
            <h2>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown
          rehypePlugins={mathPlugins.rehypeKatex ? [mathPlugins.rehypeKatex] : []}
          remarkPlugins={mathPlugins.remarkMath ? [mathPlugins.remarkMath] : []}
        >
          {markdown}
        </Markdown>
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
