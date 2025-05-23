import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode, theme, toggleTheme }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'} ${theme}`}>
      <div className="navbar-links">
        <Link to="/home" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/Achievements" className="navbar-link">Achievements</Link>
        <Link to="/skills" className="navbar-link">Skills</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
