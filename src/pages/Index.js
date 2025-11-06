import React from 'react';
import { Link } from 'react-router-dom';
import Activities from '../components/Home/Activities';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Ding Feng - Computer Science Student at National University of Singapore (NUS). '
      + 'Science & Technology Scholar with interests in programming languages, '
      + 'programming, and technology. Personal website and blog.'
    }
    keywords="Ding Feng, Computer Science, NUS, Science & Technology Scholar, Programming, Software Engineering, Personal Website, Blog, Theoretical Computer Science, Algorithms, Data Structures, Programming Languages"
    path="/"
  >
    <article className="pagepost" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Notice Board</Link>
          </h2>
          <p>
            This is my personal website. Feel free to look around.
          </p>
        </div>
      </header>
      <div className="link-container">
        <Activities />
      </div>
    </article>
  </Main>
);

export default Index;
