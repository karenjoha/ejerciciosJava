// Definir las combinaciones de p y q
let combinaciones = [
    { p: true, q: true },
    { p: true, q: false },
    { p: false, q: true },
    { p: false, q: false }
];

// Función para calcular NOT p, NOT q, y NOT p AND q
function calcularTablaA() {
    combinaciones.forEach(combinacion => {
        let p = combinacion.p;
        let q = combinacion.q;
        let notP = !p;
        let notQ = !q;
        let notPAndQ = notP && q;

        console.log(`p: ${p}, q: ${q}, NOT p: ${notP}, NOT q: ${notQ}, NOT p AND q: ${notPAndQ}`);
    });
}



// Función para calcular NOT p, NOT q, y NOT p AND NOT q
function calcularTablaB() {
    combinaciones.forEach(combinacion => {
        let p = combinacion.p;
        let q = combinacion.q;
        let notP = !p;
        let notQ = !q;
        let notPAndNotQ = notP && notQ;

        console.log(`p: ${p}, q: ${q}, NOT p: ${notP}, NOT q: ${notQ}, NOT p AND NOT q: ${notPAndNotQ}`);
    });
}

// Ejecutar la función para mostrar la tabla de verdad
calcularTablaA();
// Ejecutar la función para mostrar la tabla de verdad
calcularTablaB();

