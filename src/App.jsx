import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll'; // For smooth scrolling
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    
      <Navbar style={{marginTop:'-110px' ,backgroundColor:'black' ,border:'1px solid black',borderRadius:"20px"}}/>
      <Element name="home" style={{marginBlock:"100px",marginBottom:'200px'}}>
        <Home /><br /><br />
      </Element>
      <Element name="about"style={{marginBlock:"100px"}}>
        <About /><br/><br />
      </Element>
      <Element name="skills"style={{marginBlock:"100px"}}>
        <Skills /><br /><br />
      </Element>
      <Element name="projects"style={{marginBlock:"100px"}}>
        <Projects /><br /><br /><br />
      </Element>
      <Element name="contact"style={{marginBlock:"90px"}}>
        <Contact />
      </Element>
    </>
  );
}

export default App;
