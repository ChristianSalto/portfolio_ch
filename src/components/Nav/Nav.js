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
        <Link to={{
          pathname: '/work',
          name: 'work'
        }}>WORK</Link>
        <Link to={{
          pathname: '/about',
          name: 'about'
        }}>ABOUT</Link>
        <Link to={{
          pathname: '/contact',
          name: 'contact'
        }} >CONTACT</Link>
      </ul>
    </nav >
  )
}
