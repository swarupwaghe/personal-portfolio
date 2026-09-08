import React from 'react';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-logo">SW</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>
      </div>
    </nav>
  );
}
