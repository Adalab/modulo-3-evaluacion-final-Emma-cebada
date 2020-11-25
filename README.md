# Proyecto: Rick and Morty

![title](https://github.com/Adalab/modulo-3-evaluacion-final-Emma-cebada/blob/master/src/images/title.png)

Web propuesta por Adalab para llevar a cabo la evaluación final del módulo 3 en el cual se aprende React. El proyecto consiste en coger mediante un fetch información determinada para ser capaz de pintar un listado de personajes de la serie en la pantalla a modo de tarjetas.
La información a sacar en cada una de las tarjetas propuestas por Adalab es: la imagen del personaje, su nombre y si es humano o alien.
También tenemos un detalle de personaje realizado con rutas al cual se accede clicando sobre el que quieras ver para obtener algo más de información sobre él.

## Instalación necesaria para realizar el proyecto.

Para realizar este proyecto ha sido necesario crear un nuevo repositorio en GitHub desde GitHub Classroom usando un enlace que nos dan, con el que una vez clonado en nuestro ordenador podemos comenzar a trabajar en el proyecto.

Es necesario instalar React:
$ npm install create-react-app
$ npm install node-sass // Esto si se va a usar scss.
Y en el caso de usar las PropTypes también se necesitará ejercutar en consola:
npm install --save prop-types
Al usar rutas, es necesario también instalar react-router-dom.

### Scripts disponibles.

Para ir viendo el avance de tu proyecto, puedes ejecutar en consola:

### `npm start`

Esto abre [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador.

La página se irá actualizando con los cambios que vayas realizando y también te permitirá ver los errores a través de la consola.

### `npm run build`

Esto sirve para crear una versión de desarrollo que es la que va a ser subida.
Agrupa correctamente React en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash. \
¡Y ya tienes tu aplicación lista para implementarse!

#### Estructura de la aplicación.

La aplicación está estructurada en 7 componentes donde se ha escrito el código para que se puedan producir todas las acciones de la aplicación y el pintado de la misma. Junto con sus componentes de estilos que está en la carpeta de stylesheets.
Tenemos una carpeta, images, donde han sido guardadas todas las imágenes utilizadas en el proyecto y por último tenemos la carpeta services donde se ha realizado el fetch que necesitamos para obtener los datos.
