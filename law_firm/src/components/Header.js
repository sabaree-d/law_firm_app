import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src={logo} alt="Law Firm Logo" className="logo" />
        </div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
