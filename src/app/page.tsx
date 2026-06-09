import HeroSection from '@/components/HeroSection';
import SpaceInspiresSection from '@/components/SpaceInspiresSection';
import ApartmentsSection from '@/components/ApartmentsSection';
import PerksSection from '@/components/PerksSection';
import InfrastructureSection from '@/components/InfrastructureSection';
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
      <div id="about">
        <SpaceInspiresSection />
      </div>
      <div id="features">
        <PerksSection />
      </div>
      <div id="apartments">
        <ApartmentsSection />
      </div>
      <div id="infrastructure">
        <InfrastructureSection />
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
