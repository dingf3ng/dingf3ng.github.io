import { useLayoutEffect, useRef } from 'react';

// Matches the mobile breakpoint in styles/_mixins.scss.
const UNIFORM_QUERY = '(min-width: 737px)';

// Measure natural content, then reserve whole modules without clipping wrapped text.
const useGridRows = (items) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const list = ref.current;
    if (!list) return undefined;
    let frame;
    const alignRows = () => {
      const listStyle = getComputedStyle(list);
      const module = parseFloat(listStyle.getPropertyValue('--grid-module'));
      let top = 0;
      for (let element = list; element; element = element.offsetParent) top += element.offsetTop;
      // offsetTop excludes the page-enter transform and includes document scrolling.
      const remainder = top % module;
      list.style.paddingTop = `${remainder < 0.5 ? 0 : module - remainder}px`;
      // A list marked data-grid-uniform gives every row the tallest row's height above mobile widths.
      const uniform = 'gridUniform' in list.dataset && window.matchMedia(UNIFORM_QUERY).matches;
      const rows = Array.from(list.querySelectorAll('[data-grid-row]'));
      const needs = rows.map((row) => {
        const style = getComputedStyle(row);
        const minimum = parseFloat(style.getPropertyValue('--row-min-modules'));
        const content = Array.from(row.querySelectorAll('[data-grid-content]'),
          (element) => element.getBoundingClientRect());
        const height = Math.max(...content.map((rect) => rect.bottom)) - Math.min(...content.map((rect) => rect.top));
        const needed = height + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        return Math.max(minimum, Math.ceil((needed - 0.5) / module));
      });
      const tallest = Math.max(...needs);
      rows.forEach((row, index) => row.style.setProperty('--row-modules', uniform ? tallest : needs[index]));
    };
    alignRows();
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(alignRows);
    });
    observer.observe(list);
    list.querySelectorAll('[data-grid-content]').forEach((content) => observer.observe(content));
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [items]);

  return ref;
};

export default useGridRows;
