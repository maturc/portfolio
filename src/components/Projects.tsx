import React from 'react';
import CardComponent from './CardComponent';
import lavander from '../assets/lavander.png';
import itcomp from '../assets/itcomp.png';
import algovisualize from '../assets/algovisualize.png';
import { Typography } from '@material-ui/core';
import { ISection } from '../interfaces';

function CardComponentExpanded(props: any) {
  return ( 
    <CardComponent
      {...props}
      imgAlt={props.projectName.alt}
      title={props.projectName.header}
      body={props.projectName.paragraph}
      websiteButton={props.translation.btnWebsite}
      sourceButton={props.translation.btnSource}
    />
  );
}

function Projects( {projectsRef, translation}:ISection ) {
  return (
    <>
    <section id="2" ref={projectsRef}>
      <Typography variant="h2">
        {translation.header}
      </Typography>
      <div className="projects">
        <CardComponentExpanded
          imgUrl={lavander}
          translation={translation}
          projectName={translation.lavander}
          linkToWebsite="https://lavander-chat.herokuapp.com/"
          linkToSource="https://github.com/maturc/lavander"
        />
        <CardComponentExpanded
          imgUrl={itcomp}
          translation={translation}
          projectName={translation.itcomp}
          linkToWebsite="http://maturc.github.io/ITcomp"
          linkToSource="https://github.com/maturc/ITcomp"
        />
        <CardComponentExpanded
          imgUrl={algovisualize}
          translation={translation}
          projectName={translation.algovisualize}
          linkToWebsite="https://maturc.github.io/algo-visualize/index"
          linkToSource="https://github.com/maturc/algo-visualize"
        />
        <CardComponentExpanded
          imgUrl={lavander}
          translation={translation}
          projectName={translation.more}
          moreButton={translation.btnMore}
          linkToSource="https://github.com/maturc/WebDev-practice-projects"
        />
      </div>
    </section>
    </>
  );
}

export default Projects;