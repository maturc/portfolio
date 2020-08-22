import React from 'react';
import { Typography } from '@material-ui/core';

function Contact() {
  return (
    <section id="contact" className="section">
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