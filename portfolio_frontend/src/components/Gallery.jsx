import React from 'react';
import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Gallery.module.css';

function GalleryCard({ title, subtitle }) {
  return (
    <article className={styles.galleryCard}>
      <div className={styles.image} aria-hidden="true"></div>
      <div className={styles.meta}>
        <div className="text-typo-22">{title}</div>
        <div className="text-typo-23">{subtitle}</div>
      </div>
    </article>
  );
}

// PUBLIC_INTERFACE
export default function Gallery() {
  /** Gallery grid section with 6 placeholder items */
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    title: 'Project title',
    subtitle: 'UI, Art drection',
  }));
  return (
    <section className={`${sectionStyles.section} ${styles.gallerySection}`} aria-labelledby="gallery-heading" id="work">
      <div className="container" style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2 id="gallery-heading" className="text-typo-21">Latest work</h2>
      </div>
      <div className={`${sectionStyles.cards} row container`}>
        {items.map((it) => (
          <GalleryCard key={it.id} title={it.title} subtitle={it.subtitle} />
        ))}
      </div>
    </section>
  );
}
