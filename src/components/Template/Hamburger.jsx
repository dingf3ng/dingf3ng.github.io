import React, { Suspense, lazy, useState } from 'react';

import { Link } from 'react-router-dom';
import routes from '../../data/routes';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#10005;
              </div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">
                &#9776;
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu right isOpen={open}>
          <ul className="hamburger-ul">
            {routes.map((l) => (
              <li key={l.label}>
                <Link to={l.path} onClick={() => setOpen(!open)}>
                  <h3 className={l.index && 'index-li'}>{l.label}</h3>
                </Link>
              </li>
            ))}
          </ul>
          <div className="sidebar-theme-toggle-container">
            <button
              className="button borderless"
              id="theme-toggle"
              type="button"
              onClick={() => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', targetTheme);
                localStorage.setItem('theme', targetTheme);
              }}
            >
              <span className="toggle-text">Toggle Theme</span>
            </button>
          </div>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;
