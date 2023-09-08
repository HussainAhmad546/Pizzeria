import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../HomeScreen.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container" style={{marginLeft:"80px"}}>
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor felis in felis
            vestibulum cursus. Proin blandit nunc ac lobortis rutrum. Mauris commodo tristique est
            at vulputate.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul style={{listStyleType:"none"}}>
            <li>Phone Number: +92-3363504242</li>
            <li>Email: Syedh2958@gmail.com</li>
            <li>Website: <a href="https://hussainahmad.me">https://hussainahmad.me</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social Media Links</h3>
          <div className="social-icons">
            <NavLink to="/facebook">
              <FaFacebook />
            </NavLink>
            <NavLink to="/youtube">
              <FaYoutube />
            </NavLink>
            <NavLink to="/twitter">
              <FaTwitter />
            </NavLink>
            <NavLink to="/instagram">
              <FaInstagram />
            </NavLink>
          </div>
        </div>
      </div>
      <p className="footer-text">&copy; 2023 Pizzeria. All rights reserved.</p>
    </div>
  );
};

export default Footer;
