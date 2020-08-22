import React from 'react';
import { Typography } from '@material-ui/core';
import { ISection } from '../interfaces';

function Contact( {contactRef}: ISection ) {
  return (
    <section id="3" className="section" ref={contactRef}>
      <Typography variant="h2">
        Contact
      </Typography>
      <Typography variant="body1">
        Email: <a href="mailto:turcec.matija@gmail.com">turcec.matija@gmail.com</a>
      </Typography>
    </section>
  );
}

export default Contact;