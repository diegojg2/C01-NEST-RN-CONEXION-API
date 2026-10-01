· Qué he aprendido
A enviar datos nuevos desde el móvil al servidor usando una petición POST y a capturarlos en el backend utilizando el decorador @Body().

· Respuesta a la pregunta de comprensión
Los datos nacen en los inputs del móvil, se convierten a texto (JSON.stringify), viajan por internet en el cuerpo de la petición POST, y al llegar a NestJS, @Body() los atrapa y los convierte de nuevo en un objeto.

· Qué he modificado
Creé la ruta @Post() en el backend para añadir productos, ajusté la IP en el frontend y programé el formulario con los campos de texto y el botón de añadir.

· Resultado
Al escribir el nombre y precio de un producto y pulsar "Añadir", el móvil lo envía al servidor, este lo guarda en su memoria, y la lista de la pantalla se actualiza al momento mostrando el producto nuevo.