import { useState } from 'react';
import styles from './GridDebug.module.scss';

const GridDebug = () => {
  const [visible, setVisible] = useState(() => new URLSearchParams(window.location.search).get('grid') === '1');

  return (
    <>
      <div id="layout-grid-overlay" className={styles.overlay} hidden={!visible} aria-hidden="true">
        <div className={styles.columns}>
          {Array.from({ length: 12 }, (_, index) => (
            <div className={styles.column} key={index}>
              <span>{index + 1}</span>
            </div>
          ))}
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
