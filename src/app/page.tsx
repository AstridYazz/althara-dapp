import {
  Navigation,
  Hero,
  TechnologySection,
  FeaturesSection,
  HowItWorksSection,
  KeyFeaturesSection,
  CTASection,
  Footer
} from '../components';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TechnologySection />
      <FeaturesSection />
      <HowItWorksSection />
      <KeyFeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
