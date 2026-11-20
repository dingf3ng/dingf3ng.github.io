import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './GridDebug.module.scss';

const GridDebug = () => {
  const { pathname } = useLocation();
  const overlayRef = useRef(null);
  const [visible, setVisible] = useState(() => new URLSearchParams(window.location.search).get('grid') === '1');

  useEffect(() => {
    if (!visible) return undefined;
    const syncScroll = () => overlayRef.current?.style.setProperty('--grid-scroll', `${window.scrollY}px`);
    syncScroll();
    window.addEventListener('scroll', syncScroll, { passive: true });
    return () => window.removeEventListener('scroll', syncScroll);
  }, [visible, pathname]);

  return (
    <>
      <div ref={overlayRef} id="layout-grid-overlay" className={styles.overlay} hidden={!visible} aria-hidden="true">
        <div className={styles.columns}>
          {/* Two rail columns, then the twelve numbered content columns. */}
          {Array.from({ length: 2 }, (_, index) => (
            <div className={`${styles.column} ${styles.railColumn}`} key={`rail-${index}`}>
              <span>R{index + 1}</span>
            </div>
          ))}
          {Array.from({ length: 12 }, (_, index) => (
            <div className={`${styles.column} ${styles.contentColumn}`} key={index}>
              <span>{index + 1}</span>
            </div>
          ))}
          <div className={styles.rows} />
          <div className={styles.headerRows} />
          {pathname === '/' && (
            <>
              <div className={styles.cut}><span>8 / 13 · Notice Board</span></div>
              <div className={`${styles.cut} ${styles.openingEnd}`}><span>13 / 13 · Opening</span></div>
            </>
          )}
        </div>
      </div>
      <button
        type="button"
        className={styles.toggle}
        aria-controls="layout-grid-overlay"
        aria-pressed={visible}
        onClick={() => setVisible((value) => !value)}
      >
        Grid {visible ? 'on' : 'off'}
      </button>
    </>
  );
};

export default GridDebug;
