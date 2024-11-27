import React from 'react'
import { TbZoom } from "react-icons/tb";


function Home() {
  return (
    <div className='container'>
      <div style={{color:"#2A3C59" ,fontWeight:'bolder' ,fontSize:'20px',}}>Azul!</div> 
    <span style={{color:"#2A3C59" ,fontWeight:'bolder' ,fontSize:'100px'}}>I'm</span><span style={{color:"#feb7c3" ,fontWeight:'bolder' ,fontSize:'100px'}}> Karima<br/> BENIHDA </span>
    <div style={{color:"#2A3C59" ,fontWeight:'bold' ,fontSize:'30px'}}>Fullstack Web Developer</div> 
<a href="https://www.linkedin.com/in/karima-benihda-3004ba326"  target="_blank" rel="noopener noreferrer">
<button className='linkden_cv_button'> 
  <TbZoom style={{width:"40px" ,height:"27px"}}/>
View my Linkedin
</button>
</a>
    </div>
  )
}

export default Home
