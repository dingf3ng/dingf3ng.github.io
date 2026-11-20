import { Link, NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';
import routes from '../../data/routes.json';
import styles from './Navigation.module.scss';

// Desktop and tablet: a left-aligned pyramid of bars, one per page, with the theme switch
// in the top-right corner. The site name and the CV link live in the rail (see Rail.jsx).
// Mobile: the brand and the menu button.
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
                <span className={styles.label}>{route.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.actions}><ThemeToggle /></div>
      <div className={styles.mobileOnly}><Hamburger /></div>
    </div>
  </header>
);
export default Navigation;
