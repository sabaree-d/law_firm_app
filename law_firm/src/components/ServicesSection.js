import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-item">
          <h3>Legal Consultation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service-item">
          <h3>Court Representation</h3>
          <p>Integer auctor eros ac mauris luctus, eget vehicula purus volutpat.</p>
        </div>
        {/* Add more service items as needed */}
      </div>
    </section>
  );
}

export default ServicesSection;
