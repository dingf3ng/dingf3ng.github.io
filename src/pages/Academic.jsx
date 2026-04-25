import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

import Main from '../layouts/Main';
import { useMarkdownFile } from '../hooks/useMarkdownFile';

const Academic = () => {
  const { markdown, wordCount } = useMarkdownFile(() => import('../data/aboutmywork.md'));

  return (
    <Main
      title="Academic Matters"
      description="Learn about Ding Feng's academic thoughts and work, research interests, and experience as an educator at National University of Singapore. Computer Science studies and achievements."
      keywords="Ding Feng Academic, Computer Science, Research, Educational Background, Academic Achievements, National University of Singapore"
      path="/academic"
    >
      <article className="surface-panel rich-text">
        <header className="surface-panel__header">
          <div className="surface-panel__title-block">
            <h2 className="surface-panel__title">
              <Link to="/academic">Academic Matters</Link>
            </h2>
            <p className="surface-panel__subtitle">(in about {wordCount} words)</p>
          </div>
        </header>
        <div className="rich-text__content">
          <Markdown>{markdown}</Markdown>
        </div>
      </article>
    </Main>
  );
};

export default Academic;
