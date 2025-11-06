import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SectionCards from './components/SectionCards.jsx';
import NewsCarousel from './components/NewsCarousel.jsx';
import Services from './components/Services.jsx';
import Products from './components/Products.jsx';
import ProjectsCarousel from './components/ProjectsCarousel.jsx';
import Companies from './components/Companies.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <SectionCards id="quick" title="" kind="quick" />
        <NewsCarousel />
        <Services />
        <Products />
        <ProjectsCarousel />
      </main>
      <Companies />
      <Footer />
    </div>
  );
}


