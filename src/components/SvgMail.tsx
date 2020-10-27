import React from 'react';
import {ReactComponent as Svg} from '../assets/mail.svg';
import '../styles/SvgMail.css';

function SvgMail() {
  return (
    <div>
      <Svg className="mail" />
    </div>
  );
}

export default SvgMail;