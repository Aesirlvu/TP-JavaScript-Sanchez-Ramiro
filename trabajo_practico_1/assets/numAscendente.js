let num1 = parseFloat(prompt("Escribe un numero"));
let num2 = parseFloat(prompt("Escribe el segundo numero"));
let num3 = parseFloat(prompt("Escribe un tercer número"));

let menor, medio, mayor;


if (num1 <= num2 && num1 <= num3) {
  menor = num1;
  if (num2 <= num3) {
    medio = num2;
    mayor = num3;
  } else {
    medio = num3;
    mayor = num2;
  }
} else if (num2 <= num1 && num2 <= num3) {
  menor = num2;
  if (num1 <= num3) {
    medio = num1;
    mayor = num3;
  } else {
    medio = num3;
    mayor = num1;
  }
} else {
  menor = num3;
  if (num1 <= num2) {
    medio = num1;
    mayor = num2;
  } else {
    medio = num2;
    mayor = num1;
  }
}

console.log("Los números ordenados de forma ascendente son:");
console.log(`${menor}, ${medio}, ${mayor}`);
