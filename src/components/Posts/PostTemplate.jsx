import { lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';

import Main from '../../layouts/Main';
import { usePost } from '../../hooks/usePosts';

// Lazy-load the markdown renderer and math plugins together
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

const wordCount = (content) => {
  if (!content) return 0;
  return content.split(/\s+/).filter((s) => s.trim().length).length;
};

const PostTemplate = () => {
  const { id } = useParams();
  const { post, loading, error } = usePost(id);

  if (loading) {
    return (
      <Main title="Loading..." description="Loading post...">
        <article className="surface-panel rich-text">
          <p>Loading content...</p>
        </article>
      </Main>
    );
  }

  if (error || !post) {
    return (
      <Main title="Not Found" description="Post not found">
        <article className="surface-panel rich-text">
          <header className="surface-panel__header">
            <div className="surface-panel__title-block">
              <h2 className="surface-panel__title"><Link to="/posts">Post not found</Link></h2>
            </div>
          </header>
        </article>
      </Main>
    );
  }

  return (
    <Main title={post.title} fullPage description="Learn More">
      <article className="surface-panel rich-text">
        <header className="surface-panel__header">
          <div className="surface-panel__title-block">
            <h2 className="surface-panel__title"><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
            <p className="surface-panel__subtitle">(in about {wordCount(post.content)} words)</p>
          </div>
        </header>
        <div className="rich-text__content">
          <Suspense fallback={<div>Loading math support...</div>}>
            <MathMarkdown>{post.content}</MathMarkdown>
          </Suspense>
        </div>
      </article>
    </Main>
  );
};

export default PostTemplate;
