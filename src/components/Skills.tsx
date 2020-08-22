import React from 'react';
import { Typography } from '@material-ui/core';
import { ISection } from '../interfaces';

function Skills( {skillsRef}: ISection ) {
  return (
    <section id="1" className="section skills" ref={skillsRef}>
      <Typography variant="h2">
        Web development skills
      </Typography>
      <Typography variant="body1" component="ul">
        <li>Technologies:</li>
          <ul>
            <li>JavaScript, Typescript, Node, Git, SASS, CSS, HTML, jQuery</li>
          </ul>
        <li>Frameworks:</li>
          <ul>
            <li>React, Express, Material UI</li>
          </ul>
        <li>Database:</li>
          <ul>
            <li>MySQL, MongoDB</li>
          </ul>
        <li>Bundlers:</li>
          <ul>
            <li>Webpack</li>
          </ul>
        <li>Tools:</li>
          <ul>
            <li>Photoshop, Microsoft Office, Open Office</li>
          </ul>
        <li>BEM methodology?</li>
      </Typography>
    </section>
  );
}

export default Skills;