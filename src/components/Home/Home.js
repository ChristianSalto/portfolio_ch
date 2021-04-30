import React from 'react';

import { Logo } from '../Logo/Logo';
import { Title } from '../Title/Title';
import { Nav } from '../Nav/Nav';
import './home.css';

export const Home = () => {
  return (
    <>
      <div className="cntr-home">
        <Logo />
        <Title />
        <Nav />
      </div>
    </>
  )
}