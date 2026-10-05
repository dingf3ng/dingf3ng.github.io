import Markdown from 'react-markdown';

import Main from '../layouts/Main';
import { useMarkdownFile } from '../hooks/useMarkdownFile';

const Personal = () => {
  const { markdown } = useMarkdownFile(() => import('../data/about.md'));

  return (
    <Main
      title="Personal Matters"
      description="Get to know Ding Feng personally. Background, interests, hobbies, and personal journey from Tianjin, China to Singapore. Computer Science student at NUS."
      keywords="Ding Feng Personal, About Ding Feng, Background, Tianjin China, NUS Singapore, Personal Interests, Hobbies, Biography"
      path="/personal"
    >
      <article className="surface-panel rich-text">
        <header className="surface-panel__header">
          <div className="surface-panel__title-block">
            <h1 className="surface-panel__title">Personal matters</h1>
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
