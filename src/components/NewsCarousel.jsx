import React, { useEffect, useRef, useState } from 'react';
import foto1 from '../assets/Foto1.png';
import foto2 from '../assets/Foto2.png';
import foto3 from '../assets/Foto3.jpg';
import foto4 from '../assets/Foto4.png';
import foto5 from '../assets/Foto5.jpg';

const SLIDES = [
  { img: foto1, tag: 'Noticias', title: 'Nueva señalética inclusiva para edificios públicos' },
  { img: foto2, tag: 'Turismo', title: '¿Tienes cita en Fitur? La accesibilidad estará en tu agenda' },
  { img: foto3, tag: 'Turismo', title: '¿Tienes cita en Fitur? La accesibilidad estará en tu agenda' },
  { img: foto4, tag: 'Análisis', title: 'Piensa en más accesibilidad para personas con Asperger' },
  { img: foto5, tag: 'Proyectos', title: 'Guías táctiles y pavimento podotáctil en espacios culturales' },
];

export default function NewsCarousel() {
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
    <section className="section" id="news" aria-labelledby="news-title">
      <div className="container">
        <h2 id="news-title">Conoce las últimas novedades de Puntodis</h2>
        <div className="carousel" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
          <div className="carousel-track">
            {[-1, 0, 1].map((offset) => {
              const i = mod(center + offset, SLIDES.length);
              const s = SLIDES[i];
              return (
                <article key={`slide-${i}`} className="news-card">
                  <div className="news-card__bg" style={{ backgroundImage: `url(${s.img})` }} aria-hidden="true" />
                  <div className="news-card__badge">{s.tag}</div>
                  <div className="news-card__content">
                    <h3>{s.title}</h3>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="carousel-dots" role="tablist" aria-label="Navegación de noticias">
            {SLIDES.map((_, i) => (
              <button key={i} className={`dot ${i === center ? 'is-active' : ''}`} aria-label={`Ir a la diapositiva ${i + 1}`} onClick={() => goTo(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


