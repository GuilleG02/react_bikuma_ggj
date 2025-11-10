import React from 'react';
import empresa1 from '../assets/Empresa1.png';
import empresa2 from '../assets/Empresa2.png';
import empresa3 from '../assets/Empresa3.png';
import empresa4 from '../assets/Empresa4.png';
import empresa5 from '../assets/Empresa5.png';
import empresa6 from '../assets/Empresa6.png';

export default function Companies() {
  const empresas = [
    { src: empresa1, alt: 'Empresa colaboradora 1' },
    { src: empresa2, alt: 'Empresa colaboradora 2' },
    { src: empresa3, alt: 'Empresa colaboradora 3' },
    { src: empresa4, alt: 'Empresa colaboradora 4' },
    { src: empresa5, alt: 'Empresa colaboradora 5' },
    { src: empresa6, alt: 'Empresa colaboradora 6' }
  ];

  return (
    <section className="companies" aria-label="Empresas colaboradoras">
      <div className="container">
        <div className="companies-grid">
          {empresas.map((empresa, index) => (
            <img 
              key={index} 
              src={empresa.src} 
              alt={empresa.alt} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}


