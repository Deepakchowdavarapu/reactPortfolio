import react from "react";
import './App.css';


import Home from "./Navbar/home/home";
import About from "./Navbar/about/About";
import Contact from "./Navbar/contact/contact";
import Project from "./Navbar/projects/projects.js";
import Navbar from "./Components/Navbar";
import Skills from "./Navbar/Skills/Skills.js";
import Stats from "./Navbar/Statistics/stats.js";
import { Routes, Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
        </Route>

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/stats" element={<Stats />} />

        {/* <Route path="/projects" element={<Project />} /> */}
      </Routes>
      {/* <Skills />
      <Stats /> */}
      <Project/>
    </div>
  );
}

export default App;


