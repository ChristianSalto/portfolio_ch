import React from 'react';

import { Header } from './../../components/Header/Header';
import { Footer } from './../../components/Footer/Footer';

import './about.css';

export const About = () => {
  return (
    <div>
      <Header name="About" />
      <div className="cntr-about">
        <h2>Who I am?</h2>
        <p>
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
          o de borradores de diseño para probar el diseño visual antes de insertar el texto final
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías
          o de borradores de diseño para probar el diseño visual antes de insertar el texto final
        </p>
      </div>
      <Footer />
    </div>
  )
}
