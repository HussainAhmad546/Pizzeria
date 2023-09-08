import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Nav.css';

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="main-nav">
      <div className="nav-container"> 
        <div className="nav-header">
        <NavLink to="/">
            <img src='../images/pizza.jpeg' alt="Logo" className="nav-logo" height={50} />
          </NavLink>
          <button className={`nav-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="nav-toggle-icon"></span>
          </button>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={toggleMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="active" onClick={toggleMenu}>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active" onClick={toggleMenu}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
