// Hacer un array de objetos que representen mascotas.
// Agregarles al menos 6 propiedades de distinto tipo
// (number, string, boolean, método, array y objeto).
// Con un bucle for devolver una descripción de cada mascota

const gates = [
  {
    nombre: "Manola",
    caracteristica: "arisca",
    edad: 13,
    comeAceitunas: true,
    describirGatite: function () {
      console.log(
        `${this.nombre} es ${this.caracteristica},${
          this.comeAceitunas ? "" : " no"
        } come aceitunas y tiene ${this.edad} años`
      );
    },
  },
  {
    nombre: "Jet",
    caracteristica: "esponjoso",
    edad: 12,
    comeAceitunas: true,
    describirGatite: function () {
      console.log(
        `${this.nombre} es ${this.caracteristica} y tiene ${this.edad} años`
      );
    },
  },
  {
    nombre: "Mimi",
    caracteristica: "selectiva",
    edad: 17,
    comeAceitunas: true,
    describirGatite: function () {
      console.log(
        `${this.nombre} es ${this.caracteristica} y tiene ${this.edad} años`
      );
    },
  },
  {
    nombre: "Elvira",
    caracteristica: "compañera",
    edad: 3,
    comeAceitunas: false,
    describirGatite: function () {
      console.log(
        `${this.nombre} es ${this.caracteristica},${
          this.comeAceitunas ? "" : " no"
        } come aceitunas y tiene ${this.edad} años`
      );
    },
  },
  {
    nombre: "Emilio",
    caracteristica: "cauteloso",
    edad: 3,
    comeAceitunas: false,
    describirGatite: function () {
      console.log(
        `${this.nombre} es ${this.caracteristica} y tiene ${this.edad} años`
      );
    },
  },
];

for (let i = 0; i < gates.length; i++) {
  gates[i].describirGatite();
}

// OPERADOR TERNARIO
let profe = true;
const nombre = profe ? "Meri" : "Alumne";


// MAP
// devuelve un nuevo array con la misma cantidad de elementos
const resultadoMap = gates.map(gatite => gatite.nombre);

// MAP CON OPERADOR SPREAD
const resultadoMapConSpread = gates.map(gatite => {
     return { ...gatite, mimos: true, comeAceitunas: false }});


const funcionEjemplo = (param1, param2) => {
    console.log(param1);
    console.log(5 + param2);
};

function obtenerGatite() {
    // serie de operaciones 
}

// FILTER
// devuelve un array con los elementos que cumplen la condicion

const resultadoFilter = gates.filter( gatite => gatite.comeAceitunas === true );

const devs = [
    {
      nombre: "Celeste",
      apellido: "Cabrera",
      edad: 22,
      mascotas: ["Alex", "Arya"],
      esProgramadora: true,
      armarNombreCompleto: function () {
        console.log(`${this.nombre} ${this.apellido}`);
      },
    },
    {
      nombre: "Camila",
      apellido: "Vega",
      edad: 31,
      mascotas: ["Felipe"],
      esProgramadora: false,
      armarNombreCompleto: function () {
        console.log(`${this.nombre} ${this.apellido}`);
      },
    },
    {
      nombre: "maela",
      apellido: "mirre",
      edad: 44,
      mascotas: ["cachilo", "verdolaga"],
      esProgramadora: true,
      armarNombreCompleto: function () {
        console.log(`${this.nombre} ${this.apellido}`);
      },
    },
    {
      nombre: "tef",
      apellido: "Abbatangelo",
      edad: 34,
      mascotas: ["Elvira", "Emilio"],
      esProgramadora: false,
      armarNombreCompleto: function () {
        console.log(`${this.nombre} ${this.apellido}`);
      },
    },
    {
      nombre: "Sasa",
      apellido: "Santii",
      edad: 30,
      mascotas: ["Fernu", "Mate", "Birri"],
      esProgramadora: false,
      armarNombreCompleto: function () {
        console.log(`${this.nombre} ${this.apellido}`);
      },
    },
    {
      nombre: "Awi",
      apellido: "Gómez",
      edad: 29,
      mascotas: ["Lola", "Gatito", "Chipichipi", "Bache", "Don Saca Quiqui"],
      esProgramadora: false,
      armarNombreCompleto: function () {
        console.log(`${this.nombre} ${this.apellido}`);
      },
    },
    {
      nombre: "Gisela",
      apellido: "Rodriguez",
      edad: 40,
      mascotas: ["Alexis"],
      esProgramadora: true,
      armarNombreCompleto: function () {
        console.log(`${this.nombre} ${this.apellido}`);
      },
    },
  ];
  
const resultadoFilterMapDevs = devs.filter(dev => dev.mascotas.length >= 3).map(dev => dev.mascotas);

// FIND 
// devuelve el elemento que cumple con la condición

const resultadoFindDevs = devs.find(dev => dev.esProgramadora === false);

const resultadoFindIncludes = devs.find(dev => dev.mascotas.includes("Bache"));