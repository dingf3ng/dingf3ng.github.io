import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <div className="table">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/signature.png`} alt="" />
        </Link>
      </div>
      <header>
        <h2>DING Feng</h2>
        <p>
          <a href="mailto:dingfeng@u.nus.edu">dingfeng@u.nus.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Ding Feng, an undergraduate @{' '}
        <a href="https://www.comp.nus.edu.sg">National University of Singapore</a>.
        I am majoring at CS and taking Mathematics and Economics as Minor. I will be
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
        &copy; Ding Feng, 2024, <Link to="/">dingf3ng.github.io</Link>, adapted from Mr Michael.
      </p>
    </section>
  </section>
);

export default SideBar;
