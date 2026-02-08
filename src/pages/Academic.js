import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

import Main from '../layouts/Main';

const Academic = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/aboutmywork.md').then((res) => {
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
      title="Academic Matters - Ding Feng"
      description="Learn about Ding Feng's academic work, research interests, and educational journey at National University of Singapore (NUS). Computer Science studies and achievements."
      keywords="Ding Feng Academic, NUS Computer Science, Research, Educational Background, Academic Achievements, University Singapore"
      path="/academic"
    >
      <article className="page-content page-content-md" id="academic">
        <header>
          <div className="title">
            <h2>
              <Link to="/academic">Academic Matters</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
      </article>
    </Main>
  );
};

export default Academic;
