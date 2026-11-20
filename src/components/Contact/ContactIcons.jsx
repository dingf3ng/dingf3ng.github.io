import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

import data from '../../data/contact.json';
import { BookIcon, MailIcon } from './SharpIcons';
import styles from './ContactIcons.module.scss';

// Add new icons here when adding entries to contact.json.
// Brand marks keep their official shapes; the others are the site's own sharp glyphs.
const brandIcons = {
  github: faGithub,
  linkedin: faLinkedinIn,
};
const sharpIcons = {
  scholar: BookIcon,
  email: MailIcon,
};

const ContactIcons = () => (
  <ul className={styles.list}>
    {data.map((s) => {
      const Sharp = sharpIcons[s.icon];
      return (
        <li key={s.label}>
          <a className={styles.link} href={s.link} aria-label={s.label} title={s.label}>
            {Sharp
              ? <Sharp className={styles.icon} />
              : <FontAwesomeIcon aria-hidden="true" className={styles.icon} icon={brandIcons[s.icon]} />}
          </a>
        </li>
      );
    })}
  </ul>
);

export default ContactIcons;
