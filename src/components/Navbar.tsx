import React from 'react';
import { INavbar } from '../interfaces';

function Navbar( {aboutRefNav, skillsRefNav, projectsRefNav, contactRefNav}: INavbar ) {
  return (
    <nav className="navbar">
      <ul>
        <a href="#about"    ref={aboutRefNav}   ><li>About</li></a>
        <a href="#skills"   ref={skillsRefNav}  ><li>Skills</li></a>
        <a href="#projects" ref={projectsRefNav}><li>Projects</li></a>
        <a href="#contact"  ref={contactRefNav} ><li>Contact</li></a>
      </ul>
    </nav>
  );
}

export default Navbar;