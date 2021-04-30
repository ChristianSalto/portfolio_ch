import React from 'react';

import { Home } from './../Home/Home';
import { Footer } from './../Footer/Footer';
import './main.css'

export const Main = () => {
  return (
    <div className="cntr-main">
      <Home />
      <Footer />
    </div>
  )
}