'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ApartmentsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const PHOTOS = ['/apartment.png', '/double height.jpg', '/apartment2.png'];

const apartment = {
  title: '4 BHK Luxury Residence',
  description:
    'An expansive living space crafted for grand lifestyles. Featuring a sprawling living area, private balconies with panoramic city views, premium finishes, and intelligent spatial planning throughout.',
  carpetArea: '1,579',
  balconyArea: '452',
  bedrooms: 4,
  baths: 4,
  floorPlan: '/image4.png',
};

export default function ApartmentsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [showPlan, setShowPlan] = useState(false);

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
        ease: 'power2.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (showPlan) return;
    const interval = setInterval(() => {
      setPhotoIdx((p) => (p + 1) % PHOTOS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [showPlan]);

  const prevPhoto = () =>
    setPhotoIdx((p) => (p - 1 + PHOTOS.length) % PHOTOS.length);
  const nextPhoto = () =>
    setPhotoIdx((p) => (p + 1) % PHOTOS.length);

  return (
    <section
      className={`section-dark section-padding ${styles.section}`}
      ref={containerRef}
      id="apartments"
    >
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={`${styles.tagWrapper} apt-fade`}>
            <span className={styles.featureTag}>[ APARTMENTS ]</span>
          </div>
          <h2 className={`${styles.title} apt-fade`}>
            Find Your Perfect<br />Space
          </h2>
        </div>

        <div className={styles.contentWrapper}>
          {/* ─── LEFT: Info ─── */}
          <div className={`${styles.leftPanel} apt-fade`}>
            <h3 className={styles.aptTitle}>{apartment.title}</h3>
            <p className={styles.aptDescription}>{apartment.description}</p>

            {/* Specs */}
            <div className={styles.specsGrid}>
              <div className={styles.specItem}>
                <span className={styles.specValue}>{apartment.carpetArea}</span>
                <span className={styles.specLabel}>CARPET SQ FT</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specValue}>{apartment.balconyArea}</span>
                <span className={styles.specLabel}>BALCONY SQ FT</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specValue}>{apartment.bedrooms}</span>
                <span className={styles.specLabel}>BEDROOMS</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specValue}>{apartment.baths}</span>
                <span className={styles.specLabel}>BATHS</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specValue}>25th</span>
                <span className={styles.specLabel}>FLOOR</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specValue}>Tower D</span>
                <span className={styles.specLabel}>TOWER</span>
              </div>
            </div>

            {/* Note */}
            <p className={styles.planNote}>
              1 Sq. Ft. = 0.0929 Sq. Mt. &nbsp;·&nbsp; All artistic layout plans
              may undergo revision as decided by the company.
            </p>

            {/* Actions */}
            <div className={styles.actions}>
              <button
                className={`${styles.primaryBtn}`}
                onClick={() => setShowPlan((v) => !v)}
              >
                {showPlan ? 'Hide Floorplan' : 'View Floorplan'}
              </button>
              <a
                href="#offers"
                className={styles.secondaryBtn}
              >
                Inquire Now
              </a>
            </div>
          </div>

          {/* ─── RIGHT: Photo slider + Floor plan ─── */}
          <div className={`${styles.rightPanel} apt-fade`}>
            {!showPlan ? (
              <div className={styles.sliderWrapper}>
                {/* Photo */}
                <div className={styles.imageContainer}>
                  {PHOTOS.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Apartment view ${i + 1}`}
                      className={`${styles.aptImage} ${i === photoIdx ? styles.activePhoto : styles.hiddenPhoto}`}
                    />
                  ))}
                  <div className={styles.imageOverlay} />
                </div>

                {/* Slider Controls */}
                <div className={styles.sliderControls}>
                  <button
                    className={styles.sliderBtn}
                    onClick={prevPhoto}
                    aria-label="Previous photo"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>



                  <button
                    className={styles.sliderBtn}
                    onClick={nextPhoto}
                    aria-label="Next photo"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>

                {/* Counter */}
                <span className={styles.photoCounter}>
                  {String(photoIdx + 1).padStart(2, '0')} / {String(PHOTOS.length).padStart(2, '0')}
                </span>
              </div>
            ) : (
              /* Floor Plan */
              <div className={styles.floorPlanWrapper}>
                <img
                  src={apartment.floorPlan}
                  alt="4 BHK Floor Plan"
                  className={styles.floorPlanImg}
                />
                <p className={styles.planCaption}>4 BHK – Floor Layout Plan</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
