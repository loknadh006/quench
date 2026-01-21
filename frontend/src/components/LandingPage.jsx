import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Products from './Products';
import Stats from './Stats';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;