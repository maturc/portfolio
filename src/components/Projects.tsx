import React from 'react';
import CardComponent from './CardComponent';
import lavander from '../assets/lavander.png';
import itcomp from '../assets/itcomp.png';
import algovisualize from '../assets/algovisualize.png';
import { Typography } from '@material-ui/core';
import { ISection } from '../interfaces';

function Projects( {projectsRef}:ISection ) {
  return (
    <>
    <section id="2" ref={projectsRef}>
      <Typography variant="h2">
          Projects
      </Typography>
      <div className="projects">
        <CardComponent
          imgUrl={lavander}
          imgAlt="Chat application"
          title="Lavander"
          body="Fullstack chat application"
          linkToWebsite="https://lavander-chat.herokuapp.com/"
          linkToSource="https://github.com/maturc/lavander"
        />
        <CardComponent
          imgUrl={itcomp}
          imgAlt="Static website"
          title="ITcomp"
          body="Static website"
          linkToWebsite="http://maturc.github.io/ITcomp"
          linkToSource="https://github.com/maturc/ITcomp"
        />
        <CardComponent
          imgUrl={algovisualize}
          imgAlt="Interactive algorithm"
          title="AlgoVizualize"
          body="Interactive breadth first search algorithm"
          linkToWebsite="https://maturc.github.io/algo-visualize/index"
          linkToSource="https://github.com/maturc/algo-visualize"
        />
        <CardComponent
          imgUrl={lavander}
          imgAlt=""
          title="More"
          body="Check out more of my work"
          linkToWebsite=""
          linkToSource="https://github.com/maturc/WebDev-practice-projects"
        />
      </div>
    </section>
    </>
  );
}

export default Projects;