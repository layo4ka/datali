import { useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Prices from './components/Prices';
import Process from './components/Process';
import BeforeAfter from './components/BeforeAfter';
import Portfolio from './components/Portfolio';
import Benefits from './components/Benefits';
import Materials from './components/Materials';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTAForm from './components/CTAForm';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Cinematic noise texture overlay */}
      <div className="noise-overlay" />

      {/* Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Main App Container */}
      <div className="min-h-[100dvh] bg-bg-primary text-text-primary selection:bg-accent-color selection:text-white transition-colors duration-500 relative">
        <Header />
        
        <main>
          <Hero isAppLoading={isLoading} />
          <Philosophy />
          <Services />
          <BeforeAfter />
          <Prices />
          <Process />
          <Portfolio />
          <Benefits />
          <Materials />
          <Testimonials />
          <FAQ />
          <CTAForm />
        </main>

        <Footer />
      </div>
    </>
  );
}
