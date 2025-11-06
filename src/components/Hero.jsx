import React from 'react';
import heroImage from '../assets/Imagen1.png';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          <h1 id="hero-title">¿Cumples con las normativas de accesibilidad universal?</h1>
          <p>
            Actualiza tu proyecto con accesibilidad en la información y lleva tu
            mensaje a todas las personas.
          </p>
          <a href="#contact" className="btn-primary">Contacta con nosotros →</a>
        </div>
        <img className="hero-image" src={heroImage} alt="Ilustración del proyecto de accesibilidad" loading="lazy" />
      </div>
    </section>
  );
}


