"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Dock.module.css";
import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineCode, 
  HiOutlineAcademicCap, 
  HiOutlineBriefcase, 
  HiOutlineMail 
} from "react-icons/hi";
import StaggeredMenu from '../Components/StaggeredMenu';

const MIN = 48;
const MAX = 120;
const BOUND = MIN * Math.PI;

const items = [
  { label: "Home",      icon: <HiOutlineHome size={20} />,      href: "#home" },
  { label: "About",     icon: <HiOutlineUser size={20} />,      href: "#about" },
  { label: "Skills",    icon: <HiOutlineCode size={20} />,      href: "#skills" },
  { label: "Education", icon: <HiOutlineAcademicCap size={20} />, href: "#education" },
  { label: "Projects",  icon: <HiOutlineBriefcase size={20} />, href: "#projects" },
  { label: "Contact",   icon: <HiOutlineMail size={20} />,      href: "#contact" },
]; 

export default function Dock() {
  const dockRef = useRef(null);
  const iconRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const dock = dockRef.current;
    if (!dock) return;
    const icons = iconRefs.current;
    const firstIcon = icons[0];
    if (!firstIcon) return;

    gsap.set(icons, { transformOrigin: "50% 120%", height: 40 });
    gsap.set(dock, { position: "relative", height: 60 });

    function updateIcons(pointer) {
      icons.forEach((icon, i) => {
        if (!icon) return;
        const distance = i * MIN + MIN / 2 - pointer;
        let scale = 1;
        let x = 0;

        if (-BOUND < distance && distance < BOUND) {
          const rad = (distance / MIN) * 0.5;
          scale = 1 + (MAX / MIN - 1) * Math.cos(rad);
          x = 2 * (MAX - MIN) * Math.sin(rad);
        } else {
          x = (-BOUND < distance ? 2 : -2) * (MAX - MIN);
        }

        gsap.to(icon, { duration: 0.3, x, scale });
      });
    }

    function onMouseMove(e) {
      const rect = dock.getBoundingClientRect();
      const offset = rect.left + firstIcon.offsetLeft;
      updateIcons(e.clientX - offset);
    }

    function onMouseLeave() {
      gsap.to(icons, { duration: 0.3, scale: 1, x: 0 });
    }

    dock.addEventListener("mousemove", onMouseMove);
    dock.addEventListener("mouseleave", onMouseLeave);

    return () => {
      dock.removeEventListener("mousemove", onMouseMove);
      dock.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isMobile]);

  const menuItems = items.map(item => ({
    label: item.label,
    ariaLabel: `Go to ${item.label}`,
    link: item.href
  }));

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/karimabenihda/' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/karima-ben-ihda-3004ba326/' }
  ];

  return (
    <>
      {isMobile ? (
        <StaggeredMenu
          isFixed={true}
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#1a1a1a', '#2a2a2a', '#a78bfa']}
          logoUrl=""
          accentColor="#a78bfa"
        />
      ) : (
        <div className={styles.wrapper}>
          <ul className={styles.toolbar} ref={dockRef}>
            {items.map((item, i) => (
              <li
                key={i}
                className={styles.toolbarItem}
                ref={(el) => (iconRefs.current[i] = el)}
              >
                <a className={styles.toolbarLink} href={item.href} title={item.label}>
                  <div className={styles.toolbarIconWrapper}>
                    {item.icon}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}