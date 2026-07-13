'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';
import styles from './HeroSection.module.css';

const BACKGROUND_IMAGES = [
  '/AMARYLLIS_LS_04.jpg',
  '/slide-5-compressed.webp',
  '/the-amaryllis-banner-01.webp'
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [currentBg, setCurrentBg] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    // Using actual EmailJS credentials
    emailjs
      .sendForm('service_5nax27f', 'template_0nez08b', form.current, {
        publicKey: 'R8DQzj6IecXyxwngy',
      })
      .then(
        () => {
          setSubmitMessage('Thank you! We will get back to you soon.');
          setIsSubmitting(false);
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSubmitMessage('Something went wrong. Please try again.');
          setIsSubmitting(false);
        }
      );
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
        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <div className="stagger-text">
              <h1 className={styles.title}>
                <span className={styles.titleLine}>The View Everyone Admires</span>
                <span className={styles.titleLineHighlight}>The Home Only A Few Can Own</span>
              </h1>

              <p className={styles.locationSubheading}>
                Exclusive 4 BHK Residence at The Amaryllis<br />
                <span className={styles.subtext}>Tower D <span className={styles.metaDot}>·</span> 25th Floor <span className={styles.metaDot}>·</span> Club Facing Views</span>
              </p>

              <div className={styles.trustBar}>
                <div className={styles.trustItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a01830" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Premium Tower D Unit</span>
                </div>
                <div className={styles.trustItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a01830" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Central Delhi</span>
                </div>
                <div className={styles.trustItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a01830" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Private Site Visits</span>
                </div>
              </div>

              <div className={styles.btnGroup}>
                <button className={`${styles.primaryBtn}`}>
                  Schedule Site Visit
                </button>
                <button className={`${styles.secondaryBtn}`}>
                  Request Pricing
                </button>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={`${styles.leadFormCard} fade-in`}>
              <div className={styles.formHeader}>
                <div className={styles.phoneWrapper}>
                  <svg className={styles.phoneIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                  <span className={styles.phoneNumber}>+91 93136 38558</span>
                </div>
                <hr className={styles.formDivider} />
                <h3 className={styles.formTitle}>Get in touch with us!</h3>
              </div>
              <form ref={form} onSubmit={sendEmail} className={styles.leadForm}>
                <div className={styles.inputGroup}>
                  <input type="text" name="user_name" placeholder="Name" required className={styles.formInput} />
                </div>
                <div className={styles.inputGroup}>
                  <input type="email" name="user_email" placeholder="Email" required className={styles.formInput} />
                </div>
                <div className={styles.inputGroup}>
                  <select name="country" className={styles.formSelect} required defaultValue="">
                    <option value="" disabled>Select Country</option>
                    <option value="IN">India (+91)</option>
                    <option value="US">USA (+1)</option>
                    <option value="UK">UK (+44)</option>
                    <option value="AE">UAE (+971)</option>
                  </select>
                </div>
                <div className={styles.phoneInputGroup}>
                  <div className={styles.phonePrefixHolder}></div>
                  <input type="tel" name="user_phone" placeholder="Phone No." required className={styles.formInputPhone} />
                </div>
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Assured Callback in 5 Mins'}
                </button>
                {submitMessage && (
                  <p style={{ color: '#fff', fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center' }}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
}
