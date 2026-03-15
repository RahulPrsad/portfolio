// src/components/About/About.jsx
import { personalInfo, skills } from '../../data/portfolioData';
import { scrollTo } from '../../utils/helpers';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './About.module.css';

function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  return (
    <section className={styles.about} id="about">
      {/* ── Left: Bio ── */}
      <div
        ref={leftRef}
        className={`${styles.bio} ${leftVisible ? styles.revealed : ''}`}
      >
        <div className={styles.sectionLabel}>Who I Am</div>
        <h2 className={styles.heading}>
          Building with <span>purpose</span> and precision
        </h2>
        <p className={styles.body}>{personalInfo.bio1}</p>
        <p className={styles.body}>{personalInfo.bio2}</p>
        <button className={styles.btn} onClick={() => scrollTo('contact')}>
          Get In Touch
        </button>
      </div>

      {/* ── Right: Skills ── */}
      <div
        ref={rightRef}
        className={`${styles.skillsBlock} ${rightVisible ? styles.revealed : ''}`}
      >
        <div className={styles.sectionLabel}>My Skills</div>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div className={styles.skillItem} key={skill.name}>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillDesc}>{skill.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
