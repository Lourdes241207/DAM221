const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const opcionesMenu = [
    { id: '1', nombre: 'Consultar Productos Disponibles'},
    { id: '2', nombre: ' Ver las Promociones del Día'},
    { id: '3', nombre: 'Crear pedido de Productos'},
    { id: '4', nombre: 'Listar Pedidos Realizados'},
    {id: '5', nombre: 'Salir'}
];

const productos = [
    { id: 1, nombre: 'Café Americano', precio: 10, disponible: true},
    { id: 2, nombre: 'Café Italiano', precio: 20, disponible: true},
    { id: 3, nombre: 'Pan de Muerto', precio: 30, disponible: true}
];

const promociones = [
{ productoId: 1, descuento: 20, descripcion: '20% de descuento en Café Americano'},
{ productoId: 2, descuento: 15, descripcion: '15% de descuento en Pan de Muerto'}
];