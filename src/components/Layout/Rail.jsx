import { Link } from 'react-router-dom';
import contacts from '../../data/contact.json';
import useRailName from '../../hooks/useRailName';
import styles from './Rail.module.scss';

const email = contacts.find((entry) => entry.icon === 'email');
// Email first: the links read upward, so it sits at the bottom of the bar.
const links = [
  ...(email ? [{ href: email.link, label: email.link.replace('mailto:', '') }] : []),
  ...contacts.filter((entry) => entry.icon !== 'email').map((entry) => ({ href: entry.link, label: entry.label })),
];

// Name rail for desktop and tablet: the leaning name, and a thin vertical bar carrying the links.
const Rail = () => {
  const { railRef, bandRef, nameRef } = useRailName();
  return (
    <div className={styles.layer}>
      <div className={styles.grid}>
        <div className={styles.rail} ref={railRef}>
          {/* The link keeps its place while the letters inside it slide, so the pointer cannot lose the hover. */}
          <Link aria-label="Ding Feng — Home" className={styles.name} ref={nameRef} title="Home" to="/">
            <span className={styles.nameText}>Ding Feng</span>
          </Link>
          <div className={styles.band} ref={bandRef}>
            <ul className={styles.links} aria-label="Contact links">
              {links.map((link) => (
                <li key={link.href}><a className={styles.link} href={link.href}>{link.label}</a></li>
              ))}
              <li>
                <a className={styles.link} href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" rel="noreferrer">
                  CV <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rail;
