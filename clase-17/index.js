/*
Hacer un array de objetos que represente clientes de un banco. 
Agregarles al menos 6 propiedades de distinto tipo (number, string, boolean, método, array y objeto).
Usar map para agregarles una nueva propiedad y para modificar el valor de otra.
Usar filter para encontrar a les deudores
Usar find para encontrar un cliente con un DNI específico
Usar forEach para mostrar el saldo de todos por consola
*/

function calculoSaldo() {
    return this.ingresos - this.egresos
}

function calculoDeuda() {
    // return this.saldo < 0;
    return !this.saldo >= 0;
}

let clientes = [
    {
        nombreCompleto: "Elsa Queo",
        dni: 28925746,
        fechaAfiliacion: {
            año: 2004,
            mes: 2,
            dia: 27,
        },
        ingresos: 4000,
        egresos: 5000,
        saldo: function() {
            return this.ingresos - this.egresos
        },
        tieneDeuda: function() {
            return !this.saldo() >= 0
        },
    },
    {
        nombreCompleto: "Mario Neta",
        dni: 37659017,
        fechaAfiliacion: {
            año: 1999,
            mes: 10,
            dia: 13,
        },
        ingresos: 10000,
        egresos: 30000,
        saldo: function() {
            return this.ingresos - this.egresos
        },
        tieneDeuda: function() {
            return !this.saldo() >= 0
        },
    },
    {
        nombreCompleto: "Soyla Ama",
        dni: 30794265,
        fechaAfiliacion: {
            año: 2016,
            mes: 7,
            dia: 10,
        },
        ingresos: 4000,
        egresos: 300,
        saldo: function() {
            return this.ingresos - this.egresos
        },
        tieneDeuda: function() {
            return !this.saldo() >= 0
        },
    },
];

const deudores = clientes.filter(deudore => deudore.egresos > deudore.ingresos);

const dni = clientes.find(cliente => cliente.dni === 28925746);

clientes.forEach(cliente => console.log(`El saldo de ${cliente.nombreCompleto} es ${cliente.saldo()}`));

const clientesActualizades = clientes.map(cliente => {
    return { 
        ...cliente,
        tarjetaDeDebito: 4573,
        egresos: cliente.egresos + 200
    }
});