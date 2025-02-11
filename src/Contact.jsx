import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";

import './contact.css';

function Contact() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      alert('Failed to copy text: ', err);
    });
  };

  return (
    <div className='container1' >
      <h1 className='title' style={{fontSize: '90px'}}>Contact</h1>
      <div className='all'>
      <div className='aside1'>
      <br/><br/>
      <p className='subtitle'>
        Feel <span className='highlight'>Free</span> to Contact Me
      </p>
      {/* <div>Contact info :</div><br/> */}
      {/* <ol className='list'> */}
      <ol style={{justifyContent:'center'}}>
        <li className='item' onClick={() => copyToClipboard('+212 675600489')}>
          <FaPhoneAlt className='icon'  />
           {/* +212 675600489 */}
        </li>
        <li className='item' >
          
          <a href="mailto:karimabenihda@gmail.com" style={{color:'#feb7c3',textDecoration:'none'}} target="_blank" rel="noopener noreferrer"><MdOutlineEmail className='icon' /></a> 
        </li>
        <li className='item'>
         <a href="https://github.com/karimabenihda" className='link' style={{color:'#feb7c3'}} target="_blank" rel="noopener noreferrer">           <FaGithub className='icon' /> 
         </a> 
        </li>
        <li className='item'>
         <a href="https://www.linkedin.com/in/karima-benihda-3004ba326/" className='link' style={{color:'#feb7c3'}} target="_blank" rel="noopener noreferrer">           <LiaLinkedinIn className='icon' /> 
         </a> 
        </li>
      </ol>
      </div>

      <div className="aside2">
        
      <form
  action="https://formspree.io/f/mnnjjdpg"
  method="POST">
    <h3 >Contact me Here</h3>
<label className='form-label'>
   
    <input type="text" placeholder='Your name:' name="name" className='form-control'/><FaUserAlt className='form-icon'/>
  </label>
  <label className='form-label'>

    <input type="email" placeholder='Your email:' name="email"  className='form-control'/><MdEmail className='form-icon'/>
  </label>
  <label className='form-label'>
    
    <textarea name="message" placeholder='Your message:' className='form-control'></textarea><MdMessage className='form-icon'/>
  </label>
  <button type="submit" className='send'>Send</button>
</form>
      </div>
      </div>
      <hr />
     <span style={{fontSize:'12px'}} > © 2025 Karima BENIHDA. All rights reserved.</span>

    </div>
  );
}

export default Contact;
