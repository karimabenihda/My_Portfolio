import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import { IoMenu } from "react-icons/io5";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Code,Send ,Moon,Sun,Settings 	, BriefcaseBusiness, House,User, Languages } from 'lucide-react';
import karima from '/karima.png';
// import '../Style/navbar.css';
import { motion } from 'framer-motion';

import StarBorder from '../Components/StarBorder'
import LanguageSwitcher from '../Components/LanguageSwitcher'
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t }=useTranslation();
  const [linkActive,setLinkActive]=useState(false)
  const handleActive=()=>{
    setLinkActive(true)
  }
  return (
    <div className=''>
<div className=" flex items-center !z-4 justify-between !gap-4 !py-2
fixed top-0 left-0 right-0  transition-all duration-300 
bg-[#222]/40 backdrop-blur-xl shadow-lg border-b border-gray-900
"     style={{backdropFilter: 'blur(16px)'}}>
          <img src={karima} width={150}/>
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
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>   */}
            <LanguageSwitcher/>
          </div>
       </div>
      </div>
      <div  className="md:hidden fixed top-1/2  right-0 transform -translate-y-1/2 shadow-lg !p-  bg-[#B66DF510] w-12 !mx-1 rounded-4xl z-50 flex flex-col items-center gap-13">
   <div className="" onClick={handleActive}>
   { linkActive ?
   <StarBorder
  as="div"
  className="custom-class"
  color="#B66DF5"
  speed="5s">
  <ScrollLink to="home" smooth={true} duration={500}
  >
  <House />
  </ScrollLink>
  
  </StarBorder>
:
  <ScrollLink to="home" smooth={true} duration={500}
  >
        {/* <House stroke="#B66DF5"/> */}
  <House />
  </ScrollLink>

     }
     </div>



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

