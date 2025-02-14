import React from 'react';
import './project.css';
import { FaEye, FaGithub } from 'react-icons/fa';
import { MdOutlineOpenInNew } from "react-icons/md";

function Projects() {
  const projectData = [
    {
      name: "ShopCatalogue",
      description: "ShopCatalogue is a React digital catalogue that uses Fetch API and radio buttons for filtering products by category and price.",
      language: "React",
      link: "https://github.com/karimabenihda/ShopCatalogue",
      site:"https://shop-catalogue-sigma.vercel.app/"
    },
    {
      name: "Tkinter-Computer-Buying-App",
      description: "A Tkinter app for selecting a computer model and calculating discounts.",
      language: "Python",
      link: "https://github.com/karimabenihda/Tkinter-Computer-Buying-App",
      site:'https://github.com/karimabenihda/Tkinter-Computer-Buying-App'
    },
    {
      name: "CLASSIK BMC",
      description: "Digital platform developed by CLASSIK members for filling out the different sections of a Business Model Canvas (BMC).",
      language: "React",
      link: "https://github.com/karimabenihda/CLASSIC_BMC",
      site:"https://classic-bmc.vercel.app/"
    },
    {
      name: "HappyDonut",
      description: "Donuts Shoping Cart allows users to Browse donuts by category, add to cart, adjust quantities, and view total price for checkout",
      language: "React ",
      link: "https://github.com/karimabenihda/Happy_Donuts_Store",
      site:'https://happy-donuts-store.vercel.app/'
    },
    {
      name: "Fontify",
      description: "Type a text and instantly transforms it into various fonts, ready to copy and use anywhere",
      language: "React ",
      link: "https://github.com/karimabenihda/Fontify",
      site:'https://fontify-font.vercel.app/'
    }
  ];

  return (
    <div className='container'>
      <h2 className='title'>My Projects</h2><br /><br />
      <div className='projects-grid'>
        {projectData.map((project, index) => (
          <div className='project-card' key={index}>
            <h4 style={{ color: "#ff8fb2" }}>{project.name}</h4><hr />
            <p>{project.description}</p>
            <p><strong>Tools:</strong> <span style={{ color: "#ff8fb2" }}>{project.language}</span></p>
            <span style={{display:"flex"}} id="btns">
              <a href={project.site} target='_blank' rel='noopener noreferrer' className='project-link'>
                <MdOutlineOpenInNew className='icon' style={{width:'40px'}}/>
                <span className="link-text">Open Website</span>
              </a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href={project.link} target='_blank' rel='noopener noreferrer' className='project-link'>
                <FaGithub className='icon' style={{width:'40px'}}/>
                <span className="link-text" >View on GitHub</span>
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

