import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Snackbar, CircularProgress } from '@material-ui/core';
import { ISection } from '../interfaces';
import sendEmailJs from '../hooks/sendEmailJs';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact( {contactRef}: ISection ) {
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
    <section id="3" className="section" ref={contactRef}>
      <Typography variant="h2">
        Contact
      </Typography>
      <Typography variant="body1">
        Email: <a href="mailto:turcec.matija@gmail.com">turcec.matija@gmail.com</a>
      </Typography>

      <form id="contact-form" onSubmit={ el => handleSubmit(el) }>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          autoFocus={true}
          value={name}
          required={true}
          onChange={ el => setName(el.target.value) }
        />
        <TextField 
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          required={true}
          onChange={ el => setEmail(el.target.value) }
        />
        <TextField
          id="message"
          label="Message"
          variant="outlined"
          multiline
          rows={8}
          value={message}
          required={true}
          onChange={ el => setMessage(el.target.value) }
        />
        <Button type="submit" disabled={loading}>
          Send message
        </Button>
        {loading && <CircularProgress size={24} />}
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