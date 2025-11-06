# Bikuma - Sitio Web Corporativo

Aplicación web desarrollada en React para Bikuma (Puntodis), empresa especializada en soluciones de accesibilidad universal.

## Descripción

Sitio web corporativo responsive que presenta los servicios, productos y proyectos de la empresa. Incluye secciones de navegación, hero, servicios, productos, proyectos, noticias y footer completo.

## Tecnologías

- **React 18.3.1** - Framework frontend
- **Vite 5.4.8** - Build tool y servidor de desarrollo
- **Sass** - Preprocesador CSS
- **React DOM 18.3.1** - Renderizado

## Requisitos

- Node.js 16 o superior
- npm 7 o superior

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

```

La aplicación estará disponible en `http://localhost:5173` durante el desarrollo.

## Estructura del Proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes React
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SectionCards.jsx
│   ├── NewsCarousel.jsx
│   ├── Services.jsx
│   ├── Products.jsx
│   ├── ProjectsCarousel.jsx
│   ├── Companies.jsx
│   └── Footer.jsx
├── styles/          # Estilos SCSS
│   ├── _variables.scss
│   └── main.scss
├── App.jsx          # Componente raíz
└── main.jsx         # Punto de entrada
```

## Características

- Diseño responsive (móvil, tablet, desktop)
- Navegación con menú hamburguesa en móvil
- Carruseles interactivos con auto-play
- Optimización de imágenes y carga diferida

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
