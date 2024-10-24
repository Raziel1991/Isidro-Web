// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Ensure this is included

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-image">
          <img src="/images/footer-icon.png" alt="Footer Icon" />
        </div>
        <div className="social-bar">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
        <div className='social-right'>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
