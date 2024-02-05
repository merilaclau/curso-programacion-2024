const nombre = 'Meri';
const apellido = 'Laclau';
const tieneMascotas = true;
const esVegana = true;
const fumaTabaco = false;

// OPERADORES LÓGICOS
// Nos permiten hacer comparaciones y nos van a devolver un valor de tipo boolean

// && (Conjunción / AND )
// Sólo devuelve true si ambas variables o condiciones son true
console.log(esVegana && tieneMascotas);
// va a devolver true porque ambas variables son true
console.log(esVegana && fumaTabaco);
// va a devolver false porque sólo una de las variables es true


// || (Disyunción / OR )
// Devuelve true si al menos una condición o variable es true
console.log(esVegana || tieneMascotas);
// va a devolver true porque ambas variables son true
console.log(esVegana || fumaTabaco);
// va a devolver true porque al menos una de las variables es true


// ! (Negación / NOT )
// Invierte o niega el valor de una variable booleana
console.log(!fumaTabaco);
// va a devolver true porque fumaTabaco es originalmente false


// Método length
nombre.length();
// devuelve la cantidad de caracteres

// Método prompt
// abre una caja de diálogo en el navegador
prompt('Cómo te llamás');


// Método alert
// muestra un mensaje en el navegador
alert('Nombre inválido')

// ESTRUCTURAS DE CONTROL
/* Nos permiten controlar cómo va a ser el flujo de nuestro programa. 
Si se cumple una condición, sucederá una cosa, si se cumple otra, sucederá algo distinto.
*/

// IF
if (esVegana) {
    alert('Te preparo un hummus');
}

if (!esVegana) {
    alert('Te preparo un asado');
}

// IF, ELSE
if (esVegana) {
    alert('Te preparo un hummus');
} else {
    alert('Te preparo un asado');
}

// IF, ELSE IF, ELSE
if (!esVegana) {
    alert('Te preparo un asado');
} else if (!esVegana && fumaTabaco) {
    alert('Te preparo un pucho y un asado');
} else {
    alert('Te preparo un hummus');
}
