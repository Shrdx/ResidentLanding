'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FloorPlanSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function FloorPlanSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fp-fade', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} id="floorplan">
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} fp-fade`}>
          <span className={styles.eyebrow}>Floor Plan</span>
          <h2 className={styles.title}>Thoughtfully Designed Space</h2>
          <p className={styles.subtitle}>
            Every square foot crafted for comfort, luxury, and efficient living in Tower D.
          </p>
        </div>

        {/* Layout: image + info */}
        <div className={styles.layout}>
          {/* Floor plan image */}
          <div className={`${styles.imageWrapper} fp-fade`}>
            <span className={styles.imageTag}>Tower D · 25th Floor</span>
            <img
              src="/floorplan_upscaled.png"
              alt="4 BHK Floor Plan - The Amaryllis Tower D"
              className={styles.floorImage}
            />
          </div>

          {/* Info panel */}
          <div className={styles.infoPanel}>
            {/* Unit card */}
            <div className={`${styles.infoCard} fp-fade`}>
              <p className={styles.unitLabel}>Configuration</p>
              <p className={styles.unitType}>4 BHK</p>
              <p className={styles.unitDetail}>The Amaryllis · Tower D · 25th Floor · Club Facing</p>
            </div>

            {/* Area stats */}
            <div className={`${styles.areaStats} fp-fade`}>
              <div className={styles.areaStat}>
                <p className={styles.areaLabel}>Super Area</p>
                <p className={styles.areaValue}>
                  3740 <span className={styles.areaUnit}>Sq. Ft.</span>
                </p>
              </div>
              <div className={styles.areaStat}>
                <p className={styles.areaLabel}>Carpet Area</p>
                <p className={styles.areaValue}>
                  2239 <span className={styles.areaUnit}>Sq. Ft.</span>
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className={`${styles.ctaBlock} fp-fade`}>
              <p className={styles.ctaText}>
                Interested in this unit? Request the detailed floor plan and pricing directly to your inbox.
              </p>
              <a
                href="https://wa.me/919313638558"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                Get Floor Plan Details
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
