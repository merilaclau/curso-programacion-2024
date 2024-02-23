//Arrow function
const suma = (numero1, numero2) => {
    return numero1 + numero2;
  };  

//ARRAYS

const meses = ["Enero", "Febrero", "Marzo"];

// Agrega el mes de abril al final del array
meses.push("Abril");

//Elimina el último elemento del array
meses.pop();

//Me muestra todo el array
console.log(meses);

//Me muestra el primer elemento del array
console.log(meses[0]);

/* Crear un programa que le pida a le usuario 
que ingrese 3 notas y devolverle el promedio
de esas 3 notas */

const notas = [];

function obtenerNota(notas) {
  const notaUsuarie = parseInt(prompt("Ingresa una nota"));

  notas.push(notaUsuarie);
}

function obtenerPromedio(notas) {
  return (notas[0] + notas[1] + notas[2]) / 3;
}

// Funciones pasadas a función flecha
const obtenerNota = () => {
  const notaUsuarie = parseInt(prompt("Ingresa una nota"));

  notas.push(notaUsuarie);
};

const obtenerPromedio = () => (notas[0] + notas[1] + notas[2]) / 3;
