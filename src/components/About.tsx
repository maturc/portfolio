import React from 'react';
import { Typography } from '@material-ui/core';
import { ISection } from '../interfaces';

function About( {aboutRef}: ISection ) {
  return (
    <section id="0" className="about" ref={aboutRef}>
      <Typography variant="h2">
        About
      </Typography>
      <Typography variant="body1">
        I am a web developer from Croatia with a passion for technology. I am always looking for ways to improve myself in everything I do. I love challenging myself and I want to do interesting things that matter. My curent goal is becoming a fullstack dev
        Feel free to get in touch-?
        v1
      </Typography>
    </section>
  );
}

export default About;