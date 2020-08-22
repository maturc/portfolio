import React from 'react';
import { Typography } from '@material-ui/core';
import { ISection } from '../interfaces';

function Intro( {introRef}: ISection) {
  return (
    <div id="intro" className="intro" ref={introRef}>
      <Typography variant="h1" align="center">
        Matija Turčec
      </Typography>
      <Typography variant="subtitle1" component="h2" align="center">
        Web Developer
      </Typography>
    </div>
  );
}

export default Intro;