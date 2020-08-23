import emailjs from 'emailjs-com';
import { ISendEmail } from '../interfaces';

const sendEmailJs: ISendEmail = (name, email, message, setOpenSuccess, setOpenError, setLoading) => {
  emailjs.init(process.env.REACT_APP_EMAILJS_UID as string);
  const templateParams = {
    name: name,
    email: email,
    message: message
  };
 
  emailjs.send('portfolio_mail','template_portfolio', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       setOpenSuccess(true);
       setLoading(false);
    }, function(err) {
       console.log('FAILED...', err);
       setOpenError(true);
       setLoading(false);
    });
}

export default sendEmailJs;