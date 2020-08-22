import React from 'react';
import CardComponent from './CardComponent';
import lavander from '../assets/lavander.png';
import itcomp from '../assets/itcomp.png';
import algovisualize from '../assets/algovisualize.png';
import { Typography } from '@material-ui/core';

function Projects() {
  return (
    <>
    <section id="projects">
      <Typography variant="h2">
          Projects
      </Typography>
      <div className="projects">
        <CardComponent imgUrl={lavander}      imgAlt="Chat application"      title="Lavander" body="Fullstack chat application"/>
        <CardComponent imgUrl={itcomp}        imgAlt="Static website"        title="ITcomp" body="Static website"/>
        <CardComponent imgUrl={algovisualize} imgAlt="Interactive algorithm" title="AlgoVizualize" body="Interactive breadth first search algorithm"/>
        <CardComponent imgUrl={lavander}      imgAlt=""                      title="More" body="Check out more of my work"/>
      </div>
    </section>
    </>
  );
}

export default Projects;