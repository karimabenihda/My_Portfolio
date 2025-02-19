import React, { useRef, useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import "./home.css";

const Home = () => {
  const [text, setText] = useState("");
  const fullName = "Karima BENIHDA"; // Nom complet
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (inView) {
      let i = 0;
      const interval = setInterval(() => {
        setText(fullName.slice(0, i + 1));
        i++;
        if (i === fullName.length) clearInterval(interval);
      }, 150); // Vitesse de frappe
    }
  }, [inView]);

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translate3d(0,0,0)" : "translate3d(0,-30px,0)",
    config: { tension: 200, friction: 20 },
  });

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
      <div ref={ref} style={{ margin: "-122px" }}>
        <animated.div style={fadeIn}>
          <p className="intro-text">Azul! I'm</p>
          <p className="name-text" style={{  fontFamily: "Montserrat, sans-serif"}}>{text} <span className="cursor">|</span></p>
          <p className="job-title">Fullstack Web Developer</p>
        </animated.div>

        <animated.a
          href="https://www.linkedin.com/in/karima-benihda-3004ba326"
          target="_blank"
          rel="noopener noreferrer"
          style={fadeIn}
        >
          <button className="linkden_button">
            <FaLinkedin className="icon_linkedin" style={{ width: "30px", height: "30px", marginRight: "8px" }} />
            More about me
          </button>
        </animated.a>

        &nbsp; &nbsp;&nbsp; &nbsp;

        <animated.a
          href="https://github.com/karimabenihda"
          className="link"
          style={{ color: "#feb7c3", marginLeft: "10px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" style={{ width: "55px", height: "55px", marginTop: "-20px" }} />
        </animated.a>
      </div>
    </div>
  );
};

export default Home;
