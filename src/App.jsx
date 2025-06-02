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
import Particles from './Components/Particles.jsx';

function App() {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 810);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return countdown > 0 ? (
    <Spinner countdown={countdown} />
  ) : (
    <>
      {/* Background particles */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -3,
        pointerEvents: 'none'
      }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main content */}
      <Navbar />
      <div className="!space-y-40">
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="services"><Services /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="contact"><Contact /></Element>
      </div>
    </>
  );
}

export default App;
