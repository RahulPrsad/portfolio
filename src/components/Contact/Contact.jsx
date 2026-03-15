// src/components/Contact/Contact.jsx
import { personalInfo, socials } from '../../data/portfolioData';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './Contact.module.css';

function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className={`${styles.contact} ${isVisible ? styles.revealed : ''}`}
      ref={ref}
      id="contact"
    >
      <div className={styles.sectionLabel}>Say Hello</div>

      <h2 className={styles.heading}>
        Let's Work<br /><em>Together</em>
      </h2>

      <p className={styles.sub}>
        Have a project in mind? I'd love to hear about it.
        Let's create something remarkable together.
      </p>

      <a href={`mailto:${personalInfo.email}`} className={styles.email}>
        {personalInfo.email}
      </a>

      <div className={styles.socials}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
