import React, { Suspense, lazy, useEffect } from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env.PUBLIC_URL;

const initializeTheme = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = prefersDarkMode ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', initialTheme);
};

const setupThemeListener = () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handleThemeChange = (e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  mediaQuery.addEventListener('change', handleThemeChange);
};

// Initialize theme on load
initializeTheme();
// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.

const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Posts = lazy(() => import('./pages/Posts'));
const Academic = lazy(() => import('./pages/Academic'));
const Personal = lazy(() => import('./pages/Personal'));
const PostTemplate = lazy(() => import('./pages/PostTemplate'));

const App = () => {
  useEffect(() => {
    setupThemeListener();
  }, []);

  return (
    <HashRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostTemplate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
