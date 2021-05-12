import React from 'react';


import { Footer } from './../Footer/Footer';
import { Header } from './../Header/Header';
import icons from './icons.json';
import './skills.css';
import './icons.css';

export const Skills = () => {



  return (
    <>
      <Header name="Skills" />

      {/**************** Card Nebe *******************/}

      <div className="cntr-skills card">
        {icons.map((icon, index) =>
          <div key={index} className={Object.keys(icon)[0]}>
            <span className={Object.values(icon)[0]}>{Object.keys(icon)[0]}</span>
            <ul>
              {/* <li>
                Level:
                {Object.values(icon)[3].map((star, index) =>
                star === 1 ? (
                  <span key={index} className="star">&#9733;</span>
                ) : (
                  <span key={index} className="star-white">&#9733;</span>
                )
              )}
              </li> */}
              <li>
                {/* <u>Description:<br /></u> */}
                <i>{Object.values(icon)[2]}.</i>
              </li>
              <li>
                <a className="lnk-project" href={Object.values(icon)[1]}>Link</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/***********************************/}
      <aside>
        Notification &#10071; All the links that I show in each of the skills are just some of the examples of all the projects I have done,
        to see all the projects please go  &#10174;  <a className="lnk-project" href="https://github.com/ChristianSalto?tab=repositories">Link</a>
      </aside>
      <Footer />
    </>
  )
}
