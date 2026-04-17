import { useState, useEffect } from 'react';

/**
 * Load a markdown file by webpack dynamic import path and return its text content.
 * Counts non-empty words for display ("in about N words").
 *
 * @param {() => Promise<{default: string}>} importFn
 *   A function that calls dynamic import, e.g. () => import('../data/about.md')
 * @returns {{ markdown: string, wordCount: number }}
 */
export function useMarkdownFile(importFn) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    importFn().then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  }, []); // eslint-disable-line

  const wordCount = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return { markdown, wordCount };
}
