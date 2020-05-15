# Ejercicio para La Nación


El repositorio tiene 2 carpetas, **1erEjercicio** y **2doEjercicio**.

**1erEjercicio**: Está el codigo fuente del proyecto solicitado usando **React** y [NextJs](https://nextjs.org/) como framework para el renderizado en el servidor. 

Se puede ver el proyecto deployado en el siguiente [link del sitio Herokku](https://ejercicio-la-nacion.herokuapp.com/)


**2doEjercicio**: Se encuentra el archivo index.html donde se muestra el resultante de la función para 2 casos (también hay carpeta con un par de test unitarios usando jest), 


## Preguntas a Responder

### ¿De qué forma guardarías los archivos que un usuario suba por la aplicación al servidor y porque?

Los archivos que suben los usuarios los almacenaría en el disco, guardando solamente una referencia a la posición de la imagen en una tabla. 

¿Por qué? Por rendimiento.

Extraer contenido pesado de una base de datos es un gran cuello de botella en el rendimiento. Los sitios grandes usan proveedores de almacenamiento de contenido estatico, como imágenes (Drive, Dropbox, OneDrive, etc). 


###	¿Implementaría un cache del lado del cliente? ¿Porque? 

Si implementaría un cache del lado del cliente. El almacenamiento en caché del contenido web reduce la carga de recursos del back-end y la congestión de la red. Además reduce las necesidades de ancho de banda y el costo que ello puede implicar. Es decir que otorga beneficios al usuario final (por ser más rápido), al proveedor de servicios (por consumir menos recursos) y al propietario del sitio web (para abaratar costos y atraer usuarios).

