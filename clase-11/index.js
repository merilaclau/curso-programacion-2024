/* Escribir un programa que pida ingresar un número del 1 al 12 por prompt 
y que devuelva por alert el nombre de mes correspondiente. 
Hacerlo primero con if-else if y después con switch. */

const numero = prompt("Ingresá un número del 1 al 12");

// versión con if - else if
/* if (numero === "1") {
  alert("El mes es enero");
} else if (numero === "2") {
  alert("El mes es febrero");
} else if (numero === "3") {
  alert("El mes es marzo");
} else if (numero === "4") {
  alert("El mes es abril");
} else if (numero === "5") {
  alert("El mes es mayo");
} else if (numero === "6") {
  alert("El mes es junio");
} else if (numero === "7") {
  alert("El mes es julio");
} else if (numero === "8") {
  alert("El mes es agosto");
} else if (numero === "9") {
  alert("El mes es septiembre");
} else if (numero === "10") {
  alert("El mes es octubre");
} else if (numero === "11") {
  alert("El mes es noviembre");
} else if (numero === "12") {
  alert("El mes es diciembre");
} else {
  alert("No corresponde a un mes");
} */

// versión con switch
switch (numero) {
  case "1":
    alert("El mes es enero");
    break;
  case "2":
    alert("El mes es febrero");
    break;
  case "3":
    alert("El mes es marzo");
    break;
  case "4":
    alert("El mes es abril");
    break;
  case "5":
    alert("El mes es mayo");
    break;
  case "6":
    alert("El mes es junio");
    break;
  case "7":
    alert("El mes es julio");
    break;
  case "8":
    alert("El mes es agosto");
    break;
  case "9":
    alert("El mes es septiembre");
    break;
  case "10":
    alert("El mes es octubre");
    break;
  case "11":
    alert("El mes es noviembre");
    break;
  case "12":
    alert("El mes es diciembre");
    break;
  default:
    alert("No corresponde a un mes");
}

function obtenerMes() {
  const numero = prompt("Ingresá un número del 1 al 12");
  switch (numero) {
    case "1":
      alert("El mes es enero");
      break;
    case "2":
      alert("El mes es febrero");
      break;
    case "3":
      alert("El mes es marzo");
      break;
    case "4":
      alert("El mes es abril");
      break;
    case "5":
      alert("El mes es mayo");
      break;
    case "6":
      alert("El mes es junio");
      break;
    case "7":
      alert("El mes es julio");
      break;
    case "8":
      alert("El mes es agosto");
      break;
    case "9":
      alert("El mes es septiembre");
      break;
    case "10":
      alert("El mes es octubre");
      break;
    case "11":
      alert("El mes es noviembre");
      break;
    case "12":
      alert("El mes es diciembre");
      break;
    default:
      alert("No corresponde a un mes");
  }
  // el return hace que pueda devolver un valor
  return numero;
}

obtenerMes();

function obtenerMensajeDeCumple() {
  const mesCumpleMeri = "5";
  const mesElegido = obtenerMes();

  if (mesElegido === mesCumpleMeri) {
    console.log("Feliz cumple Meri");
  } else {
    console.log("A llorar a la iglesia");
  }
}

//1.
/***********************************************
 *
 * 1. Hacer una funcion llamada "saludo"
 * 2. Cada vez llamo la funcion le paso un nombre como parámetro
 * 3. Toma ese nombre y me dice
 *    "Hola <nombre>" en un alert.
 *
 ***********************************************/

function saludo(nombre, apellido) {
  alert(`Hola ${nombre} ${apellido}`);
}

saludo("Celeste", "Cabrera");
saludo("Meri", "Laclau");

function saludoMaela() {
  const nombre = "Maela";

  alert(`Hola ${nombre}`);
}

//2.
/***********************************************
 *
 * Hacer una funcion para elevar un
 * número al cuadrado. El numero va por param
 *
 ***********************************************/

function numeroAlCuadrado(numero) {
  return numero * numero;
}

numeroAlCuadrado(2);
// retorna un 4

numeroAlCuadrado(5);
// retorna un 25

saludo();
saludo();
saludo();

function saludo(nombre, apellido) {
  console.log(`Hola, ${nombre} ${apellido}`);
}

saludo("Celeste", "Cabrera");

const saludo = () => {
  console.log("Hola");
};

function suma(numero1, numero2) {
  return numero1 + numero2;
}

const suma = (numero1, numero2) =>
  console.log(`Los números ingresados son ${numero1} y ${numero2}`);
