import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DownloadApp from './components/DownloadApp';
import CommunityFeatures from './components/CommunityFeatures';
import BenefitsSection from './components/BenefitsSection';
import AffiliateDetails from './components/AffiliateDetails';
import NewsSection from './components/NewsSection';
import IntegratedFeatures from './components/IntegratedFeatures';
import LearnGrowSection from './components/LearnGrowSection';
import LearnSection from './components/LearnSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Short timeout to guarantee elements are in the DOM before we select them
    const timeout = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }, 150);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="text-on-background font-body-md overflow-x-hidden relative min-h-screen dotted-bg">
      <div className="fixed inset-0 pointer-events-none z-[-1] dotted-bg opacity-30"></div>
      <Navbar />
      <main>
        <Hero />
        <DownloadApp />
        <CommunityFeatures />
        <BenefitsSection />
        <AffiliateDetails />
        <LearnSection />
        <NewsSection />
        <IntegratedFeatures />
        <LearnGrowSection />
        <Testimonials />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
