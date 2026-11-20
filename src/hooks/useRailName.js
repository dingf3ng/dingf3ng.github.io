import { useLayoutEffect, useRef } from 'react';

// Degrees the name leans away from vertical, towards the bar.
const TILT = 6;
const REFERENCE_SIZE = 200;

// Fit the leaning name from its real letter shapes: the first letter's ascender on the
// rail's left edge, the last letter's descender touching the bar, the top on the CSS `top`.
const useRailName = () => {
  const railRef = useRef(null);
  const bandRef = useRef(null);
  const nameRef = useRef(null);

  useLayoutEffect(() => {
    const rail = railRef.current;
    const band = bandRef.current;
    const name = nameRef.current;
    if (!rail || !band || !name) return undefined;
    let frame;
    const context = document.createElement('canvas').getContext('2d');
    const angle = ((TILT - 90) * Math.PI) / 180;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const fit = () => {
      const room = rail.clientWidth - band.offsetWidth;
      // The rail is not displayed on mobile.
      if (room <= 0) return;
      const style = getComputedStyle(name);
      const text = style.textTransform === 'lowercase' ? name.textContent.toLowerCase() : name.textContent;
      context.font = `${style.fontWeight} ${REFERENCE_SIZE}px ${style.fontFamily}`;
      const metrics = context.measureText(text);

      // Corners of the ink box at a given scale, after rotation about the element's top-left.
      const rotatedBox = (scale) => {
        const size = REFERENCE_SIZE * scale;
        const fontHeight = (metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent) * scale;
        const baseline = (size - fontHeight) / 2 + metrics.fontBoundingBoxAscent * scale;
        const xs = [-metrics.actualBoundingBoxLeft * scale, metrics.actualBoundingBoxRight * scale];
        const ys = [baseline - metrics.actualBoundingBoxAscent * scale, baseline + metrics.actualBoundingBoxDescent * scale];
        const points = xs.flatMap((x) => ys.map((y) => [x * cos - y * sin, x * sin + y * cos]));
        const rotatedXs = points.map((point) => point[0]);
        return {
          size,
          left: Math.min(...rotatedXs),
          right: Math.max(...rotatedXs),
          top: Math.min(...points.map((point) => point[1])),
        };
      };

      const unit = rotatedBox(1);
      const box = rotatedBox(room / (unit.right - unit.left));
      name.style.fontSize = `${box.size}px`;
      name.style.transform = `translate(${-box.left}px, ${-box.top}px) rotate(${TILT - 90}deg)`;
      name.style.visibility = 'visible';
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };
    fit();
    const observer = new ResizeObserver(schedule);
    observer.observe(rail);
    observer.observe(band);
    if (document.fonts?.ready) document.fonts.ready.then(schedule);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return { railRef, bandRef, nameRef };
};

export default useRailName;
