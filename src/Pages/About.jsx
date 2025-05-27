import React,{useState,useEffect,useRef} from 'react'
import { useSpring, animated } from '@react-spring/web';
import cv from '../CV_Karima_BENIHDA.pdf';
import Magnet from '../Components/Magnet'
import { Briefcase, Download, GraduationCap, 
} from 'lucide-react';
import SpotlightCard from '../Components/SpotlightCard ';
import AnimatedContent from '../Components/AnimatedContent'
import { useTranslation } from 'react-i18next';

function About() {
  const { t }=useTranslation();
const items = [
  {
          date: "2025",
          title: t("about.t1"),
          company: "DeveloppeurInformatique.ma",
          description: t("about.p1"),
          skills: ["React", "tailwind", "Postgress", "Formik"],
          icon:<Briefcase/>
        },      
        {
          date: "2023 - 2025",
          title: t("about.t2"),
          company: "ISTA Ait Melloul",
          description: t("about.p2"),
          skills: ["React", "Laravel", "JavaScript", "php","Mysql","Mongodb"],
          icon:<GraduationCap/>
        },
        {
          date: "2022 - 2023",
          title: t("about.t3"),
          company: t("about.company"),
          description:t("about.p3"),
          icon:<GraduationCap/>
        }
      ];

    const [inView, setInView] = useState(false);
  const ref = useRef();

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

  function calcul_age(date_birth) {
    const today = new Date();
    const birthDate = new Date(date_birth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--;
    return age;
  }
const age = calcul_age("2004-06-20");



    return (
      <><animated.div ref={ref} style={fadeIn} className='content'>

   <div className="!mb-3 flex flex-col items-center justify-center gap-4 text-center">
 
  <h1 className="text-4xl font-bold">{t("about.titre")}</h1>
  <p className="!text-gray-400">{t("about.p")}</p>
</div>

    <div className='flex gap-3 flex-col md:flex-row md:w-full'>
      <div className="sec1 rounded-2xl text-sm !py-6 shadow-xl flex justify-center items-center  md:w-1/3 w-full">
 <AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>
  
 <div className="rounded-lg !px-4 !py-3 w-[310px] lg:w-full bg-zinc-900 p-4">
   <div className="flex  !space-x-2 !space-y-2 ">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div> 
  <div className="!ml-4 !-mt-1 text-sm ">about.js</div>
  </div>

 <div className="!my-2 group ">
                  <span className="!text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300">const</span>{" "}
                  <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">developer</span> = {"{"}
                </div>
                <div className="!ml-4 !mb-2 group">
                  <span className="!text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">name</span>:{" "}
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Karima BENIHDA"</span>,
                </div>
                <div className="!ml-4 !mb-2 group">
                  <span className="!text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">role</span>:{" "}
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Full Stack Developer"</span>,
                </div>
                <div className="!ml-4 !mb-2 group">
                  <span className="!text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">age</span>:{" "}
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">{age}</span>,
                </div>
                <div className="!ml-4 mb-2 group">
                  <span className="!text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">skills</span>: [
                </div>
                <div className="!ml-8 !mb-2 group !break-words">
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"React"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Node.js"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Express"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Laravel"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Tailwind"</span>,
                </div>
                <div className="!ml-4 !mb-2">
                  ],
                </div>
                <div className="!ml-4 !mb-2 group">
                  <span className="!text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">location</span>:{" "}
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Ait Melloul, Morocco"</span>,
                </div>
                <div className="!ml-4 group">
                  <span className="!text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">available</span>:{" "}
                  <span className="!text-green-400 transition-colors duration-300 group-hover:text-green-300">true</span>
                </div>
                <div>{"}"}</div>
</div>
<div className="flex justify-end">
         <Magnet padding={50} disabled={false} magnetStrength={11} className="!p-3 !my-4 border border-indigo-400 rounded-full bg-transparent transition duration-300 ease-in-out hover:shadow-xl hover:shadow-indigo-400/50 hover:-translate-y-1 hover:scale-110 flex items-center justify-center">
   <a href={cv}  className="flex gap-2" download>
          <Download/>{t("about.download")}
                 </a>
                </Magnet></div>
                </AnimatedContent>


      </div>

      
      <div className="sec2 md:w-2/3 border rounded-2xl !border-[#222] w-full">

<section className="timeline-items !p-6">
          {items.map((item, index) => (
             <AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  config={{ tension: 80, friction: 20 }}
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
>
            <div key={index} className="timeline-item flex items-start !mb-2 relative">
            <div className="timeline-dot z-2 bg-indigo-400 !p-0.5 rounded-full absolute  -left-1.5">
            {item.icon}
            </div>
              <div className="!ml-6 w-full ">
                <div className="timeline-date !text-sm !text-gray-400 !mb-2">{item.date}</div>
                <div className="bg-[#18181b] border border-indigo-400 !p-5 rounded-lg shadow-lg">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  {item.company && <p className="!text-indigo-400 text-sm">{item.company}</p>}
                  <p className="!mt-2 text-gray-300 text-sm">{item.description}</p>
                  {item.skills && (
                    <div className="!mt-2 flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="text-xs bg-indigo-400 !px-2 !py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute left-1.5 h-full w-0.5 bg-gray-600"></div>
            </div>
          </AnimatedContent>
          ))}
        </section>
      </div>
    </div></animated.div>
</>
  )
}

export default About

