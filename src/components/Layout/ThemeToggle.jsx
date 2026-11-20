import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = ({ className, fullWidth }) => {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'light' ? 'dark' : 'light';

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
      {/* A disc split into a light and a dark half; it turns half a circle when the theme changes. */}
      <span aria-hidden="true" className={styles.icon} />
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
