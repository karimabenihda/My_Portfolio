import React from 'react';
import { FaDownload } from "react-icons/fa";
import { LuFlower } from "react-icons/lu";
import { CiLocationArrow1 } from "react-icons/ci";
import cv from '/CV_Karima_BENIHDA.pdf';
import './about.css'; 

function About() {
  function calcul_age(date_birth) {
    const today = new Date();
    const birthDate = new Date(date_birth);
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  }

  return (
    <div className='container'>
      <span className='title' style={{fontSize:'80px',color: "#ff8fb2"}}>Who am I?</span> <br /><br />
      <div className='content'>
        <p className='description'>
          I'm Karima BENIHDA, a passionate learner exploring the world of web development 💻
        </p>
        <p><b><CiLocationArrow1 className='flech_icon' style={{color:'#ff8fb2'}}/> Age: </b>{calcul_age("2004-06-20")} years old.</p>
        <p><b><CiLocationArrow1 className='flech_icon' style={{color:'#ff8fb2'}}/> Date of Birth: </b>June 20, 2004.</p>
        <p><b><CiLocationArrow1 className='flech_icon' style={{color:'#ff8fb2'}}/> Location: </b>Ait Melloul Agadir, Morocco.</p>
        <p><b><CiLocationArrow1 className='flech_icon' style={{color:'#ff8fb2'}}/> Education: </b></p>
        {/* <ol className='education-list'>
          <li><LuFlower style={{width:'22px',height:'22px',color:'#ff8fb2'}}/> <b>2023-2025:</b> I am a graduate of OFPPT Ait Melloul, specializing in Digital Development, Full Stack Web option.</li><br/>

          <li><LuFlower style={{width:'22px',height:'22px',color:'#ff8fb2'}}/> <b>2022-2023:</b> Graduated from Albakkali High School, specializing in Life and Earth Sciences "SVT," with a 'Bien' distinction.</li>
        </ol> */}
        
          <ul style={{marginBottom:'50px'}}>
          <li><LuFlower style={{width:'22px',height:'22px',color:'#ff8fb2'}}/>  <b>2023-2025:</b> I am a graduate of OFPPT Ait Melloul, specializing in Digital Development, Full Stack Web option.</li><br/>
          <li><LuFlower style={{width:'22px',height:'22px',color:'#ff8fb2'}}/>  <b>2022-2023:</b> Graduated from Albakkali High School, specializing in Life and Earth Sciences "SVT," with a 'Bien' distinction.</li>
        </ul>
        <a className='cv-button' href={cv} download>
          <FaDownload className='download-icon' /> Download Resume
        </a><br /><br />
      </div>
    </div>
  );
}

export default About;
