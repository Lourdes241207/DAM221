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
    { id: 1, nombre: 'Café Americano', precio: 40, disponible: true},
    { id: 2, nombre: 'Café Italiano', precio: 45, disponible: true},
    { id: 3, nombre: 'Pan de Muerto', precio: 15, disponible: true}
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

    const menuFormateado = opcionesMenu.map(opc => `${opc.id}.${opc.nombre}`).join('\n');
    console.log(menuFormateado);
console.log('========================');

rl.question('\nSeleccione una opcion (1-5): ', opcion =>{
    procesarOpcion(opcion);
});
}

function consultarProductosDisponibles(){
    console.log('\n---Productos Disponibles---');
    let hayDisponibles = true;
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
    rl.question('\nIngrese el ID del producto que desea pedir: ',(idInput) =>{
        const idProd = parseInt(idInput);
        const productoEncontrado = disponibles.find(p => p.id === idProd);
        if(productoEncontrado){
            const nuevoPedido ={
                idPedido: pedidos.length + 1,
                producto: productoEncontrado.nombre,
                precio: productoEncontrado.precio,
                fecha: new Date().toLocaleTimeString(),
                estado: 'Pedido recibido'
            };
            pedidos.push(nuevoPedido);
            console.log(productoEncontrado.nombre);
            console.log(`\n¡Pedido agregado con exito! (${productoEncontrado.nombre}`);
            console.log(`Estado: ${nuevoPedido.estado}]`);

            setTimeout(() =>{
                nuevoPedido.estado = 'Preparando...';
                console.log(`\n[Notificación Pedido #${nuevoPedido.idPedido}]: ${nuevoPedido.estado}`);
            }, 2000); //2 segundos

            setTimeout(() => {
                nuevoPedido.estado = 'Empacando...';
                console.log(`[Notificación Pedido #${nuevoPedido.idPedido}]: ${nuevoPedido.estado}`);
            }, 4000);//4 segundos

            setTimeout(() => {
                nuevoPedido.estado = '¡Pedido Entregado!';
                console.log(`[Notificación Pedido #${nuevoPedido.idPedido}]: ${nuevoPedido.estado}\n`);
            }, 6000);//6segundos
            
        }else{
            console.log('\n!No se encontro el producto o no esta disponible¡');
        }
        mostrarMenu();
    });
}
function listarPedidosRealizados(){
    console.log('\n---Pedidos Realizados---');
    if(pedidos.length === 0){
        console.log('Aun no hay pedidos registrados');
    }else{
        pedidos.forEach(p =>{
            console.log(`Pedido #${p.idPedido} | Producto: ${p.producto} | Total: $${p.precio} | Hora: ${p.fecha}`);
        });
    }
}
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
            crearPedido();
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
