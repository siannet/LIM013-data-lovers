<p align="center">
<a title="Pokedex" href= "https://emae1712.github.io/LIM013-data-lovers/src/" target="_blank"><img width="80%" src="https://i.ibb.co/1K0YKyh/Pokedex.jpg" alt="Pokedex">
  </p>

# POKÉDEX
### Esteffany Arango & Siannet Flores
>Proyecto Pokemon GO
## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Definición del producto](#2-definición-del-producto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Diseño de Interfaz de Usuario](#4-diseño-de-interfaz-de-usuario)
* [5. Test de usabilidad](#5-Test-de-usabilidad)
* [6. Checklist](#9-checklist)

***

## 1. 🧐Resumen del proyecto

El presente proyecto, llamado **_POKÉDEX_**, es una aplicación web donde el usuario puede ver información clave antes de inciar una batalla Pokemon. Información de 251 Pokemon de las regiones Kanto y Johto, dónde podrá aplicar filtros, ordenarlos por PC, hacer una búsqueda rápida, entre otros, todo de forma dinámica. 

El proyecto se inspiró en el juego **_Pokemon GO_**

## 2. 👩‍💻Definición del producto

La selección de tema del presente proyecto **_Pokemon GO_**, se vio influenciado por el hecho de ser un juego que ha tenido aceptación en usuarios de rangos de edades muy variadas, asimismo el juego se basa en el anime que hasta ahora sigue vigente.

Debido a ello, como criterio de elección de usuarios, procuramos que sean de edades que representen a los distintos usuarios del juego, siendo el rango de edad escogido de 10 a 30 años. Elaboramos encuestas para saber que datos priorizan en el juego y entrevistas para analizar sus necesidades e iterar nuestros prototipos. 

De las encuestas y las entrevistas realizadas concluimos que nuestros usuarios querían una página que les brindara información clave antes de **iniciar una batalla Pokemon**, mas que informativo (que en un principio pensamos hacer), los usuarios querían datos puntuales para armar sus estrategias. Es por ello, que nuestra página web se ajusta a los requerimientos del usuario y lo ayuda de una forma intuitiva y eficaz a la lectura de datos, *mostrando la data de 251 pokemon* de las regiones Kanto y Johto, con una sección de *búsqueda*, aplicación de *filtros por tipo de pokemon y puntos de combate*, y un *cálculo* rápido de cuántos pokemon representan cada tipo seleccionado.

## 3. 📝Historias de usuario

Una vez realizada la investigación UX, se plantearon las Historias de Usuarios, las cuales formaron parte de nuestra planificación en Trello. Cada una fue detallada por funcionalidad para poder priorizar y planificar en base a objetivos.

<p align="center">
<img src="https://i.ibb.co/jRQr7h8/HU-1-3.jpg" alt="HU-1-3" border="0">
</p>

<p align="center">
<img src="https://i.ibb.co/2hctQyS/HU-4-6.jpg" alt="HU-4-6" border="0">
</p>

<p align="center">
<img width= 80% src="https://i.ibb.co/qj5X8zK/HU-7-10.jpg" alt="HU-7-10" border="0">
</p>

## 4. 🚀Diseño de Interfaz de Usuario

En un principio, basándonos en nuestras investigaciones previas acerca del juego (antes de las entrevistas con los potenciales usuarios), ideamos una página web con *log in* y numerosas pestañas para cada funcionalidad, las cuales al ser iteradas con los usuarios, nos sugirieron que tuviera mayor practicidad y que todo se muestre en una sola página, ya que ellos no quieren navegar tanto para encontrar datos de sus pokemon, y también mencionaron la importancia de tener una sección de búsqueda. Es por ello, que en el segundo prototipo mostramos una página más sencilla, que en las entrevistas corroboramos era intuitiva.

<p align="center">
<img width="40%" src="https://i.ibb.co/QnZdvt1/Prototipo-de-baja-inicial.jpg" alt="Prototipo-de-baja-inicial" HSPACE="50" VSPACE="50">            
<img width="30%" src="https://i.ibb.co/vvT9P7t/Prototipo-de-baja-final.jpg" alt="Prototipo-de-baja-final">
<h4 align="center">Primer y segundo prototipo de baja fidelidad (Balsamiq)</h4>
</p>

Teniendo en cuenta los prototipos de baja fidelidad, ideamos nuestra página con las siguientes consideraciones:

* Se muestra la sección de búsqueda por nombre o número de pokedex, y dos pestañas desplegables para poder filtrar por Tipo y PC.
* Se muestran las tarjetas de los 251 pokemon, con características básicas (*número de Pokedex, nombre, imagen del pokemon, tipo y PC*), no queríamos saturar al usuario con tanta información a primera vista.
* Efecto *flip card* que permitirá voltear las tarjetas cuando se pase el mouse (desktop) o con un click (celular), donde se visualizarán las características relevantes para nuestros usuarios (*estadística básica, movimientos rápidos, ataques espeaciales y debilidades de cada pokemon*), además de un botón de "*View more*" por si quieren ver más detalles del pokemon seleccionado.
* El botón de "*View more*", desplegará una ventana modal que muestran las características detalladas de los Pokemon (*de qué trata el pokemon seleccionado, si presenta evoluciones y cuántos caramelos requiere para cada evolución*)

**_Versión desktop_**
Se muestra una pantalla de inicio, donde el jugador podrá elegir un Team, para que el usuario se sienta familiarizado con la página.

**_Versión celular_**
Mostrará la página sin la pantalla de inicio para que puedan visualizar y ejecutar acciones rápidamente.


<p align="center">
<img width="30%" src="https://i.ibb.co/276kkH6/Prototipo-de-alta.jpg" alt="Prototipo-de-alta">
  <h4 align="center">Prototipo de alta fidelidad en Figma, versión celular y desktop</h4>
</p>

## 5. 📈Test de usabilidad

Gracias al Feedback recibido por parte de nuestros usuarios, compañeras y coaches, pudimos iterar varias veces antes de llegar a nuestra versión final. Tomándose en cuenta principalmente:

* El color del background de nuestro proyecto en un comienzo se regía a los colores del juego, pero distraía mucho al usuario así que lo dejamos en color blanco.
* La ventana modal era pequeña en la versión desktop y el botón 

## 6. Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
