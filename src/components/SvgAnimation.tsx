import React from 'react';
import {ReactComponent as Svg} from '../assets/portfolio.svg';
import '../styles/SvgAnimation.css';

function SvgAnimation() {
  return (
    <div>
      <Svg className="animation" />
    </div>
  );
}

export default SvgAnimation;