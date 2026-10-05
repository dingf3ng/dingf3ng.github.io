import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import routes from '../../data/routes.json';
import styles from './Hamburger.module.scss';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current.focus();
      }
    };
    const handlePointerDown = (event) => {
      if (!containerRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [open]);

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        ref={triggerRef}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className={styles.triggerButton}
        type="button"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? 'Close' : 'Menu'}</span>
        <span className={`${styles.icon} ${open ? styles.open : ''}`} aria-hidden="true"><span /><span /></span>
      </button>
      {open && (
        <nav id="mobile-navigation" className={styles.menu} aria-label="Mobile navigation">
          <ul className={styles.menuList}>
            {routes.map((route) => (
              <li className={styles.menuItem} key={route.path}>
                <NavLink className={styles.menuLink} end={route.index} to={route.path} onClick={() => setOpen(false)}>
                  {route.label}
                </NavLink>
              </li>
            ))}
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                CV <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
          <div className={styles.themeToggle}><span>Colour scheme</span><ThemeToggle fullWidth /></div>
        </nav>
      )}
    </div>
  );
};
export default Hamburger;
