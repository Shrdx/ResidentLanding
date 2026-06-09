'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ApartmentsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const apartmentData = [
  {
    id: '1-bed',
    title: '1-Bedroom Suite',
    description: 'Perfect for young professionals or couples, offering a smart layout with abundant natural light and premium finishes.',
    sqft: '650 - 750',
    rooms: 3,
    baths: 1,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '2-bed',
    title: '2-Bedroom Residence',
    description: 'A spacious haven designed for modern living. Features a large open-plan living area and a master suite with panoramic mountain views.',
    sqft: '950 - 1,100',
    rooms: 4,
    baths: 2,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1e52d15461?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'penthouse',
    title: 'Signature Penthouse',
    description: 'The pinnacle of luxury. Expansive wrap-around terraces, private elevator access, and bespoke materials sourced from local artisans.',
    sqft: '2,200+',
    rooms: 6,
    baths: 3.5,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop',
  }
];

export default function ApartmentsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(apartmentData[0].id);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.apt-fade', {
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

  // Animate content change
  useEffect(() => {
    gsap.fromTo('.apt-content', 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, [activeId]);

  const activeData = apartmentData.find(apt => apt.id === activeId) || apartmentData[0];

  return (
    <section className={`section-dark section-padding ${styles.section}`} ref={containerRef}>
      <div className="container">
        
        <div className={styles.header}>
          <div className={`${styles.tagWrapper} apt-fade`}>
            <span className={styles.featureTag}>[ APARTMENTS ]</span>
          </div>
          <h2 className={`${styles.title} apt-fade`}>
            Find Your Perfect<br/>
            Space
          </h2>
        </div>

        <div className={styles.contentWrapper}>
          
          {/* Left Side: Tabs and Info */}
          <div className={`${styles.leftPanel} apt-fade`}>
            <div className={styles.tabs}>
              {apartmentData.map((apt) => (
                <button
                  key={apt.id}
                  className={`${styles.tabBtn} ${activeId === apt.id ? styles.activeTab : ''}`}
                  onClick={() => setActiveId(apt.id)}
                >
                  {apt.title}
                </button>
              ))}
            </div>

            <div className="apt-content">
              <h3 className={styles.aptTitle}>{activeData.title}</h3>
              <p className={styles.aptDescription}>{activeData.description}</p>
              
              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>{activeData.sqft}</span>
                  <span className={styles.specLabel}>SQ FT</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>{activeData.rooms}</span>
                  <span className={styles.specLabel}>ROOMS</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>{activeData.baths}</span>
                  <span className={styles.specLabel}>BATHS</span>
                </div>
              </div>

              <div className={styles.actions}>
                <button className={`pill-btn pill-btn-light ${styles.primaryBtn}`}>
                  View Floorplan
                </button>
                <a href="#offers" className={`pill-btn pill-btn-outline ${styles.secondaryBtn}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                  Inquire Now
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className={`${styles.rightPanel} apt-fade`}>
            <div className={styles.imageContainer}>
              <img 
                src={activeData.image} 
                alt={activeData.title} 
                className={`${styles.aptImage} apt-content`}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
