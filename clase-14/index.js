function mostrarEdad() {
    const edad = parseInt(prompt('Decime tu edad'));
    for(let i = 1; i <= edad; i++) {
        console.log(`Cumpliste ${i} año/s`);
    }
} 

let estrella = ""

for (let i = 0; i < 10; i++) {
  estrella += "*"
  console.log(estrella)
}

for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("El número es FizzBuzz")
    } else if (i % 3 === 0) {
     console.log("El número es Fizz")   
    } else if(i % 5 === 0) {
       console.log("El número es Buzz") 
    } else {
        console.log(`El número es ${i}`)
    }
}
// Resolución de la tarea de la clase pasada
const nombre = [];

function obtenerNombre(arrayParametro) {
  const nuevoNombre = prompt("Sumá un nombre");
  arrayParametro.push(nuevoNombre);
}

obtenerNombre(nombre);
obtenerNombre(nombre);
obtenerNombre(nombre);
obtenerNombre(nombre);
obtenerNombre(nombre);

console.log(nombre);

// Output de la consola
["Manola", "Jet", "Mimi", "Elvira", "Emilio"];