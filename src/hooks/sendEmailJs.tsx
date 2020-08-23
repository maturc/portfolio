import emailjs from 'emailjs-com';

function sendEmailJs(name: string, email: string, message: string, setOpenSuccess: React.Dispatch<React.SetStateAction<boolean>>, setOpenError: React.Dispatch<React.SetStateAction<boolean>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  emailjs.init(process.env.REACT_EMAILJS_UID);
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