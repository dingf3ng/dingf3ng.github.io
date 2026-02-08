import React from 'react';
import { Link } from 'react-router-dom';
import Activities from '../components/Home/Activities';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Ding Feng - Computer Science Student at National University of Singapore. '
      + 'Science & Technology Scholar with interests in programming language research. '
      + 'Personal website and blog.'
    }
    keywords="Ding Feng, Computer Science, National University of Singapore, Science & Technology Scholar, Programming Language, Personal Website, Blog, Theoretical Computer Science, Algorithms, Data Structures, Education"
    path="/"
  >
    <article className="page-content" id="index">
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
