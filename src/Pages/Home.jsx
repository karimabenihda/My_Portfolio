import React from 'react'
import SplitText from "../Components/SplitText";
import GradientText from '../Components/GradientText'
import SplashCursor from '../Components/SplashCursor'
import InfiniteScroll from '../Components/InfiniteScroll'
import Magnet from '../Components/Magnet'
// import AnimatedContent from '../Components/AnimatedContent'
import Particles from '../Components/Particles';
import Orb from '../Components/Orb';
import { motion } from 'framer-motion';
import '../Style/home.css'
import { Linkedin, Github, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <>
    <div className="w-full !pt-20 md:!pt-30 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section with fade-in */}
        <motion.div
          className="!pl-6 w-full md:w-1/2 flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div id='scroll' className="flex flex-col gap-2">
            <SplitText
              text={t('home.hello')}
              textAlign="left" 
              className="text-3xl font-semibold w-full flex text-left "
              delay={10}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.99}
              rootMargin="-50px"
            />

            <GradientText
              colors={["#B66DF5 ","#edc7ff  ", "#B66DF5" ,"#2CD8D5"]}
              animationSpeed={3}
              showBorder={false}
              className="text-4xl font-bold"
            >
              Karima BENIHDA
            </GradientText>

            <div className="!py-4">
              <p className="text-3xl font-bold !py-2">{t('home.who')}</p>
              <p className="text-md font-normal">
            {t('home.description')}
              </p>
            </div>

<div className="md:hidden flex flex-wrap !pt-4 gap-6">
            <a href="https://github.com/karimabenihda"
          target="_blank"
          rel="noopener noreferrer">
                 <div className="!p-3 border !border-[#222] rounded-full bg-transparent transition duration-300 ease-in-out hover:shadow-xl hover:shadow-[#B66DF5]/50 hover:-translate-y-1 hover:scale-110 flex items-center justify-center">
                 <Github />
                 </div>
                 </a>
                   <a href="mailto:karimabenihda@gmail.com" target="_blank" rel="noopener noreferrer">
                     <div className="!p-3 border !border-[#222] rounded-full bg-transparent transition duration-300 ease-in-out hover:shadow-xl hover:shadow-[#B66DF5]/50 hover:-translate-y-1 hover:scale-110 flex items-center justify-center">
                    <Mail />  </div>
                   </a>

                 <a href="https://www.linkedin.com/in/karima-benihda-3004ba326"
          target="_blank"
          rel="noopener noreferrer" className="flex gap-2 border-gray-400 px-4 py-1 rounded-3xl ">
              <div className="gap-3 !p-3 border !border-[#222] rounded-full bg-transparent transition duration-300 ease-in-out hover:shadow-xl hover:shadow-[#B66DF5]/50 hover:-translate-y-1 hover:scale-110 flex items-center justify-center"> 
              <Linkedin />{t('home.button')}</div>
               </a>
          </div>

            <div className="hidden md:flex  contact  flex-wrap !pt-4 gap-6">
            <a href="https://github.com/karimabenihda"
          target="_blank"
          rel="noopener noreferrer">
               <Magnet padding={50} disabled={false} magnetStrength={11} className="!p-3 border !border-[#222] rounded-full transition  duration-300 ease-in-out hover:shadow-xl hover:shadow-[#B66DF5]/90 hover:-translate-y-1 hover:scale-110 flex items-center justify-center">
                 <Github />
               </Magnet>
                 </a>
                   <a href="mailto:karimabenihda@gmail.com" target="_blank" rel="noopener noreferrer">
               <Magnet padding={50} disabled={false} magnetStrength={11} className="!p-3 border !border-[#222] rounded-full transition duration-300 ease-in-out hover:shadow-xl hover:shadow-[#B66DF5]/90 hover:-translate-y-1 hover:scale-110 flex items-center justify-center">
                    <Mail />
               </Magnet>
                   </a>


                 
                 <a href="https://www.linkedin.com/in/karima-benihda-3004ba326"
          target="_blank"
          rel="noopener noreferrer" className="flex gap-2 border-gray-400 px-4 py-1 rounded-3xl ">
               <Magnet padding={50} disabled={false} magnetStrength={11} className="!p-3 border !border-[#222] rounded-full bg-transparent transition duration-300 ease-in-out hover:shadow-xl hover:shadow-[#B66DF5]/50 hover:-translate-y-1 hover:scale-110 flex items-center justify-center">
              <div className="flex gap-3"> 
                <Linkedin />{t('home.button')}
              </div>
              </Magnet>
               </a>
          </div>
          </div>
        </motion.div>

        {/* Orb Section with fade-in */}
        <div
          className="w-full md:w-1/2 relative h-[400px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        > 
       <div className="w-full md:w-1/2 relative h-[400px] flex justify-center items-center">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
          <div className="absolute text-white text-center">
            <p className="text-xl md:text-xl font-semibold">{t('home.p')}</p>
          </div></div> 
       </div>

      </div>
    </div>
    
    
  

 
{/* <div style={{height: '500px', position: 'relative'}}>
  <InfiniteScroll
    items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={0.1}
    autoplayDirection="down"
    pauseOnHover={true}
  />
</div>   */}
</>
  );
}

export default Home;

