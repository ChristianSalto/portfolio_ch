import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css'

export const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to={{
          pathname: '/skills',
        }}>SKILLS</Link>
        {/* <Link to={{
          pathname: '/works',
        }}>WORKS</Link> */}
        <Link to={{
          pathname: '/about',
        }}>ABOUT</Link>
        <Link to={{
          pathname: '/contact',
        }} >CONTACT</Link>
      </ul>
    </nav >
  )
}
