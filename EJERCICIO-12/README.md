· Qué he aprendido
A realizar una integración Full Stack completa juntando todo lo anterior: cargar listas (GET), buscar por ID (GET) y modificar datos (PATCH) en una misma app.

· Respuesta a la pregunta de comprensión
Al abrir la app, pide la lista al servidor (GET). Al tocar una criatura, pide sus detalles (GET por ID). Al darle a "Me gusta", envía la orden de sumar el like (PATCH), el servidor lo actualiza en su memoria y el móvil refresca la pantalla.

· Qué he modificado
Programé los 3 endpoints (@Get, @Get(':id') y @Patch) en el backend. En el frontend, configuré la IP y creé la interfaz con la lista interactiva y la ficha de la criatura.

· Resultado
La pantalla muestra la lista de criaturas. Al seleccionar una, aparece su ficha. Si pulsas "Me gusta", el móvil avisa al servidor, se suma el like, y la pantalla se actualiza al momento con el nuevo número.