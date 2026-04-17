import { Suspense, lazy } from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Main from './layouts/Main'; // fallback for lazy pages
import './styles/index.scss';
import { ThemeProvider } from './context/ThemeContext';

const PUBLIC_URL = process.env.PUBLIC_URL || '';
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
const PostTemplate = lazy(() => import('./components/Posts/PostTemplate'));

const App = () => (
  <ThemeProvider>
    <HelmetProvider>
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
    </HelmetProvider>
  </ThemeProvider>
);

export default App;
