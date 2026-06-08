# Decisiones técnicas - Nova Reforma Barcelona

## 1. Stack

El proyecto utiliza HTML, CSS y JavaScript sin frameworks.

Esta elección mantiene la solución proporcional al alcance de una landing page estática, reduce dependencias y permite trabajar directamente con semántica, estilos responsive, accesibilidad e interacción en el navegador.

## 2. Idioma y contexto

La interfaz y la documentación principal están escritas en español porque el proyecto representa una empresa local orientada al mercado de Barcelona.

Los datos comerciales, testimonios y proyectos son ficticios y se utilizan únicamente para construir una experiencia de portfolio coherente.

## 3. Estructura

La implementación se separa en:

- `index.html` para contenido y estructura semántica;
- `src/css/styles.css` para el sistema visual y los layouts responsive;
- `src/js/main.js` para navegación móvil, FAQ y validación del formulario;
- `src/assets/images/` para imágenes e iconos locales;
- documentos independientes para blueprint, decisiones y presentación.

La separación evita mezclar planificación con documentación pública y mantiene responsabilidades claras.

## 4. Sistema visual

Los colores, tipografías, radios, espaciados y anchos principales se definen mediante variables CSS.

La dirección visual utiliza tonos tierra y neutros vinculados al sector de reformas, diferenciándose del proyecto anterior de clínica estética.

Las secciones alternan fondos y composiciones para facilitar el escaneo sin depender de tarjetas decorativas en toda la página.

## 5. Imágenes e iconos

Las fotografías muestran espacios y reformas relacionados con el contenido de cada sección.

Los iconos se almacenan localmente como archivos SVG. Se evita incluir rutas SVG extensas directamente en el HTML para mantener el marcado legible.

Las imágenes rasterizadas incluyen dimensiones explícitas. La imagen principal tiene prioridad de carga y las imágenes secundarias utilizan lazy loading.

## 6. Responsive

El diseño utiliza CSS Grid y Flexbox con layouts fluidos.

En pantallas pequeñas:

- la navegación se transforma en un menú desplegable;
- las columnas pasan a una sola columna cuando el contenido lo requiere;
- los controles conservan áreas de interacción utilizables;
- se evita el desbordamiento horizontal;
- la jerarquía visual se mantiene sin reducir excesivamente el texto.

## 7. Accesibilidad

Las decisiones principales incluyen:

- HTML semántico;
- navegación por teclado;
- estados de foco visibles;
- asociación entre etiquetas, campos y mensajes de error;
- `aria-expanded` y `aria-controls` en componentes desplegables;
- contenido decorativo oculto para lectores de pantalla;
- alternativas textuales para imágenes informativas;
- respeto por preferencias de movimiento reducido.

## 8. JavaScript

JavaScript se utiliza únicamente donde existe comportamiento:

- apertura y cierre del menú móvil;
- acordeón de preguntas frecuentes;
- validación accesible del formulario;
- simulación de envío y mensaje de confirmación.

El formulario no transmite información real. `preventDefault()` evita una petición inexistente y permite demostrar validación y feedback en el navegador.

## 9. SEO y rendimiento

La página incorpora:

- metadatos descriptivos;
- Open Graph y Twitter Card;
- URL canónica;
- JSON-LD de tipo `WebSite`;
- un único `h1`;
- jerarquía ordenada de encabezados;
- estrategia de carga de imágenes.

El JSON-LD describe el sitio como proyecto de portfolio y no presenta la empresa ficticia como una entidad comercial real.

## 10. Flujo de GitHub

El trabajo se organiza mediante issues, branches, commits y pull requests.

Convenciones:

- issues y commits en inglés;
- títulos y descripciones de pull requests en español;
- una branch por issue;
- revisión antes del merge;
- labels por tipo, área y prioridad;
- entregas incrementales para conservar un historial profesional.

## 11. Estado actual

La landing page está funcional y contiene todas las secciones principales, interacciones, validación, adaptación responsive y optimizaciones técnicas previstas.

Los siguientes pasos son añadir capturas finales, publicar el sitio y realizar la revisión de presentación del repositorio.
