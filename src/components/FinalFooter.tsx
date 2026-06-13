'use client';
import { useEffect, useRef, FormEvent } from 'react';
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

  const handleWhatsAppSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    
    const message = `Hi, I'm interested in The Amaryllis.\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`;
    const whatsappUrl = `https://wa.me/919313638558?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className={styles.footer} ref={containerRef}>
      <div className="container">

        <div className={`${styles.bigTitleWrapper} final-fade`}>
          <h1 className={styles.bigTitle}>THE AMARYLLIS</h1>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.gridContainer}>

          <div className={`${styles.contactFormColumn} final-fade`}>
            <h3 className={styles.columnHeader}>Get in Touch</h3>
            <p className={styles.newsletterSubtitle}>Leave your details and we'll contact you.</p>
            <form className={styles.contactForm} onSubmit={handleWhatsAppSubmit}>
              <input type="text" name="name" placeholder="Your Name" required className={styles.formInput} />
              <input type="email" name="email" placeholder="Your Email" required className={styles.formInput} />
              <input type="tel" name="phone" placeholder="Phone Number" required className={styles.formInput} />
              <button type="submit" className={styles.submitBtn}>
                Send via WhatsApp <span className={styles.submitArrow}>↗</span>
              </button>
            </form>
          </div>

          <div className={`${styles.menuColumn} final-fade`}>
            <h3 className={styles.columnHeader}>Menu</h3>
            <div className={styles.menuGrid}>
              <ul className={styles.menuList}>
                <li><a href="#apartments">Apartment</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#infrastructure">Infrastructure</a></li>
              </ul>
            </div>
          </div>

          <div className={`${styles.addressColumn} final-fade`}>
            <h3 className={styles.columnHeader}>Visit Us</h3>
            <a 
              href="https://share.google/4o5I56B9sGhvVfrqc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.textBody} ${styles.addressLink}`}
            >
              1, New Rohtak Rd, Block 67,<br />
              Karol Bagh, New Delhi, 110005
            </a>
          </div>

          <div className={`${styles.contactColumn} final-fade`}>
            <h3 className={styles.columnHeader}>Our Contacts</h3>
            <p className={styles.textBody}>info@sabproperties.in</p>
            <p className={styles.textBody}>+91 9313638558</p>

          </div>

        </div>

        <div className={`${styles.copyrightRow} final-fade`}>
          <p>Copyright © www.amaryllisdelhi.com 2014 - 2026 | All Rights Reserved | Emaar Serenity Hills | DLF One Midtown | Disclaimer</p>
          <p>This is not the official website. And it belongs to Authorized Channel Partner of Unity Group.</p>
        </div>

      </div>
    </footer>
  );
}
