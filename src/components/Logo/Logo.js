import React from 'react';

import Img from './img/keepcoding-original.jpg'
import './logo.css';

export const Logo = () => {
  return (
    <div className="logo">
      <img src={Img} alt="keepcoding-original.jpg" />
    </div>
  )
}