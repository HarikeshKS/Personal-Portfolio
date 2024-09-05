import React from 'react';
import '../assets/styles/Navbar.css';

function Navbar() {
  return (
    <div id="nav">
      <div id="nleft">
        <img src="/assets/hks-1-logo-png-transparent.png" alt="logo-HKS" />
        <a href="/projects" className="hover-underline-animation">My Work</a>
        <a href="https://www.youtube.com/@MechsMusicBBX" target="_blank" rel="noopener noreferrer" className="hover-underline-animation">YOUTUBE</a>
      </div>
      <div id="nright">
        <a href="https://drive.google.com/file/d/1UmmhJsg5xSi93cSRO2CYkRW688kyEIWx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover-underline-animation">Download Resume</a>
        <a href="/contact" className="hover-underline-animation">Contact Me</a>
      </div>
    </div>
  );
}

export default Navbar;
