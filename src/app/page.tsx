import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import PerksSection from '@/components/PerksSection';
import LocationSection from '@/components/LocationSection';
import FooterSection from '@/components/FooterSection';
import FinalFooter from '@/components/FinalFooter';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <HeroSection />
      </div>

      <div id="gallery">
        <GallerySection />
      </div>

      <div id="features">
        <PerksSection />
      </div>
      <div id="location">
        <LocationSection />
      </div>
      <div id="offers">
        <FooterSection />
      </div>
      <FinalFooter />
      <ScrollToTop />
    </main>
  );
}
