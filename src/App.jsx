import { BrowserRouter as Router, Routes, Route } from 'react-router'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  

  return (
    <>
      <Router>
      <Navbar style={{ position: 'sticky', top: '0', zIndex: '1000' }} />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/navbar" element={<Navbar/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>

        </Routes>
      </Router>
      <br />
    </>
  )
}

export default App
