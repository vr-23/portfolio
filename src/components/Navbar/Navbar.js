import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 w-full p-4 text-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <div>
          <a href="#home" className="px-4">
            Home
          </a>
          <a href="#skills" className="px-4">
            Skills
          </a>
          <a href="#education" className="px-4">
            Education
          </a>
          <a href="#experience" className="px-4">
            Experience
          </a>
          <a href="#certifications" className="px-4">
            Certifications
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
  );
};

export default Navbar;
