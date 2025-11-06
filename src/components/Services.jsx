import React from 'react';
import serviciosImage from '../assets/Servicios.png';
import braille1 from '../assets/braille1.png';
import braille2 from '../assets/braille2.png';
import braille3 from '../assets/braille3.png';
import braille4 from '../assets/braille4.png';

function ServiceCard({ title, subtitle, brailleImage }) {
  return (
    <article className="card service-card" tabIndex="0">
      <div className="card-media" role="img" aria-label={title}>
        {brailleImage && <img src={brailleImage} alt="" className="braille-icon" />}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </article>
  );
}

const SERVICES_CARDS = [
  { title: 'Accesibilidad en comunicación', subtitle: 'Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida', brailleImage: braille2 },
  { title: 'Servicios de digitalización', subtitle: 'Nullam facilisis ligula et enim ultrices sagittis Aenean at felis eget', brailleImage: braille3 },
  { title: 'Diagnósticos y planes estratégicos', subtitle: 'Aliquam vitae mauris non augue sollicitudin porttitorodio vehicula', brailleImage: braille4 },
  { title: 'Evacuación y emergencia', subtitle: 'Donec et nibh facilisis, lobortis lacus non, viverra ante integer', brailleImage: braille1 },
  { title: 'Formación en inclusión', subtitle: 'Nullam facilisis ligula et enim ultrices sagittis Aenean at felis eget', brailleImage: braille2 },
  { title: 'Restauración inclusiva', subtitle: 'Donec et nibh facilisis. lobortis lacus non, viverra ante integer', brailleImage: braille3 },
  { title: 'Simulación de entornos 3D', subtitle: 'Donec et nibh facilisis, lobortis lacus non, viverra ante integer', brailleImage: braille4 }
];

export default function Services() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title">Servicios</h2>
        <div className="services-cards-grid services-cards-grid-top">
          {SERVICES_CARDS.slice(0, 4).map((card, idx) => (
            <ServiceCard key={idx} title={card.title} subtitle={card.subtitle} brailleImage={card.brailleImage} />
          ))}
        </div>
        <div className="services-cards-grid services-cards-grid-bottom">
          {SERVICES_CARDS.slice(4).map((card, idx) => (
            <ServiceCard key={idx + 4} title={card.title} subtitle={card.subtitle} brailleImage={card.brailleImage} />
          ))}
        </div>
        <div className="services-image-wrapper">
          <img src={serviciosImage} alt="Servicios de accesibilidad universal" className="services-image" loading="lazy" />
          <div className="services-content">
            <h3 className="services-title">
              <span className="services-title-small">Somos consultores en</span>
              <span className="services-title-large">Accesibilidad Universal</span>
            </h3>
            <p className="services-text">
              Nuestro objetivo es que todas las personas puedan desenvolverse en cualquier entorno con independencia y accedan a todos los recursos del mismo con facilidad.
            </p>
            <p className="services-text">
              Mira cómo podemos ayudarte a transformar tu proyecto, cumplir con las normativas y abrirlo a todas las personas.
            </p>
            <a href="#contact" className="btn-primary services-btn">Contacta con nosotros →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

