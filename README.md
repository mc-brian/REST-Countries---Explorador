# Proyecto de Consulta de Países

El objetivo de esta actividad es construir una aplicación web que permita realizar consultas sobre información de diferentes países a través de la [REST Countries API](https://restcountries.com/).

## Descripción del Proyecto

La aplicación permite a los usuarios filtrar países por diferentes criterios como región, idioma y población. Al realizar una búsqueda, se despliegan tarjetas que inicialmente muestran solo la bandera y el nombre del país. Al pasar el cursor sobre cada tarjeta, se despliega información adicional que incluye:

- Nombre completo
- Región a la que pertenece
- Idiomas hablados
- Gentilicio
- Un evento histórico relevante (ejemplo: la fecha de independencia)

El sitio web fue diseñado utilizando **Bootstrap** vía CDN, asegurando un diseño responsivo y estéticamente agradable. Además, se ha implementado interactividad en **JavaScript**, manejando las llamadas a la API y los filtros.

## Funcionalidades

- Filtrado de países por:
  - Región
  - Idioma
  - Población
- Visualización de tarjetas con bandera, nombre del país y, al hacer hover, detalles adicionales.
  
## Tecnologías Utilizadas

- HTML5
- CSS
- JavaScript (con `fetch` para consumir la API)
- Bootstrap (via CDN)
- [REST Countries API](https://restcountries.com/)

## Para Ejecutar el Proyecto

Clonar el repositorio y abrir el archivo `index.html` en el navegador

Alternativamente, ingresar al proyecto en GitHub Pages. Puede ser visualizado en [GitHub Pages](https://mc-brian.github.io/REST-Countries---Explorador/)

## Créditos

Este proyecto fue realizado como parte del programa **Jóvenes a Programar**.
