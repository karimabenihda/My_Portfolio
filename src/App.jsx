import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Spinner from './Spinner.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [countdown, setCountdown] = useState(3); // Start at 3

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer); // Clean up
    }
  }, [countdown]);

  return countdown > 0 ? (
    <Spinner countdown={countdown} />
  ) : (
    <>
      <Navbar style={{ marginTop: '-110px', backgroundColor: 'black', border: '1px solid black', borderRadius: "20px" }} />
      <br /><br /><br /><br />
      <Element name="home" style={{ marginBottom: '200px' }}>
        <Home /><br /><br />
      </Element>
      <Element name="about" style={{ marginBlock: "100px" }}>
        <About /><br /><br />
      </Element>
      <Element name="skills" style={{ marginBlock: "100px" }}>
        <Skills /><br /><br />
      </Element>
      <Element name="projects" style={{ marginBlock: "100px" }}>
        <Projects /><br /><br /><br />
      </Element>
      <Element name="contact" style={{ marginBlock: "90px" }}>
        <Contact />
      </Element>
    </>
  );
}

export default App;
