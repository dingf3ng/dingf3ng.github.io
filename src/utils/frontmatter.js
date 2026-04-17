/**
 * Parse YAML frontmatter from markdown text.
 * Supports simple key: value pairs (no nested objects or arrays).
 *
 * Usage:
 *   const { data, content } = parseFrontmatter(markdownText);
 *
 * Frontmatter format:
 *   ---
 *   title: My Post Title
 *   date: 2025-01-15
 *   category: Programming
 *   excerpt: A short summary of the post.
 *   ---
 *   Post content here...
 */
export function parseFrontmatter(text) {
  if (!text || !text.startsWith('---')) {
    return { data: {}, content: text || '' };
  }

  const end = text.indexOf('\n---', 3);
  if (end === -1) {
    return { data: {}, content: text };
  }

  const yaml = text.slice(3, end).trim();
  const content = text.slice(end + 4).trim();

  const data = {};
  yaml.split('\n').forEach((line) => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim().replace(/^['"]|['"]$/g, '');
      data[key] = value;
    }
  });

  return { data, content };
}
