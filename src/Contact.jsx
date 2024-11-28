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
    <div className='container'>
      <h1 className='title'>Contact</h1>
      <p className='subtitle'>
        Feel <span className='highlight'>Free</span> to Contact Me
      </p>
      <ol className='list'>
        <li className='item' onClick={() => copyToClipboard('+212 675600489')}>
          <FaPhoneAlt className='icon' /> +212 675600489
        </li>
        <li className='item' onClick={() => copyToClipboard('karimabenihda@gmail.com')}>
          <MdOutlineEmail className='icon' /> karimabenihda@gmail.com
        </li>
        <li className='item'>
          <FaGithub className='icon' /> 
          <a href="https://github.com/karimabenihda" className='link' style={{color:'#feb7c3'}}>github.com/karimabenihda</a>
        </li>
      </ol>
    </div>
  );
}

export default Contact;
