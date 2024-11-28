import React from 'react'; 
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5, IoMdArrowDropright } from "react-icons/io";
import { FaCss3Alt, FaReact, FaPython, FaPhp, FaBootstrap } from "react-icons/fa";
import { TbBrandLaravel } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa6";
import { SiMysql, SiMongodb } from "react-icons/si";

import './skills.css';

function Skills() {
  return (
    <div className='container'>
      <div className='text-center' style={{ color: "#feb7c3", fontWeight: 'bold', fontSize: '53px', fontStyle: "normal", fontFamily: 'arial,sans-serif' }}>
        My Skills
      </div>

      <div className='Languages'>
        <h3 style={{ fontSize: '35px' }}>Hard Skills</h3>
        <p className='desc'>Here are the technical skills I’ve mastered, ranging from programming languages to web development frameworks and tools I use in my projects.</p>
        
        <h3>Languages</h3>
        <ul>
          <li className='skill'>
            <span><FaPhp style={{ height: '30px', width: '43px' }} /></span>
            <div className='progress-container'>
              <div className="progress-bar" style={{ width: "80%", backgroundColor: '#feb7c3' }}></div>
              <div className="percentage">80%</div>
            </div>
          </li>
          <li className='skill'>
            <span><IoLogoJavascript style={{ height: '30px', width: '43px' }} /></span>
            <div className='progress-container'>
              <div className="progress-bar" style={{ width: "70%", backgroundColor: '#feb7c3' }}></div>
              <div className="percentage">70%</div>
            </div>
          </li>
          <li className='skill'>
            <span style={{ display: 'flex', marginLeft: '-43px' }}>
              <IoLogoHtml5 style={{ height: '30px', width: '43px' }} />
              <FaCss3Alt style={{ height: '30px', width: '43px' }} />
            </span>
            <div className='progress-container'>
              <div className="progress-bar" style={{ width: "90%", backgroundColor: '#feb7c3' }}></div>
              <div className="percentage">90%</div>
            </div>
          </li>
          <li className='skill'>
            <span><FaPython style={{ height: '30px', width: '43px' }} /></span>
            <div className='progress-container'>
              <div className="progress-bar" style={{ width: "50%", backgroundColor: '#feb7c3' }}></div>
              <div className="percentage">50%</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="web_development">
        <h3>Web Development</h3>
        <ul>
          <li className='skill'>
            <span><FaReact style={{ height: '30px', width: '43px' }} /></span>
            <div className='progress-container'>
              <div className="progress-bar" style={{ width: "70%", backgroundColor: '#feb7c3' }}></div>
              <div className="percentage">70%</div>
            </div>
          </li>
          <li className='skill'>
            <span><TbBrandLaravel style={{ height: '30px', width: '43px' }} /></span>
            <div className='progress-container'>
              <div className="progress-bar" style={{ width: "70%", backgroundColor: '#feb7c3' }}></div>
              <div className="percentage">70%</div>
            </div>
          </li>
          <li className='skill'>
            <span style={{ display: 'flex', marginLeft: '-43px' }}>
              <FaBootstrap style={{ height: '30px', width: '43px' }} />
              <RiTailwindCssFill style={{ height: '30px', width: '43px' }} />
            </span>
            <div className='progress-container'>
              <div className="progress-bar" style={{ width: "90%", backgroundColor: '#feb7c3' }}></div>
              <div className="percentage">90%</div>
            </div>
          </li>
          <li className='skill'>
            <span><FaVuejs style={{ height: '30px', width: '43px' }} /></span>
            <div className='progress-container'>
              <div className="progress-bar" style={{ width: "70%", backgroundColor: '#feb7c3' }}></div>
              <div className="percentage">70%</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="Databases">
        <h3>Databases</h3>
        <ul>
          <li className='skill'>
            <span><SiMysql style={{ height: '45px', width: '50px',marginTop:'-10' }} /></span>
            <div className='progress-container'>
              <div className="progress-bar" style={{ width: "75%", backgroundColor: '#feb7c3' }}></div>
              <div className="percentage">75%</div>
            </div>
          </li>
          <li className='skill'>
            <span><SiMongodb style={{ height: '30px', width: '43px' }} /></span>
            <div className='progress-container'>
              <div className="progress-bar" style={{ width: "80%", backgroundColor: '#feb7c3' }}></div>
              <div className="percentage">80%</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
