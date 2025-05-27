import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Spinner from './Pages/Spinner.jsx';
import './App.css';
import Services from './Pages/Services.jsx';

function App() {
  const [countdown, setCountdown] = useState(4); // Start at 4

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 810);
      return () => clearTimeout(timer); // Clean up
    }
  }, [countdown]);

  return countdown > 0 ? (
    <Spinner countdown={countdown} />
  ) : (
    <>
    <Navbar/>
    <div className='!space-y-40'>
      <Element name="home" >
        <Home />
      </Element>
      <Element name="about" >
        <About />
      </Element>
      <Element name="services" >
        <Services/>
      </Element>
      <Element name="skills" >
        <Skills />
      </Element>
        <Element name="projects" >
        <Projects/>
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    
    </div>
 </>
  );
}

export default App;
