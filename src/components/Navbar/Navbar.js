import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <div>
          <a href="#home" className="px-4">
            Home
          </a>
          <a href="#skills" className="px-4">
            Skills
          </a>
          <a href="#projects" className="px-4">
            Projects
          </a>
          <a href="#achievements" className="px-4">
            Achievements
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
