import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MeshGradient } from '@mesh-gradient/react';
import Activities from '../components/Home/Activities';
import ProfileSection from '../components/Home/ProfileSection';

import Main from '../layouts/Main';
import styles from './Index.module.scss';

const Index = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.visibilityState === 'hidden');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <Main
      description="I am an undergraduate student at the School of Computing, National University of Singapore. I do research in the area of programming languages and software engineering."
      keywords="Ding Feng, Computer Science, National University of Singapore, Science & Technology Scholarship, Programming Languages, Software Engineering, Personal Website, Blog, Algorithms, Data Structures, Education"
      path="/"
    >
      <MeshGradient
        className={styles.mesh}
        options={{
          colors: ['#e2dde6', '#35303a', '#e2dde6', '#35303a'],
        }}
        isPaused={isPaused}
      />
      <div className={styles.overlay} />
      <article className="surface-panel">
        <ProfileSection />
      </article>
      <article className="surface-panel">
        <header className="surface-panel__header">
          <div className="surface-panel__title-block">
            <h2 className="surface-panel__title">
              <Link to="/">Notice Board</Link>
            </h2>
            <p className="surface-panel__subtitle">
              This is my personal website. Feel free to look around.
            </p>
          </div>
        </header>
        <div>
          <Activities />
        </div>
      </article>
    </Main>
  );
};

export default Index;
