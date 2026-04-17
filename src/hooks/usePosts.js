import { useState, useEffect } from 'react';
import { getPostRefs } from '../data/posts/index';
import { parseFrontmatter } from '../utils/frontmatter';

// Module-level cache so posts are only fetched once per session.
let postsCache = null;

async function fetchPost({ id, filename, url }) {
  const response = await fetch(url);
  const text = await response.text();
  const { data, content } = parseFrontmatter(text);
  return {
    id,
    filename,
    title: data.title || id,
    date: data.date || '',
    category: data.category || 'Uncategorized',
    excerpt: data.excerpt || '',
    content,
  };
}

async function loadAllPosts() {
  if (postsCache) return postsCache;
  const refs = getPostRefs();
  const posts = await Promise.all(refs.map(fetchPost));
  postsCache = posts;
  return posts;
}

/**
 * Hook that returns all posts (metadata + content), fetched from
 * auto-discovered markdown files. Results are cached in memory.
 *
 * @returns {{ posts: Array, loading: boolean }}
 */
export function usePosts() {
  const [posts, setPosts] = useState(postsCache || []);
  const [loading, setLoading] = useState(!postsCache);

  useEffect(() => {
    if (postsCache) {
      setPosts(postsCache);
      setLoading(false);
      return;
    }
    loadAllPosts().then((loaded) => {
      setPosts(loaded);
      setLoading(false);
    });
  }, []);

  return { posts, loading };
}

/**
 * Hook that returns a single post by ID (filename without .md).
 * Checks the shared cache first; falls back to fetching just that file.
 *
 * @param {string} id - Post ID (e.g. "my_first_post")
 * @returns {{ post: object|null, loading: boolean, error: boolean }}
 */
export function usePost(id) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    // Use cache if available
    if (postsCache) {
      const found = postsCache.find((p) => p.id === id);
      if (found) {
        setPost(found);
      } else {
        setError(true);
      }
      setLoading(false);
      return;
    }

    // Fetch just the one file needed
    const ref = getPostRefs().find((r) => r.id === id);
    if (!ref) {
      setError(true);
      setLoading(false);
      return;
    }

    fetchPost(ref)
      .then(setPost)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return { post, loading, error };
}
