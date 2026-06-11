'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './PerksSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    id: '01',
    title: 'DOUBLE HEIGHT ENTRANCE',
    description: `There is nothing more dramatic than walking into a house with soaring ceilings, huge windows, and breathtaking vistas. At The Amaryllis, enter through a double-height entrance that opens up into a room that's flooded with wonderful natural light thanks to the huge windows that are much higher than the standard nine-foot.`,
    image: '/images/corridor.webp',
  },
  {
    id: '02',
    title: 'HIGH SPEED ELEVATORS',
    description: `The Amaryllis transforms how you travel in this opulent residential development, thanks to its cutting-edge, high-speed elevators. It uses a web-based monitoring system that ensures fewer stops & less crowding, making it peaceful to get to your apartment.`,
    image: '/images/mid-building.webp',
  },
  {
    id: '03',
    title: 'AIR CONDITIONING SYSTEM',
    description: `The Amaryllis' HVAC system maintains a constant temperature throughout your apartment. This sophisticated air conditioning system serves dual function of dispersing heat and cool air during the winter and summer, respectively. No matter the season, always stay cozy at The Amaryllis.`,
    image: '/images/store-small.webp',
  },
  {
    id: '04',
    title: 'EARTHQUAKE RESISTANT',
    description: `In response to increased seismic awareness across the globe, The Amaryllis has made significant efforts to reduce the loss that may happen during an earthquake. This property guarantees style, comfort, and utmost safety beginning with the connection of structural elements, reinforced masonry, building spacing, and doing everything as per government regulations.`,
    image: '/images/carousel-building.webp',
  },
];

export default function PerksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.perks-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
      });
      gsap.from('.perks-panel', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 65%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: 'power2.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Animate panel swap
  const handleTabClick = (i: number) => {
    if (i === activeIdx) return;
    const el = panelRef.current;
    if (!el) { setActiveIdx(i); return; }
    gsap.to(el, {
      opacity: 0,
      y: 12,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => {
        setActiveIdx(i);
        gsap.fromTo(
          el,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
        );
      },
    });
  };

  const feature = FEATURES[activeIdx];

  return (
    <section
      className={`section-light section-padding ${styles.section}`}
      ref={containerRef}
      id="features"
    >
      <div className="container">

        {/* ─── Header ─── */}
        <div className={`${styles.header} perks-header`}>
          <div className={styles.headerLeft}>
            <span className={styles.featureTag}>[ FEATURES ]</span>
            <h2 className={styles.title}>
              Apartment Features<br />
              <span className={styles.titleThin}>&amp; Specifications</span>
            </h2>
          </div>
          <p className={styles.headerRight}>
            SMART, SECURE, AND<br />
            SUSTAINABLE — DESIGNED<br />
            TO FEEL LIKE HOME.
          </p>
        </div>

        {/* ─── Tab Nav ─── */}
        <div className={styles.tabNav}>
          {FEATURES.map((f, i) => (
            <button
              key={f.id}
              className={`${styles.tabItem} ${i === activeIdx ? styles.tabActive : ''}`}
              onClick={() => handleTabClick(i)}
            >
              <span className={styles.tabIndex}>{f.id}</span>
              <span className={styles.tabLabel}>{f.title}</span>
            </button>
          ))}
        </div>

        {/* ─── Single Feature Panel ─── */}
        <div className={`${styles.featurePanel} perks-panel`} ref={panelRef}>
          {/* Text */}
          <div className={styles.featureText}>
            <div className={styles.featureNum}>{feature.id}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDesc}>{feature.description}</p>
          </div>

          {/* Image */}
          <div className={styles.featureImageWrap}>
            <img
              src={feature.image}
              alt={feature.title}
              className={styles.featureImage}
              key={feature.id}
            />
            <div className={styles.featureImageOverlay} />
          </div>
        </div>

      </div>
    </section>
  );
}
