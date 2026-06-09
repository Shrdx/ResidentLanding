'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './PerksSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function PerksSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.perk-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });

      gsap.to('.perk-orb', {
        scale: 1.2,
        opacity: 0.6,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={`section-light section-padding ${styles.section}`} ref={containerRef}>
      <div className="container">

        <div className={styles.header}>
          <p className={styles.tagline}>
            SMART, SECURE, AND<br />
            SUSTAINABLE—DESIGNED<br />
            TO FEEL LIKE HOME.
          </p>
          <div className={styles.titleWrapper}>
            <div className={styles.featureTag}>[ FEATURES ]</div>
            <div className={styles.bracketsWrapper}>
              <span className={styles.brackets}>[</span>
              <h2 className={styles.title}>
                THE PERKS<br />
                OF LIVING <span className={styles.glowText}><span className={`glow-orb perk-orb ${styles.orbInline}`}></span>in harmony<br /><span className={styles.thinText}>with nature</span></span>
              </h2>
              <span className={styles.brackets}>]</span>
            </div>
          </div>
        </div>

        <div className={styles.contentGrid}>

          <div className={styles.leftList}>
            <div className={`${styles.listItem} perk-item`}>
              <span className={styles.listIndex}>[ 01 ]</span>
              <h3 className={styles.listTitle}>VARIETY OF LAYOUTS</h3>
            </div>
            <div className={`${styles.listItem} perk-item`}>
              <span className={styles.listIndex}>[ 02 ]</span>
              <h3 className={styles.listTitle}>STYLISH INTERIOR DESIGN</h3>
            </div>
            <div className={`${styles.listItem} perk-item`}>
              <span className={styles.listIndex}>[ 03 ]</span>
              <h3 className={styles.listTitle}>BALANCE & SERENITY</h3>
            </div>
            <div className={`${styles.listItem} perk-item`}>
              <span className={styles.listIndex}>[ 04 ]</span>
              <h3 className={styles.listTitle}>FLEXIBLE PURCHASE TERMS</h3>
            </div>
          </div>

          <div className={styles.centerImageWrapper}>
            <div className={styles.circleImageContainer}>
              <img src="/images/house-circle.webp" alt="House Circle" className={styles.circleImage} />
            </div>
          </div>

          <div className={styles.rightDescriptions}>
            <div className={`${styles.descItem} perk-item`}>
              <p className={styles.descText}>
                Individual payment plans, clear agreements,<br />
                and full legal support make the buying<br />
                process seamless and stress-free
              </p>
              <button className={styles.arrowCircleBtn}>↗</button>
            </div>
            <div className={`${styles.descItem} perk-item`}>
              <p className={styles.descText}>
                Contemporary design, high-quality finishes,<br />
                and customization options make your home<br />
                a true reflection of you.
              </p>
              <button className={styles.arrowCircleBtn}>↗</button>
            </div>
            <div className={`${styles.descItem} perk-item`}>
              <p className={styles.descText}>
                A calm atmosphere ideal for physical and<br />
                mental well-being, with space for outdoor<br />
                activities, relaxation, and slow living.
              </p>
              <button className={styles.arrowCircleBtn}>↗</button>
            </div>
            <div className={`${styles.descItem} perk-item`}>
              <p className={styles.descText}>
                Personalized installment plans, transparent<br />
                agreements, and comprehensive legal support<br />
                ensure a seamless and confident experience
              </p>
              <button className={styles.arrowCircleBtn}>↗</button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
