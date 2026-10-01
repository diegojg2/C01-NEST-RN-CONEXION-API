· Qué he aprendido
A utilizar el método PATCH en una petición HTTP para decirle al servidor que modifique un dato existente (sumar un like).

· Respuesta a la pregunta de comprensión
Porque los datos solo se guardan en la memoria temporal (RAM) del servidor. Al reiniciar NestJS, esa memoria se borra y vuelve al valor de 14 escrito en el código.

· Qué he modificado
Creé la ruta @Patch en el backend, ajusté mi IP y el .js del main.ts, y programé el botón "❤️ ME GUSTA" en React Native.

· Resultado
Al pulsar el botón, el móvil avisa al backend para que sume un like. El backend lo suma en su memoria, devuelve el nuevo total, y la pantalla del móvil se actualiza al instante con el nuevo número.