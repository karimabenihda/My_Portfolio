import {  Eye, Github ,Globe, Magnet, Plus} from 'lucide-react';
import React,{useState} from 'react'
  import SpotlightCard from '../Components/SpotlightCard '
import AnimatedContent from "../Components/AnimatedContent"
import { useTranslation } from 'react-i18next';
import BlurText from '../Components/BlurText';

function Soloproject(){
  const { t } = useTranslation();
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
    const projectData = [
      { name: "CLASSIK BMC",image:'/project_imgs/ClassikBmc.PNG', description: t("projects.d1"), language: "React", link: "https://github.com/karimabenihda/CLASSIC_BMC", site:"https://classic-bmc.vercel.app/" },
      { name: "Organizeo",image:'/project_imgs/organizeo.PNG', description:t("projects.d2"), language: "Laravel ", link: "https://github.com/karimabenihda/Organizeo.git", site:'https://github.com/karimabenihda/Organizeo.git' },
      { name: "Computer Buying ",image: '/project_imgs/tkinter.PNG', description: t("projects.d3"), language: "Python", link: "https://github.com/karimabenihda/Tkinter-Computer-Buying-App", site:'https://github.com/karimabenihda/Tkinter-Computer-Buying-App' },
      { name: "ShopCatalogue",image:'/project_imgs/catalogue.PNG', description: t("projects.d4"), language: "React", link: "https://github.com/karimabenihda/ShopCatalogue", site:"https://shop-catalogue-sigma.vercel.app/" },
      { name: "HappyDonut",image:'/project_imgs/happydonuts.PNG', description: t("projects.d5"), language: "React ", link: "https://github.com/karimabenihda/Happy_Donuts_Store", site:'https://happy-donuts-store.vercel.app/' },
      { name: "Fontify",image:'/project_imgs/fontify.PNG', description: t("projects.d6"), language: "React ", link: "https://github.com/karimabenihda/Fontify", site:'https://fontify-font.vercel.app/' },
      { name: "LitLibrary",image:'/project_imgs/notdefined.PNG', description: t("projects.d7"), language: "Laravel", link: "https://github.com/karimabenihda/LitLibrary.git", site:'https://github.com/karimabenihda/LitLibrary.git' },
      { name: "Auth-Todolist",image:'/project_imgs/notdefined.PNG', description:t("projects.d8"), language: "Laravel", link: "https://github.com/karimabenihda/Laravel-Authenticated-Todolist.git", site:'https://github.com/karimabenihda/Laravel-Authenticated-Todolist.git' },

  ];

    const [visibleProjects, setVisibleProjects] = useState(3);
  const showMore = () => setVisibleProjects(projectData.length);
  return (
    <div>
 <div className="!mb-4 flex flex-col items-center justify-center gap-4 text-center">
  {/* <h1 className="text-4xl font-bold">{t("projects.Title")}</h1> */}
  <BlurText
    text={t("projects.Title")}
    delay={100}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-5xl md:text-7xl font-bold mb-8"
  />
  <p className="!text-gray-400 !py-3">{t("projects.p")}</p>
</div>

 <div className=''>
    <div className="flex flex-wrap gap-5 justify-center !my-7">
    {projectData.slice(0, visibleProjects).map((project, index) => (
      <AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>
  <div  className='group relative w-[300px] h-[300px] md:h-[340px] md:w-[400px] text-[#0B0C10] rounded-2xl overflow-hidden'
    key={index}
  > <div
      className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-110       
               opacity-85 
 group-hover:opacity-100"
    style={{ backgroundImage: `url(${project.image})` }}
  ></div>

  {/* Card content */}
  <div className='relative z-10 w-full h-full flex items-end justify-center'>
    <SpotlightCard
      className="custom-spotlight-card w-[260px] md:w-[300px] h-[250px]  transition-transform duration-500 hover:opacity-90 hover:scale-105"
      spotlightColor="rgba(182, 109, 245, 0.2)">
      {/* <div className="md:hidden "> */}
      <h4 className='text-xl !text-[#fff] font-bold !pb-1'>{project.name}</h4>
      <p className='text-sm font-[400] !text-gray-200 !my-1'>{project.description}</p>
  
        <div className="font-[500] w-fit text-[#ffff] !rounded-2xl !px-3 !bg-indigo-500">{project.language}</div>
    
      <div className="flex justify-end gap-4 !mt-2 text-[#ffff]">
        <a
          href={project.site}
          target='_blank'
          rel='noopener noreferrer'
          className='project-link flex items-center gap-1'
        >
          <Globe/>
        
          </a>
        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='project-link flex items-center gap-1'
        >
          <Github/>
        </a>
              

      </div>
      {/* </div> */}
    </SpotlightCard>
  </div>
</div>
    </AnimatedContent>

    ))}
  </div>  </div>


  <br />

  {visibleProjects < projectData.length && (
        <div className="flex justify-center">

    <button type="submit"
         onClick={showMore}
          className="relative !bg-indigo-500 font-medium
           !hover:bg-[#b66df5] flex items-center !justify-center gap-2 
           rounded-full !p-2 !my-3 overflow-hidden transition-transform 
           duration-500 hover:opacity-90 hover:scale-105  "
        >
          <div className="text-sm !py-1 !px-2">{t("projects.button")}</div>
              <Plus />
      
    </button>
</div>

  )}
</div>

  )
}

export default Soloproject
