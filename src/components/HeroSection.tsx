'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stagger-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.fade-in', {
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.8
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.heroSection} ref={containerRef}>

      <div className={styles.mainContent}>
        <div className={styles.titleWrapper}>
          <div className={`${styles.titleMeta} stagger-text`}>
            <span>RESIDENCE</span>
            <span className={styles.metaDot}>·</span>
            <span>SAN CASSIANO</span>
            <span className={styles.metaDot}>·</span>
            <span>/ 2026</span>
          </div>
          <h1 className={`${styles.title} h1-mega stagger-text`}>
            <span className={styles.titleLine}>
              <span className={styles.charBold}>H</span>
              <span className={styles.charBold}>O</span>
              <span className={styles.charBold}>RIZON</span>
            </span>
            <span className={styles.titleLine}>GROVE</span>
          </h1>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <div className="stagger-text">
              <h2 className={styles.subtitle}>welcome to<br />horizon grove</h2>
              <p className={styles.description}>
                A unique space where modern design meets unparalleled convenience, offering a lifestyle beyond expectations.
              </p>
              <button className={styles.viewBtn}>
                View Apartments &gt;
              </button>
            </div>
          </div>
          <div className={`${styles.imageColumn} fade-in`}>
            <img
              src="/images/hero-building.webp"
              alt="Horizon Grove Building"
              className={styles.heroImage}
            />
          </div>
          <div className={`${styles.rightColumn} fade-in`}>
            <div className={styles.sideText}>
              SPACE THAT<br />INSPIRES
            </div>
            <div className={styles.sideText}>
              A HOME DESIGNED FOR<br />THOSE WHO SEEK MORE
            </div>
          </div>
        </div>
      </div>

      <footer className={`${styles.footer} fade-in`}>
        <div className={styles.footerLeft}>
          <p>From $6570/M2</p>
          <p className={styles.muted}>San Cassiano, Northern Italy</p>
        </div>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollArrows}>⌄⌄</span>
        </div>
        <div className={styles.footerRight}>
          <p className={styles.progressLabel}>CONSTRUCTION<br />PROGRESS</p>
          <div className={styles.progressBarWrapper}>
            <div className={styles.progressHeader}>
              <span>Completed</span>
              <span>65%</span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
