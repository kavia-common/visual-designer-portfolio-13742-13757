import React from 'react';
import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Testimonials.module.css';

function Stars() {
  return (
    <div className={styles.stars} aria-label="5 out of 5 stars">
      <span className={styles.star} aria-hidden="true"></span>
      <span className={styles.star} aria-hidden="true"></span>
      <span className={styles.star} aria-hidden="true"></span>
      <span className={styles.star} aria-hidden="true"></span>
      <span className={styles.star} aria-hidden="true"></span>
    </div>
  );
}

function TestimonialCard({ quote, name, company }) {
  return (
    <article className={styles.testimonialCard}>
      <p className="text-typo-22">{quote}</p>
      <div className={styles.client}>
        <div className={styles.avatar} aria-hidden="true"></div>
        <div className="col" style={{ gap: 8 }}>
          <Stars />
          <div className="col" style={{ gap: 0 }}>
            <div className="text-typo-22">{name}</div>
            <div className="text-typo-23">{company}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

// PUBLIC_INTERFACE
export default function Testimonials() {
  /** Testimonial section rendering 6 cards */
  const quote = 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com';
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    quote,
    name: 'Gemma Nolen',
    company: 'Google',
  }));
  return (
    <section className={`${sectionStyles.section} ${styles.testimonialSection}`} aria-labelledby="testimonial-heading">
      <div className="container" style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2 id="testimonial-heading" className="text-typo-21">Testimonial</h2>
      </div>
      <div className={`${sectionStyles.cards} row container`}>
        {items.map((it) => (
          <TestimonialCard key={it.id} quote={it.quote} name={it.name} company={it.company} />
        ))}
      </div>
    </section>
  );
}
