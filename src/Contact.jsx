import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
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
    <div className='container' >
      <h1 className='title' style={{fontSize: '90px'}}>Contact</h1>
      <br/><br/>
      <p className='subtitle'>
        Feel <span className='highlight'>Free</span> to Contact Me
      </p>
      <ol className='list'>
        <li className='item' onClick={() => copyToClipboard('+212 675600489')}>
          <FaPhoneAlt className='icon' />
           {/* +212 675600489 */}
        </li>
        <li className='item' >
          
          <a href="mailto:karimabenihda@gmail.com" style={{color:'#feb7c3',textDecoration:'none'}} target="_blank" rel="noopener noreferrer"><MdOutlineEmail className='icon' /></a> 
        </li>
        <li className='item'>
         <a href="https://github.com/karimabenihda" className='link' style={{color:'#feb7c3'}} target="_blank" rel="noopener noreferrer">           <FaGithub className='icon' /> 
         </a> 
        </li>
      </ol>
    </div>
  );
}

export default Contact;
