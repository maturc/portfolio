import React from 'react';
import { Typography } from '@material-ui/core';

function Intro() {
  return (
    <>
      <Typography variant="h1" align="center">
        Matija Turčec
      </Typography>
      <Typography variant="subtitle1" component="h2" align="center">
        Web Developer
      </Typography>
    </>
  );
}

export default Intro;