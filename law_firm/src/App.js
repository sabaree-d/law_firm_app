import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
