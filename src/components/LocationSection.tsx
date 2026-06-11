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
            Location
          </h2>
        </div>

        <div className={styles.contentWrapper}>
          
          {/* Left Side: Info */}
          <div className={`${styles.leftPanel} loc-fade`}>
            <div className={styles.description}>
              <p style={{marginBottom: '1rem'}}>Situated in the heart of Delhi, this upcoming project in Central Delhi falls right at the center of all the action. This township is surrounded by commercial hubs like Karol Bagh, Gaffar Market &amp; Connaught Place. We also have Shree Jeevan Hospital less than a kilometer away.</p>
              <p style={{marginBottom: '1rem'}}>Inter and intra city travel will also not be a problem when at The Amaryllis. New Delhi Railway Station is just 3kms away and Delhi Airport is just 14 kms away.</p>
              <p>Basically, The Amaryllis will ensure that you stay comfortably in the lap of luxury.</p>
            </div>

            <div className={styles.distancesList}>
              <div className={styles.distanceItem}>
                <span className={styles.distValue}>1 km</span>
                <span className={styles.distLabel}>Shree Jeevan Hospital</span>
              </div>
              <div className={styles.distanceItem}>
                <span className={styles.distValue}>3 kms</span>
                <span className={styles.distLabel}>New Delhi Railway Station</span>
              </div>
              <div className={styles.distanceItem}>
                <span className={styles.distValue}>5 kms</span>
                <span className={styles.distLabel}>Connaught Place</span>
              </div>
              <div className={styles.distanceItem}>
                <span className={styles.distValue}>14 kms</span>
                <span className={styles.distLabel}>Delhi Airport</span>
              </div>
            </div>

            <div className={styles.addressBox}>
              <h4 className={styles.addressTitle}>Visit Our Site</h4>
              <p className={styles.addressText}>
                1, New Rohtak Rd, Block 67,<br/>
                Karol Bagh, New Delhi, 110005
              </p>
              <a href="https://maps.google.com/?q=1,+New+Rohtak+Rd,+Block+67,+Karol+Bagh,+New+Delhi,+Delhi,+110005" target="_blank" rel="noopener noreferrer" className={styles.directionLink}>
                Get Directions <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className={`${styles.rightPanel} loc-fade`}>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://maps.google.com/maps?q=1,%20New%20Rohtak%20Rd,%20Block%2067,%20Karol%20Bagh,%20New%20Delhi,%20Delhi,%20110005&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
