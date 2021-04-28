import React from 'react';
import { Link } from 'react-router-dom';

import { Footer } from './../Footer/Footer';
import icons from './icons.json'
import './skills.css';
import './icons.css';

export const Skills = () => {


  return (
    <>
      <div className="cntr-header-skll">
        <h1>Skills</h1>
        <Link to="/" className="lnk" >
          <span>&#5589;</span>
        </Link>
      </div>
      <div className="cntr-skills">
        {icons.map((icon, index) =>
          <div key={index} className={Object.keys(icon)[0]}>
            <span className={Object.values(icon)[0]}>{Object.keys(icon)[0]}</span>
            <ul>
              <li>
                Lavel:
                {Object.values(icon)[3].map(star =>
                star === 1 ? (
                  <span className="star">&#9733;</span>
                ) : (
                  <span className="star-white">&#9733;</span>
                )
              )}
              </li>
              <li>
                <a className="lnk-project" href={Object.values(icon)[1]}>Link to project</a>
              </li>
              <li>
                <u>Description:<br /></u>
                <i>{Object.values(icon)[2]}.</i>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
