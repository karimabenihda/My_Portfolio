import React from 'react'
import {Link} from 'react-router-dom'
import karima from '/karima.png'
import "./index.css"
function Navbar() {
  return (
<div className="container" style={{marginBottom:'40px'}}>
    <nav className="nav justify-content-center  ">
        <Link className="navbar-brand" to="/" ><img src={karima} alt="" /></Link>
        <Link className="nav-link active" to="/" style={{color:'#2A3C59' , fontWeight:'bold',fontStyle: 'normal'}} >Home</Link>
        <Link className="nav-link" to="/about" style={{color:'#2A3C59' , fontWeight:'bold',fontStyle: 'normal'}}>About</Link>
        <Link className="nav-link" to="/skills" style={{color:'#2A3C59' , fontWeight:'bold',fontStyle: 'normal'}}>Skills</Link>
        <Link className="nav-link" to="/projects" style={{color:'#2A3C59' , fontWeight:'bold',fontStyle: 'normal'}}>Projects</Link>
        <Link to="/contact" className="nav-link"  style={{color:'#2A3C59' , fontWeight:'bold',fontStyle: 'normal'}}>Contact</Link>
    </nav>
 












    </div>
  )
}

export default Navbar
