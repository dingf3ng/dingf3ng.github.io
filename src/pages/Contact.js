import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact Ding Feng"
    description="Contact Ding Feng. Get in touch via email: dingfeng@u.nus.edu or connect through social media."
    keywords="Contact Ding Feng, Email, dingfeng@u.nus.edu, National University of Singapore, Computer Science Student"
    path="/contact"
  >
    <article className="pagepost" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink email="dingfeng@u.nus.edu" />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
