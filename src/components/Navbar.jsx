import React from 'react'

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Dunsin <span>.</span></div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;


