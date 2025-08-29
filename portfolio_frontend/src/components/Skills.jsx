import React from 'react';
import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Skills.module.css';

function SkillCard({ title, variant = 'variant-1', description }) {
  return (
    <article className={`${styles.skillCard} ${styles[variant] || ''}`}>
      <div className={styles.cardInner}>
        <div className={styles.iconBox}>
          <div className={styles.iconBg} aria-hidden="true"></div>
        </div>
        <div className={styles.textBlock}>
          <h3 className="text-typo-26">{title}</h3>
          <p className="text-typo-27">{description}</p>
        </div>
      </div>
    </article>
  );
}

// PUBLIC_INTERFACE
export default function Skills() {
  /** Skills grid section rendered as three cards */
  const desc = 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com';
  return (
    <section className={`${sectionStyles.section} ${styles.skillsSection}`} aria-labelledby="skills-heading">
      <div className={`${sectionStyles.cards} row container`}>
        <SkillCard title="Product Design" description={desc} variant="variant-1" />
        <SkillCard title="Visual Design" description={desc} variant="variant-2" />
        <SkillCard title="Art Direction" description={desc} variant="variant-3" />
      </div>
    </section>
  );
}
