import React from 'react';
import heroImage from '../images/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to our Law Firm</h1>
        <p>Your legal needs, our priority.</p>
        <button>Contact Us</button>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
}

export default HeroSection;
