/*
  Ejemplo de la vida real:
  Imagina que estás haciendo la compra en un supermercado y necesitas comprar varios artículos de una lista.
  Recorres la lista uno por uno, revisando cada artículo y añadiéndolo a tu carrito hasta que hayas revisado todos los elementos de la lista.

*/

// Ciclo for para imprimir los números del 1 al 5
for ( let i = 1; i <= 10; i++ ) {
  console.log( i );
}

// While
let i = 0;
while ( i<10 ) {
  console.log( 'Hello, World! ' + i );
  i++;
}


// Reto
function paresImpares ( numero ) {
  for ( let i = 1; i <= numero; i++ ) {
    if ( i % 2 === 0 ) {
      console.log( "Buzz " + i ); // Numeros pares
    } else {
      console.log( "Fizz " + i ); // Numeros impares
    }
  }
}

paresImpares( 10 );
