# Nova Reforma Barcelona

Landing page ficticia para una empresa de reformas integrales e interiorismo que trabaja en Barcelona y municipios cercanos.

El proyecto presenta servicios, reformas destacadas, proceso de trabajo, beneficios, zonas de actuación, preguntas frecuentes y un formulario de solicitud de presupuesto.

## Demo

[Ver Nova Reforma Barcelona online](https://alxnrocha.github.io/site-reformas-barcelona/)

## Funcionalidades

- navegación responsive con menú móvil accesible;
- presentación de servicios de reforma;
- proyectos destacados con datos técnicos;
- explicación visual del proceso de trabajo;
- beneficios y zonas de actuación;
- preguntas frecuentes desplegables;
- formulario con validación accesible;
- confirmación de validación para el formulario de demostración;
- diseño adaptado a escritorio, tablet y móvil.

## Tecnologías

- HTML5 semántico;
- CSS3 con variables, Grid y Flexbox;
- JavaScript;
- Git y GitHub;
- GitHub Pages para el despliegue.

No se utilizan frameworks porque el alcance del proyecto se resuelve con tecnologías nativas y permite mantener una implementación ligera, accesible y fácil de mantener.

## Calidad técnica

### Accesibilidad

- navegación operable mediante teclado;
- atributos ARIA en menú, FAQ y formulario;
- mensajes de error asociados a cada campo;
- foco visible en elementos interactivos;
- textos alternativos adecuados;
- soporte para `prefers-reduced-motion`.

### Responsive

La interfaz se adapta a distintos tamaños de pantalla mediante layouts fluidos y breakpoints para escritorio, tablet y móvil.

### SEO y rendimiento

- título y descripción optimizados;
- metadatos Open Graph y Twitter Card;
- URL canónica;
- datos estructurados JSON-LD;
- jerarquía semántica de encabezados;
- dimensiones explícitas en imágenes;
- carga prioritaria del hero;
- lazy loading para imágenes secundarias.

## Estructura

```text
.
|-- index.html
|-- BLUEPRINT.md
|-- DECISIONS.md
|-- README.md
|-- screenshots/
`-- src/
    |-- assets/
    |   `-- images/
    |-- css/
    |   `-- styles.css
    `-- js/
        `-- main.js
```

## Ejecución local

No requiere instalación de dependencias.

1. Clona el repositorio.
2. Abre la carpeta del proyecto.
3. Ejecuta `index.html` con un servidor local, por ejemplo Live Server.

## Capturas

### Escritorio

![Vista completa de Nova Reforma Barcelona en escritorio](./screenshots/desktop.png?v=20260609-3)

### Móvil

![Vista completa de Nova Reforma Barcelona en móvil](./screenshots/mobile.png?v=20260609-3)

## Documentación

- [Blueprint](./BLUEPRINT.md): alcance, requisitos y planificación.
- [Decisiones técnicas](./DECISIONS.md): criterios de implementación y arquitectura.

## Estado

Landing page finalizada y publicada en GitHub Pages, con diseño responsive, accesibilidad, validación de formulario y documentación técnica.

## Autor

Alexandre Rocha
