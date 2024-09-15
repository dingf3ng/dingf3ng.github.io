import React from 'react';
import PropTypes from 'prop-types';

const EmailLink = ({ email }) => (
  <div className="email-container">
    <a href={`mailto:${email}`}>
      {email}
    </a>
  </div>
);

EmailLink.propTypes = {
  email: PropTypes.string.isRequired,
};

export default EmailLink;
