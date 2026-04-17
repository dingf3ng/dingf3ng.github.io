import PropTypes from 'prop-types';
import styles from './EmailLink.module.scss';

const EmailLink = ({ email }) => (
  <div className={styles.container}>
    <a className={styles.link} href={`mailto:${email}`}>
      {email}
    </a>
  </div>
);

EmailLink.propTypes = {
  email: PropTypes.string.isRequired,
};

export default EmailLink;
