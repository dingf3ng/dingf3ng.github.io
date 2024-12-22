import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles
import posts from './data/posts/posts.json'; // Add this import at the top

const { PUBLIC_URL } = process.env.PUBLIC_URL;

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

const PostTemplateWrapper = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  return <PostTemplate post={post} />;
};

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<PostTemplateWrapper />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
