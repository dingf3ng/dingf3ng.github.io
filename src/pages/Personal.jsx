import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

import Main from '../layouts/Main';
import { useMarkdownFile } from '../hooks/useMarkdownFile';

const Personal = () => {
  const { markdown, wordCount } = useMarkdownFile(() => import('../data/about.md'));

  return (
    <Main
      title="Personal - Ding Feng"
      description="Get to know Ding Feng personally. Background, interests, hobbies, and personal journey from Tianjin, China to Singapore. Computer Science student at NUS."
      keywords="Ding Feng Personal, About Ding Feng, Background, Tianjin China, NUS Singapore, Personal Interests, Hobbies, Biography"
      path="/personal"
    >
      <article className="surface-panel rich-text">
        <header className="surface-panel__header">
          <div className="surface-panel__title-block">
            <h2 className="surface-panel__title">
              <Link to="/personal">Personal Matters</Link>
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

export default Personal;
