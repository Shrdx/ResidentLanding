'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './HeroSection.module.css';

const BACKGROUND_IMAGES = [
  '/AMARYLLIS_LS_04.jpg',
  '/slide-5-compressed.webp',
  '/the-amaryllis-banner-01.webp'
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const nextSlide = () => {
    setCurrentBg((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentBg((prev) => (prev - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length);
  };

  return (
    <section className={styles.heroSection} ref={containerRef}>
      {BACKGROUND_IMAGES.map((img, index) => (
        <div
          key={img}
          className={`${styles.bgImage} ${index === currentBg ? styles.activeBg : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className={styles.bgOverlay} />

      <div className={styles.mainContent}>
        <div className={styles.titleWrapper}>
          <div className={`${styles.titleMeta} stagger-text`}>
            <span>RESIDENCE</span>
            <span className={styles.metaDot}>·</span>
            <span>CENTRAL DELHI</span>
          </div>
          <h1 className={`${styles.title} stagger-text`}>
            <span className={styles.titleLine}>
              <span className={styles.charBold}>THE</span>
            </span>
            <span className={styles.titleLine}>AMARYLLIS</span>
          </h1>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <div className="stagger-text">
              <h2 className={styles.subtitle}>welcome to<br />the amaryllis</h2>
              <p className={styles.description}>
                A unique space where modern design meets unparalleled convenience, offering a lifestyle beyond expectations.
              </p>
              <div className={styles.btnGroup}>
                <button className={`${styles.viewBtn} ${styles.primaryBtn}`}>
                  Book a site visit
                </button>
              </div>
            </div>
          </div>
          {/* Right column "SPACE THAT INSPIRES" removed as requested */}
        </div>
      </div>

      <div className={styles.carouselControls}>
        <button type="button" className={styles.controlBtn} onClick={prevSlide} aria-label="Previous image">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button type="button" className={styles.controlBtn} onClick={nextSlide} aria-label="Next image">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
