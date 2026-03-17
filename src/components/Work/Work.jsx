// src/components/Work/Work.jsx
import { projects } from '../../data/portfolioData';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './Work.module.css';

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.revealed : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardTop}>
        <div className={styles.cardNum}>{project.id} /</div>
        <span className={styles.cardDate}>{project.date}</span>
      </div>

      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.desc}</p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      {/* GitHub link button */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubBtn}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        View on GitHub
      </a>
    </div>
  );
}

function Work() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className={styles.work} id="work">
      <div
        ref={headerRef}
        className={`${styles.header} ${headerVisible ? styles.revealed : ''}`}
      >
        <div className={styles.sectionLabel}>Selected Work</div>
        <h2 className={styles.heading}>
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Work;