import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { CssBaseline, Container } from '@material-ui/core';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import useSectionInView from './hooks/useSectionInView';

function App() {
  const [sectionArray, setSectionArray] = useState<Array<HTMLElement>>([]);
  const [navArray, setNavArray] = useState<Array<HTMLElement>>([]);
  //nav refs
  const aboutRefNav    = useRef<any>(null);
  const skillsRefNav   = useRef(null);
  const projectsRefNav = useRef(null);
  const contactRefNav  = useRef(null);
  //section refs
  const introRef    = useRef<any>(null);
  const aboutRef    = useRef(null);
  const skillsRef   = useRef(null);
  const projectsRef = useRef(null);
  const contactRef  = useRef(null);
  
  useEffect(() => {
    setSectionArray([introRef.current, aboutRef.current, skillsRef.current, projectsRef.current, contactRef.current]);
    setNavArray([aboutRefNav.current, skillsRefNav.current, projectsRefNav.current, contactRefNav.current]);
  }, [aboutRef, skillsRef, projectsRef, contactRef]);
  useSectionInView( sectionArray, navArray );
  
  return (
    <>
      <CssBaseline />
      <div style={{position: "fixed", top:"0", right:"0", left:"0", bottom:"0", border: "1px solid blue", maxHeight: "100vh", width: "100%", margin: "5% 0px 90%"}}></div>
      <Container>
        <Intro introRef={introRef} />
        <Navbar
          aboutRefNav={aboutRefNav}
          skillsRefNav={skillsRefNav}
          projectsRefNav={projectsRefNav}
          contactRefNav={contactRefNav}
        />
        <About    aboutRef={aboutRef} />
        <Skills   skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
        <Contact  contactRef={contactRef} />
        {/* footer?? - quick nav links? created by and stuff??
        back to top button? */}
      </Container>
    </>
  );
}

export default App;