import { useEffect, useMemo, useState } from 'react';
import { MeshGradient } from '@mesh-gradient/react';
import ContactIcons from '../Contact/ContactIcons';
import EmailLink from '../Contact/EmailLink';
import contactData from '../../data/contact.json';
import { useTheme } from '../../context/ThemeContext';
import styles from './ProfileSection.module.scss';

const emailEntry = contactData.find((entry) => entry.icon === 'email');
const { PUBLIC_URL } = process.env;

const ProfileSection = () => {
  const { theme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [isHidden, setIsHidden] = useState(() => document.visibilityState === 'hidden');

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReducedMotion(media.matches);
    const syncVisibility = () => setIsHidden(document.visibilityState === 'hidden');
    media.addEventListener('change', syncMotion);
    document.addEventListener('visibilitychange', syncVisibility);
    return () => {
      media.removeEventListener('change', syncMotion);
      document.removeEventListener('visibilitychange', syncVisibility);
    };
  }, []);

  const meshOptions = useMemo(() => ({
    colors: theme === 'dark'
      ? ['#37303f', '#4c6870', '#696077', '#37303f']
      : ['#e2dde6', '#9dbcc0', '#b4a3c9', '#e2dde6'],
    seed: 17,
    animationSpeed: 1.2,
    frequency: { x: 0.0007, y: 0.001, delta: 0.0001 },
    isStatic: reducedMotion,
    appearance: 'default',
    transition: !reducedMotion,
    transitionDuration: 240,
  }), [theme, reducedMotion]);

  return (
    <section className={styles.section} aria-labelledby="profile-name">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 id="profile-name" className={styles.name}>Ding Feng</h1>
        </header>
        <div className={styles.imageWrap}>
          <MeshGradient key={`${theme}-${reducedMotion}`} className={styles.mesh} options={meshOptions} isPaused={isHidden} aria-hidden="true" />
          <img className={styles.photo} src={`${PUBLIC_URL}/images/me.jpg`} alt="Ding Feng" fetchPriority="high" />
        </div>
        <div className={styles.contactRow}>
          {emailEntry && <EmailLink email={emailEntry.link.replace('mailto:', '')} />}
          <ContactIcons />
        </div>
        <div className={styles.intro}>
          <p>
            I am a final year undergraduate at the{' '}
            <a href="https://www.comp.nus.edu.sg">School of Computing, National University of Singapore</a>,
            majoring in Computer Science and minoring in Mathematics. I expect to graduate in 2027.
          </p>
          <p>
            My research explores logical foundations of software systems, machine/AI-assisted approaches
            to building reliable software, and new ways to understand and interpret programs.
            I also teach introductory computing modules as a teaching assistant at NUS.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ProfileSection;
