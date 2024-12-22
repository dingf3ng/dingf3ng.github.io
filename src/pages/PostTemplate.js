import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import 'katex/dist/katex.min.css';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import Main from '../layouts/Main';

const PostTemplate = ({ post }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import(`../data/posts/${post.address}`).then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  }, []);

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title={post.title} description="Learn More">
      <article className="pagepost markdown" id={post.id}>
        <header>
          <div className="title">
            <h2>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown rehypePlugins={[rehypeKatex]} remarkPlugins={[remarkMath]}>{markdown}</Markdown>
      </article>
    </Main>
  );
};
PostTemplate.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostTemplate;
