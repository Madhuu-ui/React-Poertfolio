

import styles from './App.module.css'
import { Navbar } from './components/Navbar/NavBar'
import {Hero} from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
// import ProjectCard from './components/Projects/ProjectCard'
// import {ProjectCrad }from './components/Projects/ProjectCard'




function App() {


  return (
    <div className={styles.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About />
    <Experience/>
    <Projects />
    <Contact />
   {/* <ProjectCard /> */}
  </div>
  )
}

export default App
