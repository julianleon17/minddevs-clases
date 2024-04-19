/*
  Ejemplo de la vida real:
  Imagina que estás siguiendo una receta de cocina. La receta es como una función: toma ingredientes (entradas), los procesa de cierta manera (acciones) y produce un plato final (salida).
*/

// Definicion de una funcion para calcular el area de un circulo
function calcularAreaCirculo ( radio ) {
  return( Math.PI * Math.pow( radio, 2 ) );
}

// Definicion de la funcion para calcular el area de un rectangulo
function calcularAreaRectangulo ( base, altura ) {
  // Formula del area: base * altura
  const area = base * altura;
  return( area );
}

// Hola, Mundo!
function sayHello () {
  console.log( 'Hello, Wold!' );
}


/*======================
  Llamada a la funcion
 *======================*/

sayHello();

const radio = 5;
const areaCir = calcularAreaCirculo( radio );
console.log( "El area del circulo es: " + areaCir );

// Area Rectangulo
const base = 10;
const altura = 5;
const areaRec = calcularAreaRectangulo( base, altura );
console.log( "El area del rectangulo es: " + areaRec );
