import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-regular-svg-icons/faSun';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = ({ className, fullWidth }) => {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const icon = theme === 'light' ? faMoon : faSun;

  const buttonClassName = [
    styles.button,
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      className={buttonClassName}
      type="button"
      title={`Switch to ${nextTheme} theme`}
      onClick={toggleTheme}
    >
      <FontAwesomeIcon aria-hidden="true" className={styles.icon} icon={icon} />
    </button>
  );
};

ThemeToggle.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};

ThemeToggle.defaultProps = {
  className: '',
  fullWidth: false,
};

export default ThemeToggle;
