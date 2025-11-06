import React from 'react';
import empresas from '../assets/Empresas.png';

export default function Companies() {
  return (
    <section className="companies" aria-label="Empresas colaboradoras">
      <div className="container">
        <img src={empresas} alt="Empresas colaboradoras: Bizkaia, BBVA, Alsa, Bilbobus, Bizkaibus, Vila Museu" />
      </div>
    </section>
  );
}


