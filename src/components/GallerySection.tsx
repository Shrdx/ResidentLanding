'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './GallerySection.module.css';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  { src: '/AMARYLLIS_LS_04.jpg', title: 'Exterior Tower View' },
  { src: '/apartment.png', title: 'Living Room' },
  { src: '/apartment2.png', title: 'Master Bedroom' },
  { src: '/25th-floor.webp', title: 'Balcony View' },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-fade', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });

      gsap.from('.gallery-img', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [lightboxIndex]);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % IMAGES.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + IMAGES.length) % IMAGES.length);
    }
  };

  return (
    <section className={`section-padding ${styles.section}`} ref={sectionRef} id="gallery">
      <div className="container">
        <div className={styles.header}>
          <span className={`${styles.subtitle} gallery-fade`}>EXPERIENCE LUXURY</span>
          <h2 className={`${styles.title} gallery-fade`}>Step Inside Your Future Home</h2>
          <p className={`${styles.description} gallery-fade`}>
            Explore our meticulously designed spaces where every detail reflects premium living, modern elegance, and unparalleled comfort.
          </p>
        </div>
        <div className={styles.grid}>
          {IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className={`gallery-img ${styles.imageCard}`}
              onClick={() => openLightbox(idx)}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.imageTitle}>{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox}>&times;</button>
          
          <button className={`${styles.navBtn} ${styles.navLeft}`} onClick={prevImage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <img 
            src={IMAGES[lightboxIndex].src} 
            alt={IMAGES[lightboxIndex].title} 
            className={styles.lightboxImg} 
            onClick={(e) => e.stopPropagation()}
          />
          <h3 className={styles.lightboxTitle}>{IMAGES[lightboxIndex].title}</h3>

          <button className={`${styles.navBtn} ${styles.navRight}`} onClick={nextImage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
