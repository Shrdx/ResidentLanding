'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SpaceInspiresSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function SpaceInspiresSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-up', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      gsap.to('.orb', {
        scale: 1.5,
        opacity: 0.8,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={`section-dark section-padding ${styles.section}`} ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <div className={`${styles.brackets} fade-up`}>[</div>
          <div className={`${styles.titleWrapper} fade-up`}>
            <div className={`glow-orb orb ${styles.orbPos}`}></div>
            <h2 className="h2-large text-center">
              SPACE<br />THAT INSPIRES
            </h2>
          </div>
          <div className={`${styles.brackets} fade-up`}>]</div>
        </div>

        <div className={`${styles.midRow} fade-up`}>
          <p className={styles.miniText}>A HOME DESIGNED<br/>FOR THOSE WHO<br/>SEEK MORE</p>
          <div className={styles.midImageWrapper}>
            <img src="/images/mid-building.webp" alt="Building preview" className={styles.midImage} />
            <p className={styles.scrollExplore}>Scroll To Explore &darr;</p>
          </div>
          <p className={styles.miniText}>WHERE EVERY<br/>DETAIL BRINGS YOU<br/>CLOSER TO NATURE</p>
        </div>

        <div className={styles.bottomGrid}>
          <div className={`${styles.bottomLeft} fade-up`}>
            <img src="/images/house-side.webp" alt="House Side View" className={styles.largeImage} />
          </div>
          <div className={`${styles.bottomRight} fade-up`}>
            <div className={styles.description}>
              It's a private hillside complex designed<br/>
              for quiet living and timeless views,<br/>
              creating a space <span className={styles.glowText}><span className={`glow-orb orb ${styles.orbInline}`}></span>you'll love</span><br/>
              <span className={styles.mutedText}>to call home</span>
            </div>
            
            <div className={styles.brandRow}>
              <div className={styles.aboutTag}>[ ABOUT US ]</div>
              <h2 className={`${styles.brandTitle} h2-large`}>
                HORIZON<br/>GROVE
              </h2>
              <div className={styles.videoBtnWrapper}>
                <div className={styles.videoBtnAura}></div>
                <button className="circle-btn">
                  <span>↘</span>
                  <span>Watch</span>
                  <span>The Video</span>
                </button>
              </div>
            </div>

            <div className={styles.bottomTextRow}>
              <p className={styles.fineText}>
                Located in the heart of the Dolomites in San Cassiano, we<br/>
                offer comfort and premium-class apartments with<br/>
                stunning mountain views. The complex combines refined<br/>
                architecture, modern amenities, and the tranquility of<br/>
                alpine nature for exceptional living.
              </p>
              <img src="/images/corridor.webp" alt="Corridor" className={styles.smallImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
