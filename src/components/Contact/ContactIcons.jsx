import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import data from '../../data/contact.json';
import styles from './ContactIcons.module.scss';

// Add new icons here when adding entries to contact.json
const icons = {
  github: faGithub,
  linkedin: faLinkedinIn,
  scholar: faBookOpen,
  email: faEnvelope,
};

const ContactIcons = () => (
  <ul className={styles.list}>
    {data.filter((s) => s.icon !== 'email').map((s) => (
      <li key={s.label}>
        <a className={styles.link} href={s.link} aria-label={s.label} title={s.label}>
          <FontAwesomeIcon aria-hidden="true" className={styles.icon} icon={icons[s.icon]} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
