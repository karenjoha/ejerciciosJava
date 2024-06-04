// Definición de variables
let a = 4;
let b = 7;
let c = 2 * b;
let x = a;
let y = 3 * x;
let u = 6;
let w = 10;
let z = 2 * w;

// a. a / (bc)
let resultadoA = a / (b * c);
console.log("Resultado de a / (bc): " + resultadoA);

// b. a^2 + b^2 / 9^2
let resultadoB = Math.pow(a, 2) + Math.pow(b, 2) / Math.pow(9, 2);
console.log("Resultado de a^2 + b^2 / 9^2: " + resultadoB);

// c. (x + y) / u + w / a
let resultadoC = (x + y) / u + w / a;
console.log("Resultado de (x + y) / u + w / a: " + resultadoC);

// d. x * y / (z + w)
let resultadoD = (x * y) / (z + w);
console.log("Resultado de x * y / (z + w): " + resultadoD);
