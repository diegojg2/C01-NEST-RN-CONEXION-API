· Qué he aprendido
A conectar un buscador del móvil con una URL dinámica, enviando un ID específico para que el backend devuelva solo ese elemento.

· Respuesta a la pregunta de comprensión
El ID nace en el texto que escribe el usuario, se une a la URL del fetch (ej. /heroes/2), viaja por internet y NestJS lo atrapa usando @Param('id').

· Qué he modificado
Creé el backend de héroes, arreglé el .js del main.ts (por la nueva versión de Nest), puse mi IP local y añadí el TextInput en el frontend.

· Resultado
Al escribir un número y pulsar "Buscar", la app envía ese ID exacto al servidor, recibe solo la información de ese superhéroe y muestra su nombre, poder y universo en la pantalla.