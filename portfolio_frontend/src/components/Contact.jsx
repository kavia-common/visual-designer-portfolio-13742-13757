import React, { useCallback } from 'react';
import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Contact.module.css';

// PUBLIC_INTERFACE
export default function Contact() {
  /** Contact section with description, social links and a simple form handler (alert) */
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    // Placeholder submit behavior mirroring assets/app.js
    // eslint-disable-next-line no-alert
    alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
  }, []);

  return (
    <section className={`${sectionStyles.section} ${styles.contactSection}`} id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className={`text-typo-32 ${styles.heading}`}>Lets work together</h2>
        <div className={styles.contentRow}>
          <div className={styles.info}>
            <div className="col" style={{ gap: 8 }}>
              <p className="text-typo-23">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
                {' '}
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
              </p>
            </div>
            <div className="socials" aria-label="Social links">
              <a className={styles.icon} href="#" aria-label="Discord">
                <span aria-hidden="true" className={styles.socialGlyph} style={{ width: 25, height: 28 }} />
              </a>
              <a className={styles.icon} href="#" aria-label="Facebook">
                <span aria-hidden="true" className={styles.socialGlyph} style={{ width: 27, height: 27 }} />
              </a>
              <a className={styles.icon} href="#" aria-label="Dribbble">
                <span aria-hidden="true" className={styles.socialGlyph} style={{ width: 30, height: 30 }} />
              </a>
              <a className={styles.icon} href="#" aria-label="Instagram">
                <span aria-hidden="true" className={styles.socialGlyph} style={{ width: 27, height: 27 }} />
              </a>
              <a className={styles.icon} href="#" aria-label="Behance">
                <span aria-hidden="true" className={styles.socialGlyph} style={{ width: 30, height: 19 }} />
              </a>
            </div>
          </div>
          <form className={styles.contactForm} onSubmit={onSubmit}>
            <label className={styles.inputField}>
              <span className="sr-only">Name</span>
              <input type="text" name="name" placeholder="Name" aria-label="Name" className={styles.input} />
            </label>
            <label className={styles.inputField}>
              <span className="sr-only">Email</span>
              <input type="email" name="email" placeholder="Email" aria-label="Email" className={styles.input} />
            </label>
            <button className="btn" type="submit"><span className="text-typo-31">Submit</span></button>
          </form>
        </div>
      </div>
    </section>
  );
}
