import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const ProfileSection = () => (
  <section id="profile-section">
    <div className="profile-container">
      <div className="profile-info">
        <header>
          <div className="name-signature">
            <h2>Ding Feng</h2>
            <Link to="/" className="logo signature">
              <img
                src={`${PUBLIC_URL}/signature.png`}
                alt=""
                loading="lazy"
              />
            </Link>
          </div>
          <p>
            <a href="mailto:dingfeng@u.nus.edu">dingfeng@u.nus.edu</a>
          </p>
          <ContactIcons />
        </header>
        <div className="intro-text">
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
        </div>
      </div>
      <div className="profile-images">
        <Link to="/" className="logo photo">
          <img
            src={`${PUBLIC_URL}/images/me.jpg`}
            alt=""
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  </section>
);

export default ProfileSection;
