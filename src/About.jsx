import React from 'react'
import { FaDownload } from "react-icons/fa";
import { LuFlower } from "react-icons/lu";
import { CiLocationArrow1 } from "react-icons/ci";
import cv from '/CV_Karima_Benihda.pdf'
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
      <span style={{fontWeight: 'bold',fontSize:'50px'}}> Who am I ?</span>
      <div className='container'>
        <div style={{fontSize:'19px',lineHeight:'35px',margin:'20px'}}>
      I'm Karima BENIHDA , a passionate learner exploring the world of web development 💻 
        </div>
      <b style={{lineHeight:'32px'}}><CiLocationArrow1 /> Age : </b>{calcul_age("2004-06-20")} years old . <br />
      <b style={{lineHeight:'32px'}}><CiLocationArrow1 /> Date of Birth : </b>June 20,2004 . <br />
      <b style={{lineHeight:'32px'}}><CiLocationArrow1 /> Location : </b> Ait melloul Agadir ,Morocco . <br />
      <b style={{lineHeight:'32px'}}><CiLocationArrow1 /> Education : </b>
<ul style={{lineHeight:'32px'}}>
  <li><LuFlower /> <b>2022-2023 :</b> Graduated from Albakkali High School, specializing in Life and Earth Sciences "SVT",with a 'Bien' distinction.</li>
  <li><LuFlower /> <b>2023-2025 :</b> I am a graduate of OFPPT Ait Melloul, specializing in Digital Development, Full Stack Web option. </li>

</ul>   
<br />
<a className='linkden_cv_button' href={cv} style={{textDecoration: "none"}} download>
   <FaDownload style={{width:"40px" ,height:"28px",paddingBottom:'8px'}}/>
   Download CV</a>
</div> </div>
  )
}

export default About
