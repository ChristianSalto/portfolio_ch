import React from 'react';

import { Header } from './../Header/Header';
import { Footer } from './../Footer/Footer';
import './works.css';
import Img from './img/neumatico.png'


export const Works = () => {
  return (
    <>
      <Header name="Works" />
      <div className="container">
        <div className="cntr-works">
          <div className="project-one">
            <img className="img-neuma" src={Img} alt="neumatico" />
          </div>
          <div className="project-two">
            <a href={Img}>
              <img className="img-neuma" src={Img} alt="neumatico" />
            </a>
          </div>
          <div className="cntr-link">
            <a className="lnk-project" href="http://neumaticocheinwz.com/">Link</a>
          </div>
          <div className="cntr-link">
            <a className="lnk-project" href="http://neumaticocheinwz.com/">Link</a>
          </div>
          <aside>
            Several open source projects in which I have participated in their development,
            one of them is an information blog about music group where they eventually upload
            information about the concerts, dates, photos, etc ...
            and the other connects with an external twitch api that gets information about streaming players and paints them on the web
        </aside>
        </div>
      </div>
      <Footer />
    </>
  )
}
