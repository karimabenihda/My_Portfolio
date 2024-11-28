import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import karima from '/karima.png';
import { IoMenu } from "react-icons/io5";
import './index.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleDarkModeChange = () => {
      const isDark = document.body.classList.contains('darkmode--activated');
      setIsDarkMode(isDark);
    };

    handleDarkModeChange();
    const observer = new MutationObserver(handleDarkModeChange);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  function toggleMenu() {
    setIsMenuOpen(prevState => !prevState);
  }

  return (
    <div className="container" style={{ marginBottom: '40px' }}>
      <nav className={`nav justify-content-center ${isDarkMode ? 'dark-nav' : ''}`}>
        <Link className="navbar-brand" to="/">
          <img src={isDarkMode ? '/karima-white.png' : karima} alt="Karima" />
        </Link>

        <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
          <Link className="nav-link active" to="/" style={{ color: isDarkMode ? 'white' : '#2A3C59', fontWeight: 'bold', fontStyle: 'normal' }}>Home</Link>
          <Link className="nav-link" to="/about" style={{ color: isDarkMode ? 'white' : '#2A3C59', fontWeight: 'bold', fontStyle: 'normal' }}>About me</Link>
          <Link className="nav-link" to="/skills" style={{ color: isDarkMode ? 'white' : '#2A3C59', fontWeight: 'bold', fontStyle: 'normal' }}>Skills</Link>
          <Link className="nav-link" to="/projects" style={{ color: isDarkMode ? 'white' : '#2A3C59', fontWeight: 'bold', fontStyle: 'normal' }}>Projects</Link>
          <Link to="/contact" className="nav-link" style={{ color: isDarkMode ? 'white' : '#2A3C59', fontWeight: 'bold', fontStyle: 'normal' }}>Contact</Link>
        </div>
        <IoMenu className="menu-icon" onClick={toggleMenu} />
      </nav>
    </div>
  );
}

export default Navbar;
