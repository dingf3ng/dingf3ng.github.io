import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-regular-svg-icons/faHouse';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';
import routes from '../../data/routes.json';
import styles from './Navigation.module.scss';

const homeRoute = routes.find((route) => route.index);

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <h1 className={styles.brand}>
        {homeRoute && (
          <Link
            aria-label="Home"
            className={styles.brandLink}
            title="Home"
            to={homeRoute.path}
          >
            <FontAwesomeIcon aria-hidden="true" className={styles.brandIcon} icon={faHouse} />
          </Link>
        )}
      </h1>
      <nav className={styles.links}>
        <ul className={styles.linksList}>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li className={styles.linkItem} key={l.label}>
                <Link className={styles.link} to={l.path}>{l.label}</Link>
              </li>
            ))}
          <li className={styles.linkItem}>
            <a className={styles.link} href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" rel="noreferrer">CV</a>
          </li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <ThemeToggle />
      </div>
    </div>
    <div className={styles.mobileOnly}>
      <Hamburger />
    </div>
  </header>
);

export default Navigation;
