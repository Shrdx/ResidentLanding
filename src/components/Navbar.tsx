'use client';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <img src="/logo-golden.png" alt="The Amaryllis Logo" className={styles.logoImg} />
        </a>
        <nav className={styles.nav}>
          <a href="#apartments">APARTMENT</a>
          <a href="#features">FEATURES</a>
          <a href="#infrastructure">INFRASTRUCTURE</a>
          <a href="#offers" className={styles.consultationBtn}>
            Get A Consultation <span className={styles.arrow}>↗</span>
          </a>
          <button className={styles.heartBtn}>♡</button>
        </nav>
      </div>
    </header>
  );
}
