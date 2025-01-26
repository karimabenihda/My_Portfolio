import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import from react-scroll
import karima from '/karima.png';
import { IoMenu } from "react-icons/io5";
import './index.css';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(prevState => !prevState);
  }

  return (
    <div className="container" style={{ marginBottom: '20px' ,position: 'sticky', top: '0px', zIndex: '1'}} >
      <nav className={`nav justify-content-center `} style={{borderRadius:"20px",backgroundColor:'black',marginBottom: '-30px',marginTop: '0px'}}>
        <ScrollLink className="navbar-brand" to="home" smooth={true} duration={500}>
          <img src={'/karima.png'} alt="Karima" className='karima' style={{marginTop: '-50px',marginLeft: '-43px',zIndex: '1'}}/>
        </ScrollLink>

        <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
          <ScrollLink
            className="nav-link active"
            to="home"
            smooth={true}
            duration={500}
            style={{ color: '#fff',backgroundColor:'black ', fontWeight: 'bold', fontStyle: 'normal' }}
          >
            Home
          </ScrollLink>
          <ScrollLink
            className="nav-link"
            to="about"
            smooth={true}
            duration={500}
            style={{ color: '#fff',backgroundColor:'black ', fontWeight: 'bold', fontStyle: 'normal' }}
          >
            About Me
          </ScrollLink>
          <ScrollLink
            className="nav-link"
            to="skills"
            smooth={true}
            duration={500}
            style={{ color: '#fff',backgroundColor:'black ', fontWeight: 'bold', fontStyle: 'normal' }}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            className="nav-link"
            to="projects"
            smooth={true}
            duration={500}
            style={{ color: '#fff',backgroundColor:'black ', fontWeight: 'bold', fontStyle: 'normal' }}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            className="nav-link"
            to="contact"
            smooth={true}
            duration={500}
            style={{ color: '#fff',backgroundColor:'black ', fontWeight: 'bold', fontStyle: 'normal' }}
          >
            Contact
          </ScrollLink>
        </div>
        <IoMenu className="menu-icon" onClick={toggleMenu} style={{color:'#fff',marginTop: '-5px',marginLeft: '-73px'  }}/>
      </nav>
    </div>
  );
}

export default Navbar;
