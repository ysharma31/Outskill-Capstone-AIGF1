import Navigation from './Navigation';
import Hero from './Hero';
import Benefits from './Benefits';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Footer from './Footer';
import { supabase } from '../lib/supabase'

interface LandingPageProps {
  onNavigate: (section: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      <Navigation onNavigate={onNavigate} />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
