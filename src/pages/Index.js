import React from 'react';
import { Link } from 'react-router-dom';
import { MeshGradient } from '@mesh-gradient/react';
import Activities from '../components/Home/Activities';
import ProfileSection from '../components/Template/ProfileSection';

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
    <MeshGradient
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    />
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        backdropFilter: 'blur(1em)',
        WebkitBackdropFilter: 'blur(1em)',
        pointerEvents: 'none',
      }}
    />
    <div
      className="dark-mode-dim"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity 0.3s ease',
      }}
    />
    <article className="page-content" id="introduction">
      <ProfileSection />
    </article>
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
