import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes
        .filter((l) => l.index)
        .map((l) => (
          <Link key={l.label} to={l.path}>
            {l.label}
          </Link>
        ))}
    </h1>
    <nav className="links">
      <ul>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
    <div className="theme-toggle-container">
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
    <Hamburger />
  </header>
);

export default Navigation;
