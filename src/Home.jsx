import React, { useRef, useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useSprings, animated } from "@react-spring/web";
import './home.css';

const Home = () => {
  const elements = [
    { text: "Azul!  I'm", color: "#fff", fontSize: "40px", fontWeight: "bolder", fontFamily: "Montserrat, sans-serif" },
    { text: "Karima BENIHDA", color: "#ff8fb2", fontSize: "85px", fontWeight: "bolder", fontFamily: "Montserrat, sans-serif", textShadow: "1px 1px 10px #ff8fb2, -1px -1px 10px #ff8fb2" },
    { text: "Fullstack Web Developer", color: "#fff", fontSize: "30px", fontWeight: "bold", fontFamily: "Montserrat, sans-serif" },
  ];
    
    const buttonText = "More about me";
  const [inView, setInView] = useState(false);
  const ref = useRef();

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: { opacity: 0, transform: "translate3d(0,-30px,0)" },
      to: inView
        ? { opacity: 1, transform: "translate3d(0,0,0)" }
        : { opacity: 0, transform: "translate3d(0,-30px,0)" },
      delay: i * 200,
    }))
  );

  const buttonSpring = useSprings(1, [
    {
      from: { opacity: 0, transform: "scale(0.8)" },
      to: inView
        ? { opacity: 1, transform: "scale(1)" }
        : { opacity: 0, transform: "scale(0.8)" },
      delay: elements.length * 100,
    },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <div ref={ref} style={{ margin: '-122px' }}>
        {springs.map((styles, index) => (
          <animated.div
            key={index}
            style={{
              ...styles,
              color: elements[index].color,
              fontSize: elements[index].fontSize,
              fontWeight: elements[index].fontWeight,
              marginBottom: "10px",
              textShadow: elements[index].textShadow
            }}
          >
            {elements[index].text}
          </animated.div>
        ))}
        {buttonSpring.map((styles, index) => (
          <div key={index} style={styles}>
            <animated.a
              href="https://www.linkedin.com/in/karima-benihda-3004ba326"
              target="_blank"
              rel="noopener noreferrer"
              style={styles}
            >
              <button className="linkden_button">
                <FaLinkedin className="icon_linkedin"  style={{ width: '30px', height: '30px',marginRight:'8px' }} />
                {buttonText}
              </button>
            </animated.a>
            &nbsp; &nbsp;&nbsp;           &nbsp;

            <animated.a
              href="https://github.com/karimabenihda"
              className='link'
              style={{ color: '#feb7c3', marginLeft: '10px' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className='icon' style={{width: '55px', height: '55px',marginTop:'-20px'}} />
            </animated.a>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
