import React from 'react';
import './App.css';
import { CssBaseline, Container } from '@material-ui/core';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* footer?? - quick nav links? created by and stuff??
        back to top button? */}
      </Container>
    </>
  );
}

export default App;