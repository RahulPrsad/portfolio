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
      <div className={styles.cardNum}>{project.id} /</div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.desc}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
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
