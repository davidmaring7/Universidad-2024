// Operadores de Asignación
// Operadores Aritmeticos
// Operadores Logicos
// Operadores de comparación

// = -> Asigna un valor

var a = 1;

// +=

a += 2;
a -= 1;
a *= 5;
console.log(a);

// -=
// *=

// Matematicos

// +
// -
// *
// /
// %
// **

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(8 % 2);
console.log(2 ** 2);

// Comparación

// ==
// === -> Permite comparar por tipos de datos, es mas estricto
// <=
// >=
// !=
// !==
// <
// >

console.log(2 == 2);
console.log("2" == 2);

console.log("2" === 2);
console.log(18 == 18);

console.log(5 != 4);
console.log(6 != 6);

console.log(18 >= 18);
console.log(10 <= 9);
console.log(18 > 18);
console.log(17 < 45);

// Logicos

// && -> AND
// || -> OR

var edad = 18;
var estado = "active";

var condicion = edad > 18 && estado == true;
console.log("condicion", condicion);
