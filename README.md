# Prueba Aluxioner

# Prueba EMT - Case 05 (1000 puntos)

El cometido de esta aplicación web es ayudar a los Aluxioners a moverse por Madrid en autobús.

Con ella podrán saber cuánto tiempo tardarán los autobuses en pasar por la parada en la que estén.

Cada Aluxioner tiene 2 paradas de interés, la que utiliza para ir al trabajo desde su casa, y la que utiliza para volver a su casa desde el trabajo.


# Funcionalidades ( 650 puntos )

La prueba consta de 2 pantallas:

1) Home: (150 puntos)
- En el input con el icono de la lupa, se podrá buscar por "numero/ID de parada" de autobus directamente
- Cada foto Aluxioner será clickable, sacando el modal en el que podrá especificar su rumbo, pudiendo elegir entre "Casa" o "Aluxion"

2) Pagina de resultados: ( 500 puntos )
- A la derecha del titulo de la página podemos encontrar 2 iconos, según esté clickado uno u otro, las cards tendrán una apariencia u otra 
- Al clickar sobre una card (autobús en camino), se resaltará su correspondiente punto en el mapa. Y mismo comportamiento a la inversa.
- Se podrá seguir buscando por "numero/ID de parada" de autobus directamente en el input con el icono de la lupa que se encuentrá en la parte superior derecha de la página


# Recursos

Dado el siguiente diseño que puedes encontrar (aquí)[https://www.figma.com/file/K401QwRpCDcMTi8qpOMz0XHW/Untitled?node-id=0%3A1]

Los recursos iconos, fuentes etc estan en la carpeta de Resources o los puedes obtener del mismo Figma.

Para la carga de los datos sobre autobuses en Madrid se deben usar los datos abiertos de la EMT que puedes encontrar(aquí)[https://opendata.emtmadrid.es/]


# Maquetación, animaciones y transiciones (350 puntos)

A continuación indicamos un las interacciones del diseño:

- Para el input con el icono de lupa: En PC, al hacer click, el icono y el texto cogen apariencia blanca y la linea que subraya el input se construye de izquierda a derecha, también de color blanco. (20 puntos)
- Las fotos de los aluxioners deben ir apareciendo progresivamente según se hace scroll (Ejemplo)[http://wildmgmt.es/] (20 puntos)
- Como se puede ver en el diseño, el modulo de la home que contiene el titulo principal de la pagina y el input de busqueda, al realizar scroll se quedará pegado arriba de la ventana y se le dará la nueva apariencia que se puede ver en Figma. (20 puntos)
- Al cargarse la pagina de resultados, se veria el mapa a pantalla completa y aparecería el bloque azul de la izquierda ( haciendo una transicion de izquierda a derecha, desde fuera de la pagina ) y una vez alcanzada la posicion final, aparecerían los elementos que contiene, con el mismo efecto que aparecían las fotos de los aluxioners. (10 puntos)
- El mapa de la página de resultado es manipulable, y al clickar sobre uno de los puntos del mapa, ocurrirá lo siguiente: (180 puntos)
	1. Aparece la linea que rodea el punto, creciendo desde el centro
	2. Una vez rodeado el punto, aparece el elemento que contiene el nº de la linea, que crece de abajo a arriba
	3. Ocurridos el punto 1 y 2, finalmente, sale desde detras del contenedor mencionado en el punto 2, la etiqueta blanca con el nombre de la linea de bus ( de izquierda a derecha )
	4. Por otro lado, se resaltará el card correspondiente a este punto, y vicecersa si se hubiera clickado la card
- Al clickar los iconos que estan al lado del titulo de la pagina de resultado, se debe cambiar la apariencia de las tarjetas, aquí siéntete libre de aplicar la animación/transición más smooth que quieras (20 puntos)
- El modal de "rumbo Aluxioner" aparece de la siguiente manera: (30 puntos)
	1. Aparece progresivamente el fondo azul
	2. El contenedor blanca se abre desde el centro, creciendo proporcionalmente a la vez en el eje verical
	3. Al cerrarse ocurre este proceso a la inversa y no se puede navegar a la pagina de resultados hasta que no se haya finalizado la animación
- En la pagina de resultados, con visualizacion resposnise el mapa estará oculto y saldrá de derecha a izquierda al clickar el circulo-mapa que esta abajo a la derecha (40puntos)
	

# Paradas habituales Aluxioners

Javi (CEO & Founder)
Parada que coge para ir de casa a Aluxion: 681
Parada que coge para ir de Aluxion a casa: 288

Aluxioner 01 (Frontend developer)
Parada que coge para ir de casa a Aluxion: 3378
Parada que coge para ir de Aluxion a casa: 494

Giulio (Backend Developer)
Parada que coge para ir de casa a Aluxion: 2908
Parada que coge para ir de Aluxion a casa: 1229

Aluxioner 02 (Mobile developer)
Parada que coge para ir de casa a Aluxion: 1688
Parada que coge para ir de Aluxion a casa: 2710

Giulio (Head of Backend)
Parada que coge para ir de casa a Aluxion: 59
Parada que coge para ir de Aluxion a casa: 85  

Miriam (Designer)
Parada que coge para ir de casa a Aluxion: 189
Parada que coge para ir de Aluxion a casa: 806


# Qué valoramos

Será un plus el hecho de que la prueba esté desarrollada en ReactJS.

Habrá que cubrir las resoluciones de PC y mobile par los siguientes navegadores:
Chrome, Firefox, Safari, Opera, Microsoft Edge.

Soporte a versiones de Internet Explorer.

La maquetación debe ser precisa, nos gusta cuidar los detalles, por lo que es importante que sea lo más semejante posible al diseño proporcionado.

Código limpio y bien organizado. Somos de los que disfrutan el código eficiente, con sus pertienentes espacios, saltos de línea y bonitas indentaciones.

Cuantas más animaciones y transiciones de las anteriores mencionadas se consigan emular, mejor.


# Entrega

Para ello se debe subir el código a este repositorio y notificar de la entrega al correo ielorduy@aluxion.com.