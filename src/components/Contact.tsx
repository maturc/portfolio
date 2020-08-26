import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Snackbar, CircularProgress } from '@material-ui/core';
import { ISection } from '../interfaces';
import sendEmailJs from '../hooks/sendEmailJs';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact( {contactRef, translation}: ISection ) {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError,   setOpenError]   = useState(false);
  const [loading, setLoading] = useState(false);
  function handleSubmit( el: React.FormEvent<HTMLFormElement> ) {
    el.preventDefault();
    setLoading(true);
    sendEmailJs( name, email, message, setOpenSuccess, setOpenError, setLoading );
  }
  
  const handleClose = ( setter: React.Dispatch<React.SetStateAction<boolean>>, event?: React.SyntheticEvent, reason?: string ) => {
    if (reason === 'clickaway') {
      return;
    }
    setter(false);
  };

  useEffect(() => {
    if(openSuccess) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [openSuccess, setName, setEmail, setMessage]);
  return (
    <section id="3" className="section contact" ref={contactRef}>
      <Typography variant="h2">
        {translation.header}
      </Typography>
      <Typography variant="body1">
        <PhoneIcon className="contact__icon" /><a href="tel:+385 95 505 2586">+385 95 505 2586</a>
      </Typography>
      <Typography variant="body1">
        <MailOutlineIcon className="contact__icon" /><a href="mailto:turcec.matija@gmail.com">turcec.matija@gmail.com</a>
      </Typography>
      <Typography variant="body1">
        <GitHubIcon className="contact__icon" /><a href="https://github.com/maturc">https://github.com/maturc</a>
      </Typography>
      <form id="contact-form" className="contact__form" onSubmit={ el => handleSubmit(el) }>
        <TextField
          id="name"
          label={translation.form.name}
          variant="outlined"
          value={name}
          required={true}
          onChange={ el => setName(el.target.value) }
        />
        <TextField 
          id="email"
          label={translation.form.email}
          variant="outlined"
          type="email"
          value={email}
          required={true}
          onChange={ el => setEmail(el.target.value) }
        />
        <TextField
          id="message"
          label={translation.form.message}
          variant="outlined"
          multiline
          rows={8}
          value={message}
          required={true}
          onChange={ el => setMessage(el.target.value) }
        />
        <div className="contact__button-wrapper">
          <div className="contact__button-wrapper-inner">
            <Button type="submit" disabled={loading} className="contact__button button" color="primary" variant="contained" disableRipple={true}>
              {translation.form.button}
            </Button>
            {loading && <CircularProgress size={24} className="contact__button-progress" />}
          </div>
        </div>
      </form>
      <Snackbar open={openSuccess} autoHideDuration={4000} onClose={ () => handleClose(setOpenSuccess) }>
        <Alert onClose={ () => handleClose(setOpenSuccess) } severity="success">
          Message successfully sent!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={4000} onClose={ () => handleClose(setOpenError) }>
        <Alert onClose={ () => handleClose(setOpenError) } severity="error">
          Error sending message!
        </Alert>
      </Snackbar>
    </section>
  );
}

export default Contact;