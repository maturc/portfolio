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
        <li>Languages:</li>
          <ul>
            <li><span>JavaScript</span> <span>Typescript</span> <span>HTML</span> <span>CSS</span></li>
          </ul>
        <li>Frameworks:</li>
          <ul>
            <li><span>React</span> <span>Express</span> <span>Material UI</span></li>
          </ul>
        <li>Database:</li>
          <ul>
            <li><span>MySQL</span> <span>MongoDB</span></li>
          </ul>
        <li>Technologies:</li>
          <ul>
            <li><span>Git</span> <span>Node</span> <span>SASS</span> <span>jQuery</span></li>
          </ul>
        <li>Bundlers:</li>
          <ul>
            <li><span>Webpack</span></li>
          </ul>
        <li>Tools:</li>
          <ul>
            <li><span>Photoshop</span> <span>Microsoft Office</span> <span>Open Office</span></li>
          </ul>
      </Typography>
    </section>
  );
}

export default Skills;