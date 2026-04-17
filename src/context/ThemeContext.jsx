import PropTypes from 'prop-types';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const STORAGE_KEY = 'theme';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

const ThemeContext = createContext(undefined);

const getSystemTheme = () => (
  window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light'
);

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  return savedTheme || getSystemTheme();
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const initialTheme = getInitialTheme();
    document.documentElement.setAttribute('data-theme', initialTheme);
    return initialTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY)) {
      return undefined;
    }

    const mediaQuery = window.matchMedia(MEDIA_QUERY);
    const syncSystemTheme = (event) => {
      if (window.localStorage.getItem(STORAGE_KEY)) {
        return;
      }

      setTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', syncSystemTheme);
    return () => mediaQuery.removeEventListener('change', syncSystemTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
      return nextTheme;
    });
  };

  const value = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
