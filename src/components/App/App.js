import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Achievements from '../Achivements/Achievements'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Achievements />
    </div>
  )
}

export default App
