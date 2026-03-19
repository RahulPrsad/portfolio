// src/components/Hero/Hero.jsx
import { personalInfo, stats } from '../../data/portfolioData';
import { scrollTo } from '../../utils/helpers';
import profilePhoto from '../../assets/photo_b64';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      {/* ── Left: Text ── */}
      <div className={styles.text}>
        {/* <div className={styles.tag}>Available for opportunities</div> */}

        <h1 className={styles.name}>
          Creative<br />
          <em>Developer</em><br />
          &amp; Designer
        </h1>

        <p className={styles.role}>{personalInfo.role}</p>

        <p className={styles.desc}>
          Crafting digital experiences that blend aesthetics with function
          Passionate about building products that leave a lasting impression.
        </p>

        <div className={styles.cta}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('work')}>
            View My Work
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('contact')}>
            Let's Talk →
          </button>
        </div>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: Photo ── */}
      <div className={styles.imageSide}>
        <img className={styles.photo} src={profilePhoto} alt="Profile" />
        <div className={styles.floatLabel}>
          <div className={styles.floatTitle}>{personalInfo.availability}</div>
          <div className={styles.floatSub}>{personalInfo.availabilitySub}</div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollLine}></span>
        Scroll Down
      </div>
    </section>
  );
}

export default Hero;
