import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';
import styles from './ProfileSection.module.scss';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const ProfileSection = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.nameRow}>
          <h2 className={styles.name}>Ding Feng</h2>
          <img
            className={styles.signature}
            src={`${PUBLIC_URL}/signature.png`}
            alt=""
            loading="lazy"
          />
        </div>
      </header>
      <div className={styles.imageWrap}>
        <Link to="/" className={styles.photoLink}>
          <img
            className={styles.photo}
            src={`${PUBLIC_URL}/images/me.jpg`}
            alt=""
            loading="lazy"
          />
        </Link>
      </div>
      <div className={styles.contactRow}>
        <ContactIcons />
      </div>
      <div className={styles.intro}>
        <p>
          I am a penultimate-year undergraduate student at{' '}
          <a href="https://www.comp.nus.edu.sg">School of Computing, National University of Singapore</a>.
          I am majoring in Computer Science and minoring in Mathematics. I expect to graduate in 2027.
        </p>
        <p>
          I have a broad interest in aspects of programming languages and software engineering.
          Specifically, I do research in logical foundations of software systems, machine/AI-assisted approaches for building reliable software systems, and next-generation methodologies for understanding and interpreting programs.
          I also serve as a teaching assistant for some introductory computing modules at NUS.
        </p>
      </div>
    </div>
  </section>
);

export default ProfileSection;
