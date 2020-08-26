import React from 'react';
import { INavbar } from '../interfaces';

function Navbar( {aboutRefNav, skillsRefNav, projectsRefNav, contactRefNav, aboutRef, skillsRef, projectsRef, contactRef, translation}: INavbar ) {
  function handleClick( e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, refObject: React.MutableRefObject<any> ) {
    e.preventDefault();
    refObject.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#0" onClick={e => handleClick(e, aboutRef)}    ref={aboutRefNav}   >{translation.about}</a></li>
        <li><a href="#1" onClick={e => handleClick(e, skillsRef)}   ref={skillsRefNav}  >{translation.skills}</a></li>
        <li><a href="#2" onClick={e => handleClick(e, projectsRef)} ref={projectsRefNav}>{translation.projects}</a></li>
        <li><a href="#3" onClick={e => handleClick(e, contactRef)}  ref={contactRefNav} >{translation.contact}</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;