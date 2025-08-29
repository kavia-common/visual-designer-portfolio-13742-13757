import React from 'react';
import styles from '../styles/Nav.module.css';

// PUBLIC_INTERFACE
export default function Nav() {
  /** Navigation bar with in-page anchor links for smooth scrolling */
  return (
    <nav className={`${styles.navbar} container`} role="navigation" aria-label="Main">
      <div className={`${styles.logo} text-typo-22`}>Logo</div>
      <div className={styles.menu} role="menubar" aria-label="Primary">
        <a className="text-typo-23" role="menuitem" href="#about">About</a>
        <a className="text-typo-23" role="menuitem" href="#work">Work</a>
        <a className="text-typo-23" role="menuitem" href="#contact">Contact</a>
      </div>
    </nav>
  );
}
