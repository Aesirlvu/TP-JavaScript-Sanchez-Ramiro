let nota1 = parseInt(prompt("Ingrese la nota del primer trimestre: "));
let nota2 = parseInt(prompt("Ingrese la nota del segundo trimestre: "));
let nota3 = parseInt(prompt("Ingrese la nota del tercer trimestre: "));

let promedio = (nota1 + nota2 + nota3) / 3;

if (
  isNaN(nota1) ||
  isNaN(nota2) ||
  isNaN(nota3) ||
  nota1 == "" ||
  nota2 == "" ||
  nota3 == ""
) {
  console.log(" INGRESE SOLO NUMEROS.");
} else if (
  nota1 < 0 ||
  nota1 > 10 ||
  nota2 < 0 ||
  nota2 > 10 ||
  nota3 < 0 ||
  nota3 > 10
) {
  console.log("Por favor, ingrese solo números entre 0 y 10.");
} else {
switch (true) {
    case promedio >= 1 && promedio <= 3:
        console.log(`el promedio de las notas es: ${promedio} - NOTA INSUFICIENTE`);
        break;
    case promedio >= 4 && promedio <= 5:
        console.log(`el promedio de las notas es: ${promedio} - NOTA REGULAR`);
        break;
    case promedio >= 6 && promedio <= 7:
        console.log(`el promedio de las notas es: ${promedio} - NOTA BUENA`);
        break;
    case promedio >= 8 && promedio <= 9:
        console.log(`el promedio de las notas es: ${promedio} - NOTA MUY BUENA`);
        break;
    default:
        console.log(`el promedio de las notas es: ${promedio} - NOTA SOBRESALIENTE`);
        break;
}
}
