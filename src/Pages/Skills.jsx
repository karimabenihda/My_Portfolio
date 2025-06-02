import React, { useState, useEffect, useRef } from 'react'; 
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt, FaReact, FaPython, FaPhp, FaNodeJs } from "react-icons/fa";
import { TbBrandLaravel } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiMongodb, SiExpress, SiPostgresql } from "react-icons/si";
import { useSpring, animated } from '@react-spring/web'; 
import '../Style/skills.css';
import { Github } from 'lucide-react';
import { DiScrum } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { LiaDocker } from "react-icons/lia";
import { SiPostman } from "react-icons/si";
import { CgTrello } from "react-icons/cg";
import { motion } from "framer-motion";
import Card from '../Components/Card';
import { useTranslation } from 'react-i18next';
import BlurText from '../Components/BlurText';

function Skills() {
  const { t }=useTranslation();
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
      const[type,setType]=useState(t('skills.all'));
function handleChange(e){
    setType(e.target.value);
}

  const skillsData=[
    {name:"PHP",type:"Backend",icon:<FaPhp className='w-5 h-5'/>},
    {name:"JavaScript",type:"Frontend",icon:<IoLogoJavascript className='w-5 h-5'/>},
    {name:"Python",type:"Backend",icon:<FaPython className='w-5 h-5'/>},
    {name:"Html",type:"Frontend",icon:<IoLogoHtml5 className='w-5 h-5'/>},
    {name:"Css",type:"Frontend",icon:<FaCss3Alt className='w-5 h-5'/>},
    {name:"Laravel",type:"Backend",icon:<TbBrandLaravel className='w-5 h-5'/>},
    {name:"React",type:"Frontend",icon:<FaReact className='w-5 h-5'/>},
    {name:"Nodejs",type:"Backend",icon:<FaNodeJs className='w-5 h-5'/>},
    {name:"Express",type:"Backend",icon:<SiExpress className='w-5 h-5'/>},
    {name:"Nextjs",type:"Frontend",icon:<RiNextjsLine className='w-5 h-5'/>},
    {name:"Tailwind",type:"Frontend",icon:<RiTailwindCssFill className='w-5 h-5'/>},
    {name:"MongoDB",type:t("skills.database"),icon:<SiMongodb className='w-5 h-5'/>},
    {name:"Mysql",type:t("skills.database"),icon:<SiMysql className='w-5 h-5'/>},
    {name:"Postgress",type:t("skills.database"),icon:<SiPostgresql className='w-5 h-5'/>},
    {name:"Git/GitHub",type:t("skills.tools"),icon:<Github className='w-5 h-5'/>},
    {name:"Agile",type:t("skills.tools"),icon:<DiScrum className='w-5 h-5'/>},
    {name:"VsCode",type:t("skills.tools"),icon:<VscVscode className='w-5 h-5'/>},
    {name:"Docker",type:t("skills.tools"),icon:<LiaDocker className='w-5 h-5'/>},
    {name:"Postman",type:t("skills.tools"),icon:<SiPostman  className='w-5 h-5'/>},
    {name:"Trello",type:t("skills.tools"),icon:<CgTrello className='w-5 h-5'/>},

  ]

  const arrayType=[t('skills.all'),...new Set(skillsData.map((skill)=>skill.type))]
  const filtredSkills=type===t('skills.all')?skillsData:skillsData.filter((skill)=>skill.type===type);
  

  const [inView, setInView] = useState(false);
  const ref = useRef();

  // Fade-in effect for Skills section
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 800 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="">
<animated.div ref={ref} style={fadeIn} className="!px-4 !max-w-7xl !mx-auto">
       <div className="!mb-4 flex flex-col items-center justify-center gap-4 text-center">
        {/* <h1 className='text-4xl font-bold'>{t("skills.title")}</h1> */}
        <BlurText
  text={t("skills.title")}
  delay={100}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-5xl md:text-7xl font-bold mb-8"
/>
        <p className="!text-gray-400 !py-3">{t("skills.p")}</p>
      </div>
      <div className="flex justify-center items-center">
        <motion.div
  key={type}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
  transition={{ duration: 0.4 }}
>
{/* <div className="grid gap-2 grid-cols-3 md:grid-cols-8 "> */}
  <div className="flex flex-wrap gap-5 justify-center !my-7">
  {
      arrayType.map((type,i)=>(
        <div className="font-[500] w-fit !rounded-2xl !p-1 !px-3 !bg-indigo-500 transition duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-900/60 hover:-translate-y-1 hover:scale-100" key={i} value={type} onClick={()=>handleChange({ target: { value: type } })}>
    {type}
  </div> )) }
        </div>
{/* </div>  */}
</motion.div>
</div>
  {/* <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-col-4 !my-7"> */}
      
 <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className=" shadow p-4 rounded"
  >
  <div className="transition-all duration-500 ease-out transform opacity-0 translate-y-5 animate-fade-in">
    <div className="flex flex-wrap gap-5 justify-center">
{  
  filtredSkills.map((skill,i)=>(
        <Card> 
    <div key={i} className="oneCard border  !bg-[#F6B5790A] border-indigo-500 w-[170px] rounded-md !space-y-3 !p-5 transition duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-900/60 hover:-translate-y-1 hover:scale-100">
        <div className='flex justify-center'>{skill.icon}</div>
        <div className='flex justify-center'>{skill.name}</div>
<div className="border border-indigo-500 !bg-indigo-500 rounded-full h-[3px] w-full animate-grow-line"></div>
 </div>  
 </Card>
  ))
}
  </div> </div></motion.div>
    </animated.div>
</div>
  );
}

export default Skills;

