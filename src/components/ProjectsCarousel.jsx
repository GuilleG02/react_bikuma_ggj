import React, { useEffect, useRef, useState } from 'react';
import foto1 from '../assets/Foto_1.png';
import foto2 from '../assets/Foto_2.jpg';
import foto3 from '../assets/Foto_3.jpg';
import foto4 from '../assets/Foto_4.jpg';
import foto5 from '../assets/Foto_5.jpg';

const SLIDES = [
  { img: foto1, title: 'Sistema de señalización accesible en espacios públicos', location: 'Madrid' },
  { img: foto2, title: 'La estrategia integral para el fomento de la accesibilidad en bilbobus', location: 'Bilbao' },
  { img: foto3, title: 'Alhóndiga bilbao - centro azkuna, pensando en la accesibilidad para todos', location: 'Bilbao' },
  { img: foto4, title: 'Vilamuseu «museos para todos»', location: 'Vila Joiosa' },
  { img: foto5, title: 'Plan de accesibilidad universal en centros culturales', location: 'Valencia' },
];

export default function ProjectsCarousel() {
  const [center, setCenter] = useState(2);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [center]);

  function startAuto() {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setCenter((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
  }

  function stopAuto() {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  function mod(n, m) { return ((n % m) + m) % m; }
  function goTo(i) { setCenter(mod(i, SLIDES.length)); }

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Proyectos de accesibilidad universal</h2>
        <div className="carousel" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
          <div className="carousel-track">
            {[-1, 0, 1].map((offset) => {
              const i = mod(center + offset, SLIDES.length);
              const s = SLIDES[i];
              return (
                <article key={`slide-${i}`} className="news-card">
                  <div className="news-card__bg" style={{ backgroundImage: `url(${s.img})` }} aria-hidden="true" />
                  <div className="news-card__content">
                    <h3>{s.title}</h3>
                    <div className="news-card__location">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="location-icon">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="location-text">{s.location}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="carousel-dots" role="tablist" aria-label="Navegación de proyectos">
            {SLIDES.map((_, i) => (
              <button key={i} className={`dot ${i === center ? 'is-active' : ''}`} aria-label={`Ir a la diapositiva ${i + 1}`} onClick={() => goTo(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

