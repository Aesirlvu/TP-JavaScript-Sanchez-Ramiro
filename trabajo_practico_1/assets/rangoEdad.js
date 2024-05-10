
let edad = parseFloat(prompt("¿Cuántos años tienes?"));

if (edad >= 0 && edad <= 12) {
    console.log("Eres un niño");
} else if ( edad >= 13 && edad <= 19) {
    console.log("Eres un adolescente");
} else if ( edad >= 20 && edad <= 59) {
    console.log("Eres un adulto");
} else if ( edad >= 60 && edad <= 99) {
    console.log("Eres un adulto mayor");
} else if ( edad >= 100) {
    console.log("¿Eres inmortal?");
}
