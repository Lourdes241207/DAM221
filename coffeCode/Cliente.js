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

const pedidos = [];
function mostrarMenu() {
    console.log('\n=====================');
    console.log('    MENÚ PRINCIPAL   ');
    console.log('========================');

    const menuFormateado = opcionesMenu.map(opc => '${opc.id}.${opc.nombre}').join('\n');
    console.log(menuFormateado);
console.log('========================');

rl.question('\nSeleccione una opcion (1-5): ', opcion =>{
    procesarOpcion(opcion);
});
}

function consultarProductosDisponibles(){
    console.log('\n---Productos Disponibles---');
    let hayDisponibles = false;
    productos.forEach(p =>{
        if(p.disponibles){
            console.log(`id:${p.id} | nombre: ${p.nombre} | precio: $${p.precio} | estado: disponible`);
            hayDisponibles = true;
        }
    });
if(!hayDisponibles){
    console.log('Por el momento no hay productos disponibles.');

}
mostrarMenu();
}
function verPromociones (){
    console.log('\n---Promociones Activas---');
    const listaPromos =promociones.map(promo =>{
        const prod =productos.find(p=> p.id ---promo.productoId);
        const precioConDescuento = prod ? prod.precio * (1 - promo.descuento / 100) : 0;
        return `${promo.descripcion} -> Precio original: $${prod.precio} | Precio promo: $${precioConDescuento}`;
    });

    listaPromos.forEach(p => console.log(p));
    mostrarMenu();
}

function crearPedido(){
    console.log('\n---Crear Nuevo Pedido---');
    const disponibles = productos.filter(p => p.disponible);
    disponibles.forEach(p =>{
        console.log(`${p.id}. ${p.nombre} ($${p.precio})`);
    });
    rl.question('\nIngrese el ID del producto que desa pedir: ',(idInput) =>{
        const idProd = parseInt(idInput);
        const productoEncontrado = disponibles.find(p => p.id === isProd);
        if(productoEncontrado){
            const nuevoPedido ={
                idPedido: pedidos.length + 1,
                producto: productoEncontrado.nombre,
                precio: productoEncontrado.precio,
                fecha: new Date().toLocaleTimeString()
            };
            pedidos.push(nuevoPedido);
            console.log('\n!Pedido agregado con exito¡(${productoEncontrado.nombre})');
        }else{
            console.log('\n!No se encontro el producto o no esta disponible¡');
        }
        mostrarMenu();
    });
}
function listarPedidosRealizados(){
    console.log('\n---Pedidos Realizados---');
    if(pedidos.legnth === 0){
        console.log('Aun no hay pedidos registrados');
    }else{
        pedidos.forEach(p =>{
            console.log(`Pedido #${p.idPedido} | Producto: ${p.producto} | Total: $${p.precio} | Hora: ${p.fecha}`);
        });
    }
    mostrarMenu();

    mostrarMenu();

function procesarOpcion(opcion) {
    switch (opcion) {
        case '1':
            consultarProductosDisponibles();
            break;
        case '2':
            verPromociones();
            break;
        case '3':
            crearPedidos();
            break;
        case '4':
            listarPedidosRealizados();
            break;
        case '5':
            console.log('\n¡Gracias por comprar en nuestra cafeteria! Hasta luego');
            rl.close();
            break;
        default:
            console.log('\nOpción no válida. Intente nuevamente.');
            mostrarMenu();
            break;
    }
}

mostrarMenu();