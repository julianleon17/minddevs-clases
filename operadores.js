/*
  Ejemplo de la vida real:
  Imagina que estás calculando el cambio después de hacer una compra. Utilizas operadores matemáticos como suma, resta, multiplicación y división para determinar el cambio correcto.

  División de cuentas en un restaurante: Después de una comida en un restaurante con amigos, llega la hora de dividir la cuenta. Utilizas el operador de división para dividir el total de la cuenta entre el número de personas para determinar cuánto debe pagar cada uno.

  // Logica
  Imagina que estás organizando una fiesta y solo quieres permitir la entrada a personas mayores de 18 años que no estén en la lista negra de invitados. Utilizas operadores lógicos para verificar la edad y la presencia en la lista negra antes de permitir la entrada.
*/

// Operadores aritméticos
const x = 10;
const y = 5;

console.log( x + y ); // Suma
console.log( x - y ); // Resta
console.log( x * y ); // Multiplicación
console.log( x / y ); // División


/*
  ¿Qué son los Operadores Lógicos?
  Los operadores lógicos son herramientas que nos permiten combinar o modificar expresiones lógicas para tomar decisiones en nuestros programas.

  Nos ayudan a evaluar condiciones múltiples y a controlar el flujo de ejecución del programa.
  Tipos de Operadores Lógicos:

  AND (&&): Devuelve true si todas las expresiones lógicas son verdaderas.
  OR (||): Devuelve true si al menos una de las expresiones lógicas es verdadera.
  NOT (!): Invierte el valor de una expresión lógica, convirtiendo true en false y viceversa.


  ( <  )  Menor que
  ( <= )  Menor o igual
  ( >  )  Mayor que
  ( >= )  Mayor o igual
  ( == )  Igual a
  ( != )  Diferente a
*/

console.log( 2 < 5 );
console.log( 2 <= 2 );
console.log( 2 > 5 );
console.log( 2 >= 5 );
console.log( 2 == 5 );
console.log( 2 != 5 );


// Ejemplo de operadores lógicos
let edad = 20;
let enListaNegra = false;

// Verificar si la persona puede entrar a la fiesta
if ( edad >= 18 && !enListaNegra ) {
  console.log( "¡Bienvenido a la fiesta!" );
} else {
  console.log( "Lo siento, no puedes entrar." );
}
