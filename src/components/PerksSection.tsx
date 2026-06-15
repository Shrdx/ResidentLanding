'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './PerksSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  { title: 'Double Height Entrance', image: '/double height.jpg', icon: 'M3 21V3h18v18M8 21v-4h8v4' },
  { title: 'High Speed Elevators', image: '/elevator.png', icon: 'M7 4l5-3 5 3m-10 16l5 3 5-3M12 4v16' },
  { title: 'Air Conditioning System', image: '/ac.png', icon: 'M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07L19.07 4.93' },
  { title: 'Earthquake Resistant', image: '/earthquake.png', icon: 'M2 12h4l3-9 5 18 3-9h5' },
  { title: 'Bespoke Homes', image: '/apartment.png', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
  { title: 'Flexible Room Sizes', image: '/apartment2.png', icon: 'M14 4h6v6m-6-6l6 6M4 14v6h6m-6 0l6-6' },
  { title: 'Three Tier Security', image: '/image.png', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
];

export default function PerksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [photoIdx, setPhotoIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.perks-fade', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIdx((p) => (p + 1) % FEATURES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`section-padding ${styles.section}`}
      ref={containerRef}
      id="features"
    >
      <div className={styles.bgBlock}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          
          {/* Left: Auto Sliding Image */}
          <div className={`${styles.imageWrapper} perks-fade`}>
            {FEATURES.map((feature, i) => (
              <img 
                key={i}
                src={feature.image} 
                alt={feature.title} 
                className={`${styles.mainImage} ${i === photoIdx ? styles.activePhoto : styles.hiddenPhoto}`} 
              />
            ))}
          </div>

          {/* Right: Content */}
          <div className={styles.textContent}>
            <span className={`${styles.eyebrow} perks-fade`}>WORLD-CLASS AMENITIES</span>
            <h2 className={`${styles.title} perks-fade`}>What Makes This Residence Exceptional</h2>
            <p className={`${styles.description} perks-fade`}>
              Abode is more than just the house that the Unity Group offers. At The Amaryllis Phase 2, the experience isn't complete without the harmonizing amenities that make living truly gratifying. Every detail is curated for an elevated lifestyle.
            </p>

            <h4 className={`${styles.subheading} perks-fade`}>Features & Highlights</h4>
            
            <div className={`${styles.sliderContainer} perks-fade`}>
              <button className={styles.navBtn} onClick={scrollLeft} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <div className={styles.cardsScroll} ref={scrollRef}>
                {FEATURES.map((item, index) => (
                  <div key={index} className={styles.card}>
                    <div className={styles.iconWrapper}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#948d7c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={item.icon}></path>
                      </svg>
                    </div>
                    <span className={styles.cardText}>{item.title}</span>
                  </div>
                ))}
              </div>

              <button className={styles.navBtn} onClick={scrollRight} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
