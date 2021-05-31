- **Felicitaciones! Me encantó el juego!** 👍👍

- Si no me equivoco, podés importar la **font** desde el `.css` así no hace falta importarla en todos los archivos `.html`. [Tenés que utilizar font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face).

- **TODOS los `var` deberían ser `const` o `let`** dependiendo el caso. Ya no se usa más `var` para asignar variables. [Más info acá](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

- Quizás un mejor nombre para `moveCharacter()` sería `actions()` o `keyActions()`, porque realiza más acciones esa función además de mover al personaje. Como por ejemplo poner pausa.

- Le sumaría más de 1 al `enemyCounter` cuando la cantidad de matados llega a 10, así se vuelve realmente más difícil cada 10 (Yo probé con 100 y me gustó).

- El `gameOver` podría ser otro `.html` y al perder redireccionar a ese HTML y ya. No hace falta crear una sección invisible y todo eso.
