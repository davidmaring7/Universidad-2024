// Variables

// 3 pasos: Declaración, Inicialización y Uso

// let, var, const

var nombre = "Ana";
console.log("Mi nombre es: ", nombre);

var edad = 30;

var activo = true;

console.log(
  "Mi nombre es: " + nombre + " mi edad es " + edad + " estado: " + activo
);

var apellido;

apellido = "Sanchez";

console.log("Apellido", apellido);

// Concatenación de Strings
// var nombreCompleto = nombre + " " + apellido;
var nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

// AnaSanchez
// Ana Sanchez
// Sanchez Ana

// Existen variables de alcance global y alcance local
// Let es para variables locales

function imprimirNombre(nombre) {
  let estado = "Activo";
  console.log("Nombre", nombre, "Estado", estado);
}

console.log("Estado", estado);
imprimirNombre("Jose");

// Const -> Constantes

const ci = "12345678";
var cedula = "12345678";

cedula = "123";
console.log("Cedula", cedula);

ci = "3456";
console.log("Ci", ci);

const numero1 = 100;
const numero2 = 20;
var resultado = numero1 + numero2;
resultado = 0;

console.log(resultado);
