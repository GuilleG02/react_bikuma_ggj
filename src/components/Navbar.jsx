import React, { useState } from 'react';
import logo from '../assets/LogoBikuma.png';

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
          <div className="nav-actions-mobile" role="group" aria-label="Acciones">
            <a href="#contact" className="icon-btn-mobile" aria-label="Contactar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#tienda" className="icon-btn-mobile" aria-label="Tienda">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.66L8.1 13H16.55C17.3 13 17.96 12.59 18.3 11.97L21.88 5.5C21.96 5.34 22 5.17 22 5C22 4.45 21.55 4 21 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
              </svg>
            </a>
            <button className="icon-btn-mobile" aria-label="Buscar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
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


