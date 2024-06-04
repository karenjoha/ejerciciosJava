let sueldo = 1800;  // Ejemplo de sueldo
let antiguedad = 12;  // Ejemplo de antigüedad

// i. Sueldo inferior a $2000 US y antigüedad igual o superior a 10 años
let comparacion1 = (sueldo < 2000) && (antiguedad >= 10);
console.log(comparacion1);  // true

// ii. Sueldo inferior a $2000 US o antigüedad menor a 10 años
let comparacion2 = (sueldo < 2000) || (antiguedad < 10);
console.log(comparacion2);  // true

// iii. Sueldo mayor o igual a $2000 US
let comparacion3 = sueldo >= 2000;
console.log(comparacion3);
