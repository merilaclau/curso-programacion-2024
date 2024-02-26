const persona = {
    nombre: 'Meri',
    apellido: 'Laclau',
    edad: 37,
    mascotas: [ 'Bellota', 'Beluga', 'Pirulo', 'Pochoclo'],
    esProgramadora: true,
    armarNombreCompleto: function() { console.log(`${this.nombre} ${this.apellido}`) },
    domicilio: {
        calle: 'Alvear',
        numero: 1234,
        ciudad: 'CABA'
    },
    fisionomia: {
        colorDePelo: 'Negro',
        colorDeOjos: 'Marrones',
        medidas: {
            altura: 1.60,
            peso: 55
        }
    }
};

const gol = {
    marca: 'Volkswagen',
    color: 'gris',
    cantidadDePuertas: 3,
    personasConCedulaAzul: [
        { nombre: 'Celes', dni: 50000000 },
        { nombre: 'Meri', dni: 32344613 },
        { nombre: 'Maela', dni: 40000000 }
    ],
    airbags: true,
    patente: 'ABC 123'
};

console.log(persona.apellido);
// retorna 'Laclau'

persona.edad = 18;
// reasigna el valor de edad a 18


// ASIGNACION DE VALOR
const gatite = 'Alex';


// COMPARACION NO ESTRICTA (SOLO VALOR)
1 == '1'
// true


// COMPARACION ESTRICTA (VALOR Y TIPO DE DATO)
1 === '1'
// false