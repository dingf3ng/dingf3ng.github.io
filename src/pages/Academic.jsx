import Markdown from 'react-markdown';

import Main from '../layouts/Main';
import { useMarkdownFile } from '../hooks/useMarkdownFile';

const Academic = () => {
  const { markdown } = useMarkdownFile(() => import('../data/aboutmywork.md'));

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
            <h1 className="surface-panel__title">Academic matters</h1>
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
