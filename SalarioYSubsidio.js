let nombreEmpleado = "Juan Pérez";  // Ejemplo de nombre
let salarioPorHora = 2500;  // Ejemplo de salario por hora
let horasTrabajadas = 160;  // Ejemplo de horas trabajadas en un mes

// i. Calcular salario básico mensual
let salarioBasicoMensual = salarioPorHora * horasTrabajadas;
console.log(salarioBasicoMensual);  // 400000

// ii. Determinar si recibe subsidio de transporte (menor o igual a $700,000 COP)
let recibeSubsidioTransporte = salarioBasicoMensual <= 700000;
console.log(recibeSubsidioTransporte);  // true

// iii. Mostrar nombre, salario básico mensual y si recibe subsidio de transporte
console.log("Nombre del empleado: " + nombreEmpleado);
console.log("Salario básico mensual: " + salarioBasicoMensual);
console.log("Recibe subsidio de transporte: " + recibeSubsidioTransporte);
