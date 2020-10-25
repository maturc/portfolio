import React from 'react';
import { Typography } from '@material-ui/core';
import { ISection } from '../interfaces';

function Skills( {skillsRef, translation}: ISection ) {
  return (
    <section id="1" className="section skills" ref={skillsRef}>
      <Typography variant="h2">
        {translation.header}
      </Typography>
      <Typography variant="body1" component="ul">
        <li>{translation.languages}</li>
        <li>
          <ul>
            <li><span>JavaScript</span> <span>Typescript</span> <span>HTML</span> <span>CSS</span></li>
          </ul>
        </li>
        <li>{translation.frameworks}</li>
        <li>
          <ul>
            <li><span>React</span> <span>Angular</span> <span>Express</span> <span>Material UI</span> <span>Bootstrap</span></li>
          </ul>
        </li>
        <li>{translation.databases}</li>
        <li>
          <ul>
            <li><span>MySQL</span> <span>MongoDB</span></li>
          </ul>
        </li>
        <li>{translation.technologies}</li>
        <li>
          <ul>
            <li><span>Git</span> <span>Node</span> <span>SASS</span> <span>jQuery</span></li>
          </ul>
        </li>
        <li>{translation.bundlers}</li>
        <li>
          <ul>
            <li><span>Webpack</span></li>
          </ul>
        </li>
        <li>{translation.tools}</li>
        <li>
          <ul>
            <li><span>Photoshop</span> <span>Microsoft Office</span> <span>Open Office</span></li>
          </ul>
        </li>
      </Typography>
    </section>
  );
}

export default Skills;