import Activities from '../components/Home/Activities';
import ProfileSection from '../components/Home/ProfileSection';
import Main from '../layouts/Main';
import styles from './Index.module.scss';

const Index = () => (
  <Main
    description="Ding Feng is a Computer Science undergraduate at NUS, researching programming languages and the foundations of reliable software."
    keywords="Ding Feng, Computer Science, National University of Singapore, Programming Languages, Software Engineering, Personal Website, Blog"
    path="/"
  >
    <ProfileSection />
    <section className={`surface-panel ${styles.notice}`} aria-labelledby="notice-title">
      <header className="surface-panel__header">
        <div className="surface-panel__title-block">
          <h2 id="notice-title" className="surface-panel__title">Notice Board</h2>
        </div>
      </header>
      <Activities />
    </section>
  </Main>
);
export default Index;
