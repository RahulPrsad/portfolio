// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { scrollTo } from '../../utils/helpers';
import styles from './Navbar.module.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    scrollTo(id);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>{personalInfo.name}</div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} onClick={(e) => handleNav(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
      </button>
    </nav>
  );
}

export default Navbar;
