import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL, NODE_ENV } = process.env; // set automatically from package.json:homepage

const SideBar = () => {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/dingf3ng/repos')
      .then((res) => res.json())
      .then((repos) => {
        const repo = repos.filter((r) => r.name === 'dingf3ng.github.io')[0];
        if (repo && repo.pushed_at) {
          setLastUpdated(new Date(repo.pushed_at).toLocaleDateString());
        }
      })
      .catch((error) => {
        console.error('Error fetching repos:', error);
      });
  }, []);

  return (
    <section id="sidebar">
      <section id="intro">
        <div className="table">
          <Link to="/" className="logo">
            <img
              src={`${PUBLIC_URL}/images/me.jpg`}
              alt=""
              loading="lazy"
            />
          </Link>
          <Link to="/" className="logo">
            <img
              src={`${PUBLIC_URL}/signature.png`}
              alt=""
              loading="lazy"
            />
          </Link>
        </div>
        <header>
          <h2>Ding Feng</h2>
          <p>
            <a href="mailto:dingfeng@u.nus.edu">dingfeng@u.nus.edu</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Ding Feng, an undergraduate (formerly Science & Technology Scholar) @{' '}
          <a href="https://www.comp.nus.edu.sg">National University of Singapore</a>.
          I am majoring at computer science and taking mathematics as minor. I will be
          graduating in 2027.
        </p>
        <ul className="actions">
          <li>
            <a href="/cv.pdf" target="_blank" className="button">
              Curriculum Vitae
            </a>
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Ding Feng, 2024, <Link to="/">dingf3ng.github.io</Link>.
        </p>
        <p className="copyright">
          Last updated on {lastUpdated || 'loading...'}
        </p>
        {NODE_ENV === 'production' ? (
          <p className="copyright">
            <span id="busuanzi_container_site_pv">
              Site views: <span id="busuanzi_value_site_pv" />
            </span>
          </p>
        ) : (
          <p className="copyright">
            <span>Site views: (local)</span>
          </p>
        )}
      </section>
    </section>
  );
};

export default SideBar;
