import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'} ${theme}`}>
      <div className="navbar-container">
        <div className="navbar-top-row">
          <div className="navbar-brand">
            <Link to="/home" className="navbar-link">Chirag Taneja</Link>
          </div>

          <div className="navbar-toggle-container">
            <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              <span className={`bar ${isOpen ? 'open' : ''}`}></span>
              <span className={`bar ${isOpen ? 'open' : ''}`}></span>
              <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/home" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Achievements" className="navbar-link" onClick={() => setIsOpen(false)}>Achievements</Link>
          <Link to="/skills" className="navbar-link" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
