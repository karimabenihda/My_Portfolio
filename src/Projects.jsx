import React from 'react';
import './project.css'
import { FaEye } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Projects() {
const projectData = [
  {
    name: "React-App-ProductManagement",
    description: "React app that uses Fetch API and radio buttons for filtering products by category and price.",
    language: "JavaScript",
    image: "path/to/react-app-image.jpg",
    link: "https://github.com/karimabenihda/React-App-ProductManagement"
  },
  {
    name: "Tkinter-Computer-Buying-App",
    description: "A Tkinter app for selecting a computer model and calculating discounts.",
    language: "Python",
    image: "path/to/tkinter-app-image.jpg",
    link: "https://github.com/karimabenihda/Tkinter-Computer-Buying-App"
  },
  {
    name: "store_authentification",
    description: "User authentication for an online store.",
    language: "JavaScript",
    image: "path/to/store-auth-image.jpg",
    link: "https://github.com/karimabenihda/store_authentification"
  },
  {
    name: "BookManager-PHP-CRUD",
    description: "PHP CRUD app for book management with jQuery and AJAX.",
    language: "PHP",
    image: "path/to/bookmanager-image.jpg",
    link: "https://github.com/karimabenihda/BookManager-PHP-CRUD"
  }
];


  return (
    <div className='container'>
      <h2 className='title'>My Projects</h2><br /><br />
      <div className='projects-grid'>
        {projectData.map((project, index) => (
          <div className='project-card' key={index}>
            {/* <img src={project.image} alt={project.name} className='project-image' /> */}
            <h3 style={{color:"#ff8fb2"}}>{project.name}</h3><hr />
            <p>{project.description}</p>
            <p><strong >Language:</strong> <span style={{color:"#ff8fb2"}}>{project.language}</span></p>
            <span><a href={project.site} target='_blank' rel='noopener noreferrer' className='project-link'> <FaEye/> Open Website
            </a>
            <a href={project.link} target='_blank' rel='noopener noreferrer' className='project-link'> <FaGithub/> View on GitHub</a></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
