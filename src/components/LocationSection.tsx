'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './LocationSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.loc-fade', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={`section-light section-padding ${styles.section}`} ref={containerRef}>
      <div className="container">
        
        <div className={styles.header}>
          <div className={`${styles.tagWrapper} loc-fade`}>
            <span className={styles.featureTag}>[ LOCATION ]</span>
          </div>
          <h2 className={`${styles.title} loc-fade`}>
            The Heart of<br/>
            The Dolomites
          </h2>
        </div>

        <div className={styles.contentWrapper}>
          
          {/* Left Side: Info */}
          <div className={`${styles.leftPanel} loc-fade`}>
            <p className={styles.description}>
              Horizon Grove is perfectly situated to offer the ultimate balance of secluded alpine tranquility and convenient access to world-class amenities. Located in the prestigious San Cassiano region, every destination is just a scenic drive away.
            </p>

            <div className={styles.distancesList}>
              <div className={styles.distanceItem}>
                <span className={styles.distValue}>5 min</span>
                <span className={styles.distLabel}>Downtown Como</span>
              </div>
              <div className={styles.distanceItem}>
                <span className={styles.distValue}>15 min</span>
                <span className={styles.distLabel}>Premium Ski Resorts</span>
              </div>
              <div className={styles.distanceItem}>
                <span className={styles.distValue}>45 min</span>
                <span className={styles.distLabel}>International Airport</span>
              </div>
              <div className={styles.distanceItem}>
                <span className={styles.distValue}>1 hr</span>
                <span className={styles.distLabel}>Milan City Center</span>
              </div>
            </div>

            <div className={styles.addressBox}>
              <h4 className={styles.addressTitle}>Visit Our Showroom</h4>
              <p className={styles.addressText}>
                Via Alessandro Volta 25,<br/>
                Como, Lombardy, Italy
              </p>
              <a href="https://maps.google.com/?q=Via+Alessandro+Volta+25,+Como,+Italy" target="_blank" rel="noopener noreferrer" className={styles.directionLink}>
                Get Directions <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className={`${styles.rightPanel} loc-fade`}>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://maps.google.com/maps?q=Via%20Alessandro%20Volta%2025%2C%20Como%2C%20Italy&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
