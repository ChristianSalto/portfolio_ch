import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export const Header = ({ name }) => {
  return (
    <div className="cntr-header">
      <h1>{name}</h1>
      <Link to="/" className="lnk" >
        <span>&#5589;</span>
      </Link>
    </div>
  )
}
