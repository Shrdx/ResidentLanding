'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FooterSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-fade', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={`section-dark ${styles.section}`} ref={containerRef}>
      <div className={styles.imageOverlay}></div>
      <div className="container">
        
        <div className={styles.headerWrapper}>
          <span className={`${styles.brackets} footer-fade`}>[</span>
          <h2 className={`${styles.title} footer-fade`}>
            READY TO DISCUSS<br/>
            <span className={styles.indent}>YOUR FUTURE HOME?</span>
          </h2>
          <span className={`${styles.brackets} footer-fade`}>]</span>
        </div>

        <div className={styles.formContainer}>
          <p className={`${styles.description} footer-fade`}>
            Leave your contact details, and our team will get in<br/>
            touch to help you choose the right apartment,<br/>
            answer your questions, and schedule a personal visit.
          </p>

          <form className={styles.contactForm}>
            <div className={`${styles.inputGroup} footer-fade`}>
              <input type="text" placeholder="YOUR NAME" className={styles.inputField} />
            </div>
            <div className={`${styles.inputGroup} footer-fade`}>
              <input type="email" placeholder="YOUR EMAIL" className={styles.inputField} />
            </div>
            <div className={`${styles.inputGroup} footer-fade`}>
              <input type="tel" placeholder="+380 (00) 000 00 00" className={styles.inputField} />
            </div>

            <div className={`${styles.checkboxGroup} footer-fade`}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkboxInput} />
                <span className={styles.customCheckbox}></span>
                <span className={styles.checkboxText}>
                  By clicking the button, you accept the privacy<br/>
                  policy and consent to the processing of personal data.
                </span>
              </label>
            </div>

            <div className="footer-fade">
              <button type="submit" className={styles.submitBtn}>
                Get A Free Consultation &gt;
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
