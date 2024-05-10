let articulo = prompt("Ingrese el nombre del articulo: ");
let cantArticulos = parseInt(prompt("Ingrese la cantidad de articulos: "));
let precioArticulo = parseInt(prompt("Ingrese el precio del articulo: "));

let totalPrecio = cantArticulos * precioArticulo;
let descuento = totalPrecio * 0.15;
let precioFinal = totalPrecio - descuento;

if (
  isNaN(cantArticulos) ||
  isNaN(precioArticulo) ||
  !isNaN(articulo) ||
  cantArticulos == "" ||
  precioArticulo == ""
) {
  console.log("INGRESE SOLO NUMEROS - NO PUEDE SER VACÍO.");
} else if (cantArticulos < 0 || precioArticulo < 0) {
  console.log("Por favor, ingrese solo números positivos.");
} else if (cantArticulos > 1) {
  if (cantArticulos > 10) {
    console.log(
      `El precio total de ${cantArticulos} ${articulo}s es de $${totalPrecio} | Se aplicó un descuento del 15% | El precio final es de $${precioFinal}`
    );
  } else {
    console.log(
      `El precio total de ${cantArticulos} ${articulo}s es de $${totalPrecio} | No se aplicó descuento | El precio final es de $${totalPrecio}`
    );
  }
}
