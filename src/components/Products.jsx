import React from 'react';
import producto1 from '../assets/Producto1.jpg';
import producto2 from '../assets/Producto2.jpg';
import producto3 from '../assets/Producto3.png';
import producto4 from '../assets/Producto4.jpg';

const PRODUCTS = [
  { img: producto1, title: 'Señalización. Diseño, validación y fabricación' },
  { img: producto2, title: 'Planos y cuadros tactovisuales' },
  { img: producto3, title: 'Papelería, vinilos y etiquetas' },
  { img: producto4, title: 'Pavimento táctil' },
];

export default function Products() {
  return (
    <section className="section" id="products" aria-labelledby="products-title">
      <div className="container">
        <h2 id="products-title">Productos</h2>
        <div className="grid products-grid">
          {PRODUCTS.map((product, idx) => (
            <article key={idx} className="product-card" tabIndex="0">
              <img src={product.img} alt={product.title} className="product-card__image" loading="lazy" />
              <div className="product-card__content">
                <h3>{product.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


