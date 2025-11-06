import React, { useState } from 'react';
import logo from '../assets/logoBikuma.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar" role="banner">
      <div className="container">
        <a className="logo" href="#" aria-label="Puntodis home">
          <img src={logo} alt="Puntodis Accessible Solutions" />
        </a>
        <button 
          className={`hamburger-btn ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Menú" 
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav aria-label="Principal" className={`nav-main ${isMenuOpen ? 'is-open' : ''}`}>
          <a href="#services" onClick={closeMenu}>Servicios</a>
          <a href="#products" onClick={closeMenu}>Productos</a>
          <a href="#administracion" onClick={closeMenu}>Administración pública</a>
          <a href="#conocenos" onClick={closeMenu}>Conócenos</a>
          <a href="#actualidad" onClick={closeMenu}>Actualidad</a>
        </nav>
        <div className="nav-actions" role="group" aria-label="Acciones">
          <a href="#contact" className="btn-primary">Contactar</a>
          <a href="#tienda" className="btn-secondary btn-tienda">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cart-icon">
              <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.66L8.1 13H16.55C17.3 13 17.96 12.59 18.3 11.97L21.88 5.5C21.96 5.34 22 5.17 22 5C22 4.45 21.55 4 21 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
            </svg>
            Tienda
          </a>
          <button className="icon-btn" aria-label="Buscar">
            <img src="/search.svg" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}


