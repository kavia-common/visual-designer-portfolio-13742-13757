import React from 'react';
import styles from '../styles/Header.module.css';

// PUBLIC_INTERFACE
export default function Header() {
  /** Hero header section with title, kicker, description and CTA */
  return (
    <header className={`${styles.headerSection} container`} id="about">
      <div className={styles.headerCopy}>
        <div className="text-typo-22">Branding | Image making</div>
        <h1 className="text-typo-24">Visual Designer</h1>
        <p className="text-typo-23">
          This is a template Figma file, turned into code using Anima.
          {'\n'}Learn more at AnimaApp.com
        </p>
        <div className={styles.headerCta}>
          <a href="#contact" className="btn"><span className="text-typo-31">Contact</span></a>
        </div>
      </div>
      <div className={styles.headerImage} aria-hidden="true"></div>
    </header>
  );
}
