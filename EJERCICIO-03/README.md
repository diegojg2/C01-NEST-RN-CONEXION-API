· Qué he aprendido 
A capturar datos dinámicos de la URL usando @Param y a buscar elementos específicos en el servicio con find().

· Respuesta a la pregunta de comprensión 
Porque los parámetros de la URL siempre llegan como texto, pero los IDs de nuestro array son números. Hay que convertirlo para poder compararlos.

· Qué he modificado 
Corregí la separación de código entre el controlador y el servicio, y añadí una nueva mascota al array.

· Resultado
Al realizar una petición a una ruta como /mascotas/2, la API localiza el número, lo busca y devuelve el JSON de esa mascota específica.