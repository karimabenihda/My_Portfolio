import React,{useState,useEffect,useRef} from 'react'
import { useSpring, animated } from '@react-spring/web';
import cv from '../CV_Karima_BENIHDA.pdf';
import Magnet from '../Components/Magnet'
import { Briefcase, Download, GraduationCap, 
} from 'lucide-react';
import BlurText from '../Components/BlurText'
import SpotlightCard from '../Components/SpotlightCard ';
import AnimatedContent from '../Components/AnimatedContent'
import { useTranslation } from 'react-i18next';

function About() {
  const { t }=useTranslation();
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const items = [
   {
          date: "April 2026 – May 2026",
          title: "E-commerce plateforme : Freelance",
          company: " DISIS MAROC",
          description: "Redesigned an e-commerce platform for electronic and IT equipment, adding features and improving UX and performance.",
          skills: ["Laravel Blade", "Bootstrap", "Mysql"],
          icon:<Briefcase/>
        }, 
   {
          date: "March 2026 – April 2026",
          title:"International Student Guidance Platform : Freelance" ,
          company: "ZHacademy",
          description: "Contributed as a front-end developer to Ventory, a high-performance SaaS platform, by developing responsive and efficient user interfaces using Next.js and Tailwind CSS",
          skills: ["Nextjs","Type Script", "TailwindCss" ],
          icon:<Briefcase/>
        }, 
   {
          date: "Sep 2025 - March 2026",
          title: "Certification in Artificial Intelligenceb",
          company: "Simplon Maghre",
          description: "An intensive, project-driven AI bootcamp covering Machine Learning, Deep Learning, full-stack integration, and agile soft skills through bi-weekly project presentations.",
          skills: ["Machine Learning", "Deep Learning", "NLP","AI Services Integration","Azure Cloud"],
          icon:<GraduationCap/>
        }, 
   {
          date: "July 2025 – September 2025",
          title: "Cash-on-Delivery Sales Management Platform at : Intern",
          company: "technopeck.com",
          description: "Contributed as a front-end developer to a Cash-on-Delivery Sales Management Platform by developing a responsive and secure landing page in Laravel Blade, enhancing usability and improving user engagement.",
          skills: ["React", "TailwindCss", "Laravel"],
          icon:<Briefcase/>
        }, 
  {
          date: "March 2025 – May 2025",
          title:" Arabic and Quran Teaching Platform : Intern" ,
          company: "DeveloppeurInformatique.ma",
          description: "Developed modern, responsive user interfaces as a front-end developer using React and Tailwind CSS, enhancing user experience",
          skills: ["React", "TailwindCss", "Postgress", "Formik"],
          icon:<Briefcase/>
        },      
        {
          date: "Sep 2023 - June 2025",
          title: t("about.t2"),
          company: "ISTA Ait Melloul",
          description: t("about.p2"),
          skills: ["Frontend Developpement", "Backend Developpement", "UML", "SGBD"],
          icon:<GraduationCap/>
        },
        // {
        //   date: "2022 - 2023",
        //   title: t("about.t3"),
        //   company: t("about.company"),
        //   description:t("about.p3"),
        //   icon:<GraduationCap/>
        // }
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


<BlurText
  text={t("about.titre")}
  delay={100}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-5xl md:text-7xl font-bold mb-8"
/>
  {/* <h1 className="text-4xl font-bold">{t("about.titre")}</h1> */}
  <p className="!text-gray-400 text-xl !py-3">{t("about.p")}</p>
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
  
 <div className="rounded-lg !px-4 !py-3 w-[310px] lg:w-full bg-zinc-900 p-3 font-mono">
   <div className="flex  !space-x-2 !space-y-2 ">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div> 
  <div className="!ml-4 !-mt-1 text-sm ">about.js</div>
  </div>

 <div className="!my-2 group font-mono">
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
<div className="!ml-8 !mb-2 flex flex-wrap gap-x-2 whitespace-normal">
                  <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">Programming Languages</span> = {"{"}
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Python"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"JavaScript"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"PHP"</span>
 <div>{"}"}</div><br /><br />



  <div className="!ml-8 !mb-2 flex flex-wrap gap-x-2 whitespace-normal">
                    <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">Frameworks & Technologies</span> = {"{"}
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Nextjs"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Reactjs"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"TailwindCss"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"FastAPI"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Express"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Laravel"</span>
 <div>{"}"}</div></div><br />



  <div className="!ml-8 !mb-2 flex flex-wrap gap-x-2 whitespace-normal">
                    <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">Libraries & Data Science</span> = {"{"}
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Pandas"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Scikit-learn"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"TensorFlow"</span>

 <div>{"}"}</div></div><br />

<div className="!ml-8 !mb-2 flex flex-wrap gap-x-2 whitespace-normal">
                    <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">AI / Generative AI</span> = {"{"}
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"LLMs (HF)"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"NLP / RAG"</span>
 <div>{"}"}</div></div><br />


<div className="!ml-8 !mb-2 flex flex-wrap gap-x-2 whitespace-normal">
                    <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">DataBases</span> = {"{"}
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Postgresql"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Mysql"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"MongoDB"</span>
 <div>{"}"}</div></div><br />


<div className="!ml-8 !mb-2 flex flex-wrap gap-x-2 whitespace-normal">
                    <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">Tools & Platforms</span> = {"{"}
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Git/GitHub"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Postman"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Jupyter / Colab"</span>,
                  <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Trello / Jira"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"VsCode"</span>
 <div>{"}"}</div></div><br />

<div className="!ml-8 !mb-2 flex flex-wrap gap-x-2 whitespace-normal">
                    <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">DevOps & CI/CD</span> = {"{"}
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Docker"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"GitHub Actions"</span>
 <div>{"}"}</div></div><br />
 
 <div className="!ml-8 !mb-2 flex flex-wrap gap-x-2 whitespace-normal">
                    <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">Testing & Quality Assurance</span> = {"{"}
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"pytest"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Fixtures"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Mocking"</span>
 <div>{"}"}</div></div><br />

 <div className="!ml-8 !mb-2 flex flex-wrap gap-x-2 whitespace-normal">
                    <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">MLOps & Data Engineering</span> = {"{"}
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Apache Airflow"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"MLflow"</span>
 <div>{"}"}</div></div><br />

 <div className="!ml-8 !mb-2 flex flex-wrap gap-x-2 whitespace-normal">
                    <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">Monitoring & Observability</span> = {"{"}
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Prometheus"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Grafana"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"OpenTelemetry"</span>
 <div>{"}"}</div></div><br />


 <div className="!ml-8 !mb-2 flex flex-wrap gap-x-2 whitespace-normal">
                    <span className="!text-rose-400 transition-colors duration-300 group-hover:text-rose-300">Methodologies</span> = {"{"}
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Agile"</span>,
                   <span className="!text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300">"Kanban"</span>
 <div>{"}"}</div></div><br />


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
            key={index}
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="timeline-item flex items-start !mb-8 relative">
              {/* Timeline Dot */}
              <div className="timeline-dot z-10 bg-[#7f5af0] !p-1 rounded-full absolute -left-1.5 top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                {item.icon}
              </div>

              <div className="!ml-6 w-full">
                {/* 1. Date (Kept Placement) */}
                <div className="timeline-date !text-sm !text-gray-400 !mb-3 font-medium tracking-wide">
                  {item.date}
                </div>

                <header className="max-w-3xl !mx-auto relative z-10 !px-2">
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
                    {/* Mac Terminal Header */}
                    <div className="bg-[#181824] rounded-t-xl !p-2.5 flex items-center border-b border-[#11111b] relative">
  {/* Div 1: Window Controls - Changed from 'absolute' to normal layout flow with a right margin */}
              <div className="flex gap-1.5 mr-4 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]" />
              </div>

              {/* Div 2: Center Title - Uses pr-[54px] to perfectly offset the buttons so it stays exactly dead-center */}
              <div className="text-[11px] font-mono text-gray-400 w-full text-center pr-[20px] select-none truncate">
                karimabenihda — zsh — {item.company}
              </div>
            </div>

                    {/* Mac Terminal Body */}
                    <div className="bg-[#0f0f16] !p-4 rounded-b-xl shadow-2xl border border-white/[0.03] font-mono selection:bg-[#7f5af0]/30">
                      {/* Shell Prompt Line */}
                      <div className="flex items-center flex-wrap gap-x-2 text-xs md:text-sm !mb-3">
                        <span className="text-[#89b4fa]">~/portfolio</span>
                        <span className="text-gray-500">on</span>
                        <span className="text-[#a6e3a1] font-semibold">🌿 main</span>
                        <span className="text-[#f38ba8]">$</span>
                        <span className="text-white">git log --oneline --graph</span>
                      </div>

                      {/* Simulated Git Log output utilizing your data elements */}
                      <div className="space-y-1.5 text-xs md:text-sm">
                        {/* 2. Title represented as the main commit header (Kept Placement) */}
                        <div className="flex items-start gap-2 font-semibold">
                          <span className="text-indigo-400 select-none">*</span>
                          <span className="text-[#f9e2af]">a1b2c3d</span>
                          <span className="text-[#74c7ec] text-[11px] bg-[#74c7ec]/10 px-1 rounded border border-[#74c7ec]/20">
                            HEAD -&gt; origin/main
                          </span>
                          <span className="text-gray-100">{item.title}</span>
                        </div>

                        {/* Git structural connector line */}
                        <div className="text-gray-600 select-none !ml-0.5">|</div>

                        {/* 3. Description formatted beautifully inside the log details (Kept Placement) */}
                        <div className="flex items-start gap-2">
                          <span className="text-gray-600 select-none|">|</span>
                          <div className="text-gray-400 font-sans leading-relaxed text-sm">
                            {item.description}
                          </div>
                        </div>

                        {/* 4. Skills Badges styled cleanly inside terminal container (Kept Placement) */}
                        {item.skills && (
                          <div className="flex items-start gap-2 !mt-3">
                            <span className="text-gray-600 select-none">|</span>
                            <div className="flex flex-wrap gap-1.5">
                              {item.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="text-[11px] font-mono bg-[#7f5af0]/10 text-indigo-300 border border-[#7f5af0]/20 !px-2 !py-0.5 rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedContent>
                </header>
              </div>
              {/* Vertical Timeline Track Line */}
              <div className="absolute left-1.5 top-4 h-[calc(100%+2rem)] w-0.5 bg-gradient-to-b from-[#7f5af0]/50 to-transparent"></div>
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

