'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import styles from './FooterSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

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

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_5txbc6n',
          'template_q98ghre',
          formRef.current,
          'i6zEVyqlChZYgPp3M'
        )
        .then(
          () => {
            setStatusMessage('Thank you! Your details have been sent successfully.');
            formRef.current?.reset();
            setIsSubmitting(false);
          },
          (error) => {
            console.error('EmailJS Error:', error);
            setStatusMessage('Oops! Something went wrong. Please try again.');
            setIsSubmitting(false);
          }
        );
    }
  };

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

          <form className={styles.contactForm} ref={formRef} onSubmit={sendEmail}>
            <div className={`${styles.inputGroup} footer-fade`}>
              <input type="text" name="user_name" placeholder="YOUR NAME" required className={styles.inputField} />
            </div>
            <div className={`${styles.inputGroup} footer-fade`}>
              <input type="email" name="user_email" placeholder="YOUR EMAIL" required className={styles.inputField} />
            </div>
            <div className={`${styles.inputGroup} footer-fade`}>
              <input type="tel" name="user_phone" placeholder="+91 XXXXX XXXXX" required className={styles.inputField} />
            </div>

            <div className={`${styles.checkboxGroup} footer-fade`}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" required className={styles.checkboxInput} />
                <span className={styles.customCheckbox}></span>
                <span className={styles.checkboxText}>
                  By clicking the button, you accept the privacy<br/>
                  policy and consent to the processing of personal data.
                </span>
              </label>
            </div>

            <div className="footer-fade">
              <button type="submit" disabled={isSubmitting} className={styles.submitBtn} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? 'SENDING...' : 'GET A FREE CONSULTATION >'}
              </button>
            </div>
            {statusMessage && (
              <p className="footer-fade" style={{ marginTop: '1.5rem', color: '#ff9933', fontSize: '0.9rem', fontWeight: 300 }}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
