import { Suspense, lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import routes from '../../data/routes.json';
import styles from './Hamburger.module.scss';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={styles.trigger} aria-label="Mobile navigation">
        <ul className={styles.triggerList}>
          {open ? (
            <li className={styles.triggerItem}>
              <button
                aria-label="Close menu"
                className={styles.triggerButton}
                type="button"
                onClick={() => setOpen((isOpen) => !isOpen)}
              >
                &#10005;
              </button>
            </li>
          ) : (
            <li className={styles.triggerItem}>
              <button
                aria-label="Open menu"
                className={styles.triggerButton}
                type="button"
                onClick={() => setOpen((isOpen) => !isOpen)}
              >
                &#9776;
              </button>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu
          customBurgerIcon={false}
          customCrossIcon={false}
          disableOverlayClick={false}
          isOpen={open}
          onClose={() => setOpen(false)}
          onStateChange={({ isOpen }) => setOpen(isOpen)}
          right
          width="min(14rem, 68vw)"
        >
          <ul className={styles.menuList}>
            {routes.map((l) => (
              <li className={styles.menuItem} key={l.label}>
                <Link className={styles.menuLink} to={l.path} onClick={() => setOpen(false)}>
                  <h3 className={styles.menuTitle}>{l.label}</h3>
                </Link>
              </li>
            ))}
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <h3 className={styles.menuTitle}>CV</h3>
              </a>
            </li>
          </ul>
          <div className={styles.themeToggle}>
            <ThemeToggle fullWidth />
          </div>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;
