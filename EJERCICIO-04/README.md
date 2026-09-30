· Qué he aprendido
A diferenciar los Path Params (para recursos únicos) de los Query Params (@Query), usándolos para filtrar listas con el método filter().

· Respuesta a la pregunta de comprensión
Usas /juegos/3 para buscar un único elemento exacto por su ID, y ?genero=aventura para filtrar una lista según una condición.

· Qué he modificado
Estructuré correctamente el Controlador y el Servicio, añadí 4 videojuegos al array y programé el filtrado condicional.

· Resultado
Al acceder a /juegos el servidor devuelve los 4 juegos, pero si visitas /juegos?genero=aventura solo muestra los que cumplen ese filtro.
