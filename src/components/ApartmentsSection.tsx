'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ApartmentsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const details = [
  { label: 'Carpet Area', value: '1,579 Sq Ft' },
  { label: 'Balcony', value: '452 Sq Ft' },
  { label: 'Bedrooms', value: '4' },
  { label: 'Bathrooms', value: '4' },
  { label: 'Floor', value: '25th' },
  { label: 'Tower', value: 'Tower D' },
];

export default function ApartmentsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.apt-fade', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`section-dark section-padding ${styles.section}`}
      ref={containerRef}
      id="apartments"
    >
      <div className="container">
        <div className={styles.header}>
          <div className={`${styles.tagWrapper} apt-fade`}>
            <span className={styles.featureTag}>[ OVERVIEW ]</span>
          </div>
          <h2 className={`${styles.title} apt-fade`}>
            Property Details
          </h2>
        </div>

        <div className={styles.cardsGrid}>
          {details.map((item, index) => (
            <div key={index} className={`${styles.detailCard} apt-fade`}>
              <h3 className={styles.cardValue}>{item.value}</h3>
              <p className={styles.cardLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
