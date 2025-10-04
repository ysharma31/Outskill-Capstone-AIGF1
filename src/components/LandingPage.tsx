import Navigation from './Navigation';
import Hero from './Hero';
import BeforeAfter from './BeforeAfter';
import Benefits from './Benefits';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Footer from './Footer';

interface LandingPageProps {
  onNavigate: (section: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      <Navigation onNavigate={onNavigate} />
      <Hero />
      <BeforeAfter />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
