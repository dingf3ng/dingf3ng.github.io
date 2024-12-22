import React from 'react';
import { Link } from 'react-router-dom';
import Activities from '../components/Home/Activities';

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
      <div className="link-container">
        <p>
          Welcome to my website. Here you can get some information about me.
        </p>
        <p>
          Or you can read my posts, which will be much related to theoritical computer science,
        </p>
        <p>
          or play with my interesting projects
          (In the future, I am planning to integrate them into this site),
        </p>
        <p>
          or just have some random walk across the site.
        </p>
        <p>
          <em> This website is still under construction,
            please do inform me if any bug occurs.
          </em>
        </p>
      </div>
      <div className="link-container">
        <Activities />
      </div>
    </article>
  </Main>
);

export default Index;
