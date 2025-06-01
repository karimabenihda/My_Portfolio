import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import { IoMenu } from "react-icons/io5";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Code,Send ,Moon,Sun,Settings 	, BriefcaseBusiness, House,User, Languages, Github } from 'lucide-react';
import karima from '/karimalogo.png';
import { motion, AnimatePresence } from 'framer-motion';

import StarBorder from '../Components/StarBorder'
import LanguageSwitcher from '../Components/LanguageSwitcher'
import { useTranslation } from 'react-i18next';

function Navbar() {
  // const { t }=useTranslation();
  const [darkMode, setDarkMode] = useState(false);
const toggleDarkMode = () => {
  setDarkMode(prev => !prev);
};

  const [linkActive,setLinkActive]=useState(false)
  const handleActive=()=>{
    setLinkActive(true)
  }
  return (
    <div className=''>
<div className="flex items-center !z-4 justify-between !gap-4 !py-2
fixed top-0 left-0 right-0  transition-all duration-300 
bg-[#222]/40 backdrop-blur-xl shadow-lg border-b border-gray-900
"     style={{backdropFilter: 'blur(16px)'}}>
          <img src={karima} width={70} className='!ml-6'/>
        <div className="flex items-center ml-auto !gap-15 ">
<motion.div
  className="hidden md:flex !gap-11 text-lg font-bold"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* {[t('navbar.home'), t('navbar.about') , t('navbar.skills'), t('navbar.projects'), 'contact'].map((section) => ( */}

  {['home', 'about', 'skills','projects', 'contact'].map((section) => (
    <ScrollLink
      key={section}
      to={section}
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active-link"
      className="relative group px-3 py-2 cursor-pointer"
    >
      <span className="capitalize">{section}</span>
      <span
        className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r
                   from-blue-500 to-purple-500 shadow-md scale-x-0 opacity-0
                   transition-all duration-300 group-[.active-link]:scale-x-100 
                   group-[.active-link]:opacity-100 origin-left"
      ></span>
    </ScrollLink>
  ))}
</motion.div>

          {/* <div className="flex justify-arround gap-2"> */}
              <div className="flex items-center gap-2">
  {/* <button onClick={toggleDarkMode} className="p-2">
      <AnimatePresence mode="wait" initial={false}>
        {darkMode ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <Sun />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
          >
            <Moon />
          </motion.div>
        )}
      </AnimatePresence>
    </button> */}
       <a href="https://github.com/karimabenihda"
          target="_blank"
          rel="noopener noreferrer">
<Github/>
    </a>
             <LanguageSwitcher/>
          </div>
       </div>
      </div>


      <div  className="md:hidden fixed top-1/2 !py-4 !ml-1 left-0 transform -translate-y-1/2 shadow-lg  bg-[#B66DF510] w-10  rounded-4xl z-50 flex flex-col items-center gap-12">
  <ScrollLink to="about" smooth={true} duration={500}>
    <User size={24} />
  </ScrollLink>
  <ScrollLink to="skills" smooth={true} duration={500}>
    <Code	 size={24} />
  </ScrollLink>
  <ScrollLink to="projects" smooth={true} duration={500}>
    <BriefcaseBusiness size={24} />
  </ScrollLink>
  <ScrollLink to="contact" smooth={true} duration={500}>
    <Send  size={24} />
  </ScrollLink>
  
</div>

    </div>

  );
}

export default Navbar;

