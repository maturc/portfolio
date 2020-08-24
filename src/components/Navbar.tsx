import React from 'react';
import { INavbar } from '../interfaces';

function Navbar( {aboutRefNav, skillsRefNav, projectsRefNav, contactRefNav, aboutRef, skillsRef, projectsRef, contactRef}: INavbar ) {
  function handleClick( e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, refObject: React.MutableRefObject<any> ) {
    e.preventDefault();
    refObject.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <nav className="navbar">
      <ul>
        <a href="#0" onClick={e => handleClick(e, aboutRef)}    ref={aboutRefNav}   ><li>About</li></a>
        <a href="#1" onClick={e => handleClick(e, skillsRef)}   ref={skillsRefNav}  ><li>Skills</li></a>
        <a href="#2" onClick={e => handleClick(e, projectsRef)} ref={projectsRefNav}><li>Projects</li></a>
        <a href="#3" onClick={e => handleClick(e, contactRef)}  ref={contactRefNav} ><li>Contact</li></a>
      </ul>
    </nav>
  );
}

export default Navbar;