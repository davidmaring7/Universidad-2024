// If, else, else if, switch

if (2 + 2 == 4 && true == false) {
  console.log("Entro en el if");
} else {
  console.log("Caso por defecto");
}

var edad = 15;

if (edad > 17) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

nota1 = 10;
nota2 = 4;
nota3 = 8;
resultado = (nota1 + nota2 + nota3) / 3;

if (resultado >= 10) {
  console.log("Aprobado con: ", resultado);
} else {
  console.log(`Reprobado con: ${resultado}`);
}
