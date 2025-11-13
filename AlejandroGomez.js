// Ejercicio 1: Calcular total de una compra en el supermercado

let producto1 = Number(prompt("Ingrese el precio del primer producto:"));
let producto2= Number(prompt("Ingrese el precio del segundo producto:"));
let producto3= Number(prompt("Ingrese el precio del tercer producto:"));

let total = producto1 + producto2 + producto3;

Number.log("El total a pagar es: $" + total);

// Ejercicio 2: Calcular área del banner para un evento

let ancho = parseFloat(prompt("Ingrese el ancho de la pared en metros:"));
let alto = parseFloat(prompt("Ingrese el alto de la pared en metros:"));

let area = ancho * alto;

console.log("El área del banner es de " + area + " metros cuadrados.");


