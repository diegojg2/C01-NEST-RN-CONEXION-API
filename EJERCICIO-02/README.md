· Qué he aprendido 
A separar responsabilidades en NestJS: el Controller maneja las peticiones web y el Service gestiona la lógica y los datos.

· Respuesta a la pregunta de comprensión ¿Por qué colocamos el array en el Service y no en el Controller?
Porque cumple una responsabilidad concreta, separando la gestión de datos del manejo de rutas HTTP.

· Qué he modificado 
Inyecté el servicio en el controlador y añadí una tercera pizza (con emoji y precio) al array del archivo pizzas.service.ts.

· Resultado
Al arrancar el servidor y entrar a /pizzas, la API devuelve un JSON con el array completo de las tres pizzas.