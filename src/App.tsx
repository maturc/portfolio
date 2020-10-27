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
import LanguageDropdown from './components/LanguageDropdown';
import SvgAnimation from './components/SvgAnimation';
//languages
import english from './languages/english.json';
//import hrvatski from './languages/hrvatski.json';
//import deutsch from './languages/deutsch.json';

function App() {
  //language
  const [language, setLanguage] = useState(english);

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
      <Container>
        <LanguageDropdown language={language.language} setLanguage={setLanguage} />
        <Intro introRef={introRef} />
        <Navbar
          aboutRefNav={aboutRefNav}
          skillsRefNav={skillsRefNav}
          projectsRefNav={projectsRefNav}
          contactRefNav={contactRefNav}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          translation={language.nav}
        />

        <SvgAnimation />
        <div style={{height: "15vh", width: "100%"}}></div>
        
        <About    aboutRef={aboutRef}       translation={language.about} />
        <Skills   skillsRef={skillsRef}     translation={language.skills} />
        <Projects projectsRef={projectsRef} translation={language.projects} />
        <Contact  contactRef={contactRef}   translation={language.contact} />
      </Container>
    </>
  );
}

export default App;