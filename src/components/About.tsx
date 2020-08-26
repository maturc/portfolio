import React from 'react';
import { Typography } from '@material-ui/core';
import { ISection } from '../interfaces';

function About( {aboutRef, translation}: ISection ) {
  return (
    <section id="0" className="about section_animation" ref={aboutRef}>
      <Typography variant="h2">
        {translation.header}
      </Typography>
      <Typography variant="body1">
        {translation.paragraph}
      </Typography>
    </section>
  );
}

export default About;