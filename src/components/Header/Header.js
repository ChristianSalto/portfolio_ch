import React from 'react';

import { Logo } from './../Logo/Logo';
import { Title } from './../Title/Title';
import { Nav } from './../Nav/Nav';
import './header.css';

export const Header = () => {
  return (
    <div className="cntr-header">
      <Logo />
      <Title />
      <Nav />
    </div>
  )
}