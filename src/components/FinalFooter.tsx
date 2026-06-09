'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FinalFooter.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function FinalFooter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.final-fade', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer className={styles.footer} ref={containerRef}>
      <div className="container">

        <div className={`${styles.bigTitleWrapper} final-fade`}>
          <h1 className={styles.bigTitle}>HORIZON</h1>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.gridContainer}>

          <div className={`${styles.newsletterColumn} final-fade`}>
            <h2 className={styles.newsletterTitle}>
              Let's Keep in Touch – Be<br />
              the First to Know What's<br />
              Coming
            </h2>
            <p className={styles.newsletterSubtitle}>Sign up for our newsletter ( No spam)</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Email" className={styles.emailInput} />
              <button type="submit" className={styles.submitArrow}>↗</button>
            </form>
          </div>

          <div className={`${styles.menuColumn} final-fade`}>
            <h3 className={styles.columnHeader}>Menu</h3>
            <div className={styles.menuGrid}>
              <ul className={styles.menuList}>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#infrastructure">Infrastructure</a></li>
                <li><a href="#apartments">Apartments</a></li>
              </ul>
            </div>
          </div>

          <div className={`${styles.addressColumn} final-fade`}>
            <h3 className={styles.columnHeader}>Visit Us</h3>
            <p className={styles.textBody}>
              Via Alessandro Volta 25,<br />
              Como, Lombardy, Italy
            </p>
          </div>

          <div className={`${styles.contactColumn} final-fade`}>
            <h3 className={styles.columnHeader}>Our Contacts</h3>
            <p className={styles.textBody}>Info@horizongrove.com</p>
            <p className={styles.textBody}>+91XXXXXXXXXX</p>
            <div className={styles.socialIcons}>
              <span className={styles.icon}>f</span>
              <span className={styles.icon}>ig</span>
              <span className={styles.icon}>yt</span>
            </div>
          </div>

        </div>

        <div className={`${styles.copyrightRow} final-fade`}>
          <p>© 2026 Horizon Grove. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
