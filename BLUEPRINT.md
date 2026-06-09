# Blueprint - Nova Reforma Barcelona

## 1. Vision General

Nova Reforma Barcelona es un sitio web institucional ficticio para una empresa local de reformas, interiorismo y renovacion de viviendas en Barcelona.

El proyecto forma parte de un portfolio frontend orientado a empleabilidad junior en Espana. Su objetivo es mostrar dominio de HTML semantico, CSS moderno, JavaScript basico, accesibilidad, SEO local, estructura profesional de GitHub y presentacion visual cuidada.

## 2. Objetivo Profesional

Este proyecto debe demostrar capacidad para construir una web realista para una pequeña empresa local, con una experiencia clara para usuarios que quieren pedir información o presupuesto.

Debe comunicar:

- estructura semantica correcta;
- diseno responsive;
- organizacion visual profesional;
- contenido en espanol;
- enfoque SEO local;
- formulario visual de contacto;
- proceso de trabajo organizado por issues, branches y pull requests.

## 3. Publico Objetivo

- propietarios de pisos en Barcelona;
- personas que quieren reformar cocina, bano o vivienda completa;
- clientes que buscan una empresa local seria;
- reclutadores que evaluan criterio visual, HTML, CSS, JS y GitHub profesional.

## 4. Stack

- HTML5;
- CSS3;
- JavaScript;
- Git y GitHub;
- GitHub Pages.

No se usaran frameworks en este proyecto. La intencion es reforzar fundamentos de frontend antes de avanzar a proyectos con React, TypeScript y backend.

## 5. Funcionalidades Principales

- header responsive;
- hero section con llamada a la accion;
- seccion de servicios;
- seccion de proyectos destacados;
- seccion de proceso de trabajo;
- seccion de beneficios;
- sección de zonas de actuación;
- preguntas frecuentes;
- formulario visual para solicitar presupuesto;
- footer con navegacion y datos de contacto;
- interacciones simples con JavaScript.

## 6. Escopo Incluido

- landing page completa en espanol;
- estructura HTML semantica;
- estilos responsive mobile, tablet y desktop;
- imagenes locales optimizadas cuando sea necesario;
- formulario sin envio real de datos;
- validacion visual basica;
- documentacion profesional;
- screenshots y deploy al final.

## 7. Escopo Excluido

- backend real;
- envio real de formulario;
- autenticacion;
- panel de administracion;
- base de datos;
- pagos;
- CMS.

## 8. Arquitectura Inicial

```txt
.
├── BLUEPRINT.md
├── DECISIONS.md
├── README.md
├── index.html
├── screenshots/
└── src/
    ├── assets/
    │   └── images/
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js
```

## 9. Flujo de Pantalla

1. Header con logo y navegacion.
2. Hero con propuesta de valor y CTA.
3. Servicios principales.
4. Proyectos destacados o tipos de reforma.
5. Proceso de trabajo.
6. Beneficios de la empresa.
7. Zonas de actuación en Barcelona.
8. FAQ.
9. Contacto y solicitud de presupuesto.
10. Footer.

## 10. Estados de la Aplicacion

- navegacion normal;
- menu responsive;
- formulario vacio;
- campos con foco;
- validacion visual de campos;
- estado de envio simulado;
- FAQ abierta/cerrada si se implementa con JavaScript.

## 11. Accesibilidad

- usar HTML semantico;
- mantener jerarquia correcta de headings;
- asegurar contraste suficiente;
- usar etiquetas `label` en formularios;
- mostrar estados de foco visibles;
- evitar contenido solo visual sin texto alternativo;
- revisar navegacion con teclado.

## 12. SEO

- `lang="es"`;
- title y description orientados a reformas en Barcelona;
- estructura semantica;
- headings claros;
- contenido local;
- imagenes con `alt` descriptivo;
- metadata basica para compartir.

## 13. Performance

- CSS único y organizado;
- JavaScript ligero;
- imagenes comprimidas;
- evitar dependencias externas innecesarias;
- usar dimensiones y carga adecuada de imagenes cuando aplique.

## 14. Documentacion

El proyecto mantendra:

- `BLUEPRINT.md`: plan tecnico y de producto;
- `DECISIONS.md`: decisiones tecnicas relevantes;
- `README.md`: presentacion final del proyecto;
- `screenshots/`: capturas desktop y mobile al final.

## 15. GitHub Workflow

El trabajo se hara por issues, branches y pull requests.

Idioma definido:

- issues en ingles;
- PR title/body en espanol;
- README, DECISIONS y sitio en espanol;
- commits en ingles usando estilo profesional.

## 16. Criterios de Calidad

- sin errores en consola;
- layout responsive;
- secciones visualmente coherentes;
- textos reales y claros;
- HTML semantico;
- CSS organizado;
- JS sin logs temporales;
- documentacion alineada con el estado real del proyecto.

## 17. Estado Actual

Proyecto en fase inicial.

La issue actual es:

- `#1 Set up initial project structure`

El objetivo de esta primera etapa es crear la estructura base y preparar el repositorio para las siguientes issues.
