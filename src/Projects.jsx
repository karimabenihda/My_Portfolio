import React from 'react';
import './project.css';
import { FaEye, FaGithub } from 'react-icons/fa';

function Projects() {
  const projectData = [
    {
      name: "React-App-ProductManagement",
      description: "React app that uses Fetch API and radio buttons for filtering products by category and price.",
      language: "JavaScript",
      link: "https://github.com/karimabenihda/React-App-ProductManagement"
    },
    {
      name: "Tkinter-Computer-Buying-App",
      description: "A Tkinter app for selecting a computer model and calculating discounts.",
      language: "Python",
      link: "https://github.com/karimabenihda/Tkinter-Computer-Buying-App"
    },
    {
      name: "store_authentification",
      description: "User authentication for an online store.",
      language: "JavaScript",
      link: "https://github.com/karimabenihda/store_authentification"
    },
    {
      name: "BookManager-PHP-CRUD",
      description: "PHP CRUD app for book management with jQuery and AJAX.",
      language: "PHP",
      link: "https://github.com/karimabenihda/BookManager-PHP-CRUD"
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
            <p><strong>Language:</strong> <span style={{ color: "#ff8fb2" }}>{project.language}</span></p>
            <span style={{display:"flex"}} id="btns">
              <a href={project.site} target='_blank' rel='noopener noreferrer' className='project-link'>
                <FaEye className='icon' />
                <span className="link-text">Open Website</span>
              </a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href={project.link} target='_blank' rel='noopener noreferrer' className='project-link'>
                <FaGithub className='icon' />
                <span className="link-text">View on GitHub</span>
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

