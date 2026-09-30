· Qué he aprendido 
A crear controladores, definir rutas básicas en NestJS, levantar el servidor y visualizar respuestas JSON.

· Respuesta a la pregunta de comprensión ¿Qué función cumple @Get() en este Controller?
@Get() le dice al servidor que ejecute esa función únicamente cuando reciba una petición mediante la ruta /hola.

· Qué he modificado 
El archivo hola.controller.ts, configurando la ruta principal y añadiendo el mensaje personalizado en la función saludar()

· Resultado
Al arrancar el servidor y entrar en http://localhost:3000/hola, el navegador muestra el JSON con el mensaje esperado