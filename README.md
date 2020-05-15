# la_nacion
Ejercicios de Prueba para La Nación

El repositorio tiene 2 carpetas, 1erEjercicio y 2doEjercicio.

1erEjercicio: Está el codigo fuente del proyecto en React Js, usando como framework para el renderizado en el servidor Next Js.

2doEjercicio: Está el archivo y sus test, donde se resuelve el algoritmo solicitado (dado un array de números...).


Preguntas a Responder

•	¿De qué forma guardarías los archivos que un usuario suba por la aplicación al servidor y porque?

Los archivos que suben los usuarios los almacenaría en el disco, guardando solamente una referencia a la posición de la imagen en una tabla. 

¿Por qué? 

Por rendimiento.

Extraer contenido pesado de una base de datos es un gran cuello de botella en el rendimiento. Los sitios grandes usan proveedores de almacenamiento de contenido estatico, como imágenes (Drive, Dropbox, OneDrive, etc). 

•	¿Implementaría un cache del lado del cliente? ¿Porque?

Si implementaría un cache del lado del cliente. El almacenamiento en caché del contenido web reduce la carga de recursos del back-end y la congestión de la red. Además reduce las necesidades de ancho de banda y el costo que ello puede implicar. Es decir que otorga beneficios al usuario final (por ser más rápido), al proveedor de servicios (por consumir menos recursos) y al propietario del sitio web (para abaratar costos y atraer usuarios).

