/**
 * Auto-discovers all markdown posts in ./src using webpack's require.context.
 *
 * To add a new post:
 *   1. Create a .md file in src/data/posts/src/ with YAML frontmatter:
 *
 *      ---
 *      title: My Post Title
 *      date: 2025-01-15
 *      category: Programming Language
 *      excerpt: A short summary of the post.
 *      ---
 *      Post content here...
 *
 *   That's it — no registry to update.
 *
 * Post IDs are derived from the filename (without .md extension).
 */

const postsContext = require.context('./src', false, /\.md$/);

/**
 * Returns an array of { id, filename, url } for every discovered post.
 * url is the webpack-hashed asset URL (used to fetch content).
 */
export function getPostRefs() {
  return postsContext.keys().map((key) => ({
    id: key.replace(/^\.\//, '').replace(/\.md$/, ''),
    filename: key.replace(/^\.\//, ''),
    url: postsContext(key),
  }));
}
