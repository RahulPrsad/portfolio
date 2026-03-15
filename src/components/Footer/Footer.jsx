// src/components/Footer/Footer.jsx
import { personalInfo } from '../../data/portfolioData';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span>© {year} {personalInfo.name}. All rights reserved.</span>
      <span>Designed &amp; Built with ♥</span>
    </footer>
  );
}

export default Footer;
