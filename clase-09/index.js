const nombre = 'Meri';
const apellido = 'Laclau';

// CONCATENAR TEXTO
const nombreCompletoConcatenado = 'Mi nombre es ' + nombre + ' ' + apellido;

// INTERPOLAR TEXTO
const nombreCompletoInterpolado = `Mi nombre es ${nombre} ${apellido}`;

// Suma
let edad = 5 + 5;
// Resta
edad = 10 - 5;
// Multiplicación
edad = 5 * 10;
// División
edad = 10 / 5;
// Módulo o resto
edad = 10 % 5;


// ASIGNACIONES ARITMÉTICAS
let numero = 100;

// AMBAS OPCIONES SUMAN 10 AL VALOR ORIGINAL
numero = numero + 10;
numero += 10;

console.log(numero); 

numero -= 10;
numero *= 2;
numero /= 4;


// COMPARACIONES
// Comparación estricta (valor y tipo de dato)
// igual
console.log(1 === 1); // true
console.log(1 === 2); // false

// desigual
console.log(1 !== 2); // true
console.log(1 !== 1); // false

// Comparación no estricta (solo valor)
console.log(1 == 1); // true
console.log(1 == "1"); // true

console.log(1 > 2); // false
console.log(1 > 0); // true
console.log(1 > 1); // false

console.log(1 >= 2); // false
console.log(1 >= 0); // true
console.log(1 >= 1); // true

console.log(1 < 2); // true
console.log(1 < 0); // false
console.log(1 < 1); // false

console.log(1 <= 2); // true
console.log(1 <= 0); // false
console.log(1 <= 1); // true