'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './InfrastructureSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const infrastructureData = [
  {
    id: 1,
    title: 'PRIVATE CLUBHOUSE\nAT YOUR DOORSTEP',
    distance: 'Exclusive',
    desc: 'Enjoy effortless access to the residents\' clubhouse located directly opposite Tower D, featuring premium recreational and wellness facilities just a short walk away.',
    largeImg: '/club.jpg',
    smallImg: '/club2.webp'
  },
  {
    id: 2,
    title: 'BREAKTAKING\n25TH FLOOR VISTAS',
    distance: 'Elevated',
    desc: 'Experience panoramic views of the city skyline, lush landscaped gardens, and vibrant surroundings from the comfort of your high-rise residence.',
    largeImg: '/25th-floor.webp',
    smallImg: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'FITNESS AND WELLNESS\nWITHIN REACH',
    distance: 'Wellness',
    desc: 'Stay active with easy access to the fitness center, swimming pool, indoor sports facilities, and wellness spaces located moments from your home.',
    largeImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
    smallImg: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'LUXURY LEISURE\nEVERY DAY',
    distance: 'Resort-Style',
    desc: 'From social lounges and entertainment areas to outdoor relaxation spaces, enjoy a resort-inspired lifestyle without leaving the community.',
    largeImg: '/pool.jpg',
    smallImg: '/pool2.jpg'
  }
];

export default function InfrastructureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % infrastructureData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + infrastructureData.length) % infrastructureData.length);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.infra-fade', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      });
      
      gsap.to('.infra-orb', {
        scale: 1.3,
        opacity: 0.7,
        duration: 3.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Simple animation when content changes
  useEffect(() => {
    gsap.fromTo('.slide-content', 
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, [activeIndex]);

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % infrastructureData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const activeData = infrastructureData[activeIndex];

  return (
    <section className={`section-light section-padding ${styles.section}`} ref={containerRef}>
      <div className="container">
        
        <div className={styles.header}>
          <div className={styles.tagWrapper}>
            <span className={styles.featureTag}>[ INFRASTRUCTURE ]</span>
          </div>
          <h2 className={styles.title}>
            <span className={`glow-orb infra-orb ${styles.orbPos}`}></span>
            Everything You Need<br/>
            Just Steps Away
          </h2>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {infrastructureData.map((item, index) => (
              <div 
                key={item.id} 
                className={`${styles.trackLine} ${index === activeIndex ? styles.trackLineActive : ''}`}
                onClick={() => setActiveIndex(index)}
                style={{ cursor: 'pointer' }}
              ></div>
            ))}
          </div>
          
          <div className={`${styles.mainContent} infra-fade slide-content`}>
            
            <div className={styles.leftContent}>
              <div className={styles.pagination}>/ 0{activeData.id}</div>
              
              <div className={styles.navigation}>
                <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous slide">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button className={styles.navBtn} onClick={nextSlide} aria-label="Next slide">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>

              <div className={styles.infoBox}>
                <div className={styles.infoHeader}>
                  <h3 className={styles.infoTitle}>
                    {activeData.title.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
                  </h3>
                  <span className={styles.distance}>{activeData.distance}</span>
                </div>
                <p className={styles.infoDesc}>
                  {activeData.desc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
                </p>
                
                <div className={styles.bottomLeftAction}>
                  <img src={activeData.smallImg} alt={activeData.title.replace('\n', ' ')} className={styles.smallImage} />
                </div>
              </div>
            </div>

            <div className={styles.rightContent}>
              <img src={activeData.largeImg} alt={activeData.title.replace('\n', ' ')} className={styles.largeImage} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
