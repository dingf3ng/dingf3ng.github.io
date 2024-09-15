import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Ding Feng's personal website. Undergraduate @ NUS, Singapore, "
      + 'Science & Technology Scholar.'
    }
  >
    <article className="pagepost" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            This is my personal website. Feel free to look around.
          </p>
        </div>
      </header>
      <p>
        Welcome to my website.
      </p>
      <p>
        Here you can get some informations about me,
      </p>
      <p>
        read my posts,
      </p>
      <p>
        play with my interesting projects (in the future),
      </p>
      <p>
        or just have some random walk across the site.
      </p>
      <p>
        This website is still under construction.
      </p>
    </article>
  </Main>
);

export default Index;
