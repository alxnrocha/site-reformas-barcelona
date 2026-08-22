# Nova Reforma Barcelona — Sitio Web Corporativo de Reformas

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-Semantic%20Markup-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Grid%20%26%20Flexbox-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Modules%20ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Leaflet](https://img.shields.io/badge/Leaflet.js-Interactive%20Maps-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-22C55E?style=for-the-badge&logo=github&logoColor=white)

**Plataforma web corporativa y comercial para empresa de reformas integrales e interiorismo en Barcelona con catálogo de proyectos interactivo, línea de tiempo de obra y mapas dinámicos de cobertura con Leaflet.js.**

[🚀 Demo en Vivo](https://alxnrocha.github.io/site-reformas-barcelona/) • [📂 Repositorio en GitHub](https://github.com/alxnrocha/site-reformas-barcelona)

</div>

---

## 🏛️ Arquitectura y Flujo del Sistema

```mermaid
graph TD
    User([👤 Cliente / Propietario]) --> Hero[Hero Section: Presentación & CTA de Presupuesto]
    Hero --> Services[Catálogo de Reformas: Cocinas / Baños / Integral]
    Services --> Timeline[Línea de Tiempo de Obra: Diseño ➔ Ejecución ➔ Entrega]
    Timeline --> Map[Mapa Interactivo de Cobertura en Barcelona: Leaflet.js]
    Map --> Contact[Formulario de Contacto & Solicitud de Cita]
```

---

## ✨ Características Principales

- **Catálogo de Servicios y Proyectos:** Fichas interactivas de reformas de cocinas, baños e interiorismo con especificaciones técnicas y galerías de proyectos.
- **Proceso de Trabajo Paso a Paso:** Línea de tiempo visual que guía al cliente desde el diseño inicial hasta la entrega de llaves.
- **Mapa de Cobertura con Leaflet.js:** Visualización interactiva de áreas de servicio y proyectos concluidos en Barcelona y distritos adyacentes.
- **Accesibilidad y Soporte de Movimiento Reducido:** Estructura con soporte completo para navegación por teclado, roles ARIA y compatibilidad con `prefers-reduced-motion`.
- **SEO y Datos Estructurados:** Schema.org JSON-LD para negocio local, Open Graph y etiquetas canónicas.

---

## 🗂️ Estructura del Proyecto

```text
02-site-reformas-barcelona/
├── index.html                     # Documento HTML5 principal
├── src/
│   ├── assets/                    # Imágenes de proyectos e iconos vectoriales
│   ├── css/
│   │   └── styles.css             # Arquitectura CSS modular con variables de diseño
│   └── js/
│       └── main.js                # Lógica de interactividad y mapa Leaflet.js
├── LICENSE                        # Licencia MIT
└── README.md                      # Documentación del proyecto
```

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- Cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).

### Ejecución Local
```bash
# 1. Clonar el repositorio
git clone https://github.com/alxnrocha/site-reformas-barcelona.git
cd site-reformas-barcelona

# 2. Servir localmente
npx serve .
```

---

## 🛠️ Tecnologías Utilizadas

| Capa | Tecnología | Aspectos Clave |
|---|---|---|
| **Estructura** | HTML5 Semántico | Schema.org JSON-LD, SEO tags y Open Graph |
| **Estilos** | CSS3 Moderno | Custom Properties, Grid Layout, Flexbox, `prefers-reduced-motion` |
| **Lógica** | JavaScript ES6+ | Módulos nativos, manipulación de estado DOM |
| **Mapas** | Leaflet.js | Mapa interactivo de distritos de Barcelona con OpenStreetMap |
| **Despliegue** | GitHub Pages | Despliegue estático continuo y optimizado |

---

<div align="center">
  <sub>Desarrollado con dedicación por <a href="https://github.com/alxnrocha">Alex Rocha</a> • Proyecto 02 del Portafolio Profesional Frontend.</sub>
</div>
