import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

import Main from '../layouts/Main';

const Personal = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
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
    <Main
      title="Personal - Ding Feng"
      description="Get to know Ding Feng personally. Background, interests, hobbies, and personal journey from Tianjin, China to Singapore. Computer Science student at NUS."
      keywords="Ding Feng Personal, About Ding Feng, Background, Tianjin China, NUS Singapore, Personal Interests, Hobbies, Biography"
      path="/personal"
    >
      <article className="page-content page-content-md" id="personal">
        <header>
          <div className="title">
            <h2>
              <Link to="/personal">Personal Matters</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
      </article>
    </Main>
  );
};

export default Personal;
