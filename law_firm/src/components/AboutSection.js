import React from 'react';
import aboutImage from '../images/about-image.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-image-container">
        <img src={aboutImage} alt="About" className="about-image" />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit tristique eros id varius.</p>
      </div>
    </section>
  );
}

export default AboutSection;
