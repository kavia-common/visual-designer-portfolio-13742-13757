import React from 'react';
import styles from '../styles/LogoBar.module.css';

// PUBLIC_INTERFACE
export default function LogoBar() {
  /** Partner/brand logo bar */
  return (
    <section className={`${styles.logoBar} container`} aria-label="Partner logos">
      <div className={styles.logos} role="list">
        <div role="listitem" className={styles.logoItem} aria-hidden="true" style={{ width: 116, height: 38 }} />
        <div role="listitem" className={styles.logoItem} aria-hidden="true" style={{ width: 86, height: 31 }} />
        <div role="listitem" className={styles.logoItem} aria-hidden="true" style={{ width: 113, height: 17 }} />
        <div role="listitem" className={styles.logoItem} aria-hidden="true" style={{ width: 38, height: 47 }} />
        <div role="listitem" className={styles.logoItem} aria-hidden="true" style={{ width: 65, height: 44 }} />
      </div>
    </section>
  );
}
