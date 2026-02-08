"use client";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingCards from './components/PricingCards';
import SeatExplainer from './components/SeatExplainer';
import Footer from './components/Footer';

export default function Home() {
  // Pricing data based on the current Figma pricing
  const professionalPrices = {
    monthly: {
      collab: 12,
      dev: 45,
      full: 60
    },
    annual: {
      collab: 10,
      dev: 38,
      full: 50
    }
  };

  const organizationPrices = {
    collab: 20,
    dev: 75,
    full: 120
  };

  const enterprisePrices = {
    collab: 25,
    dev: 90,
    full: 150
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PricingCards 
        professionalPrices={professionalPrices} 
        organizationPrices={organizationPrices} 
        enterprisePrices={enterprisePrices} 
      />
      <SeatExplainer />
      <Footer />
    </div>
  );
}
