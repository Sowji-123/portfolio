import './App.css'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from './components/About';

import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';




function App() {
 
  return (
   <div className="bg-[#17637E]">
   <NavBar />
   <Home />
   <About />
   
   <Skills />
   <Project />
   <Contact />
   
  
   </div>
  )
}

export default App
