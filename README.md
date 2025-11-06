# Frontend Test Bikuma (React)

Implementación con React 18 + Vite y SASS (SCSS). La UI replica la referencia "Proyectos Test.png" con secciones: header/navbar, hero, novedades, servicios, productos, proyectos y footer.

## Estructura

```
ggj_prueba_bikuma/
  └─ react-version/
     ├─ public/
     │  ├─ logo-puntodis.png (añádelo aquí)
     │  └─ search.svg
     ├─ src/
     │  ├─ components/ (Navbar, Hero, SectionCards, Footer)
     │  ├─ styles/ (_variables.scss, main.scss)
     │  ├─ App.jsx
     │  └─ main.jsx
     ├─ index.html
     └─ vite.config.js
```

## Ejecutar (React)

```bash
cd ggj_prueba_bikuma/react-version
npm i
npm run dev
```

## Decisiones de diseño
- Paleta aproximada a la referencia: azul primario para textos, rojo para CTA.
- Tipografía: sistema (intercambiable por la del diseño en producción).
- Layout en CSS Grid y Flex, con contenedor a 1200px.
- Breakpoints: 1440/1024/768/480 px. Se prioriza 4→3→2→1 columnas.
- Accesibilidad: etiquetas semánticas, `aria-label`, `h1/h2`, `role`, foco visible.
- Microinteracciones: hover y elevación en cards y botones; sticky navbar.
- Performance: imágenes representadas como cajas decorativas; fácil cambio a `<img loading="lazy">`.

## Próximos pasos (si se desea ampliar)
- Conectar datos reales (JSON/API) para las tarjetas.
- Implementar routing y páginas internas.
- Sustituir ilustraciones por SVGs/imagenes optimizadas.
