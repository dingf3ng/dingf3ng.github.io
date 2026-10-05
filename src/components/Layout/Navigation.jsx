import { Link, NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';
import routes from '../../data/routes.json';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <Link aria-label="Ding Feng — Home" className={styles.brand} to="/">
        Ding Feng
      </Link>
      <nav className={styles.links} aria-label="Main navigation">
        <ul className={styles.linksList}>
          {routes.filter((route) => !route.index).map((route) => (
            <li key={route.path}>
              <NavLink
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                to={route.path}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a className={styles.link} href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" rel="noreferrer">
              CV <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.actions}><ThemeToggle /></div>
      <div className={styles.mobileOnly}><Hamburger /></div>
    </div>
  </header>
);
export default Navigation;
