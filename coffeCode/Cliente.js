const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const productos = [
    { id: 1, nombre: 'Café Americano', precio: 40 },
    { id: 2, nombre: 'Café Italiano', precio: 45 },
    { id: 3, nombre: 'Pan de muertos', precio: 15 }
];

const pedidos = [];

function mostrarMenu() {
    console.log(`
=================================
       MENÚ PRINCIPAL           
=================================
1. Consultar Productos
2. Crear pedido productos
3. Listar pedidos
4. Salir
=================================
    `);
    
    rl.question('Selecciona una opción (1-4): ', (opcion) => {
        procesarOpcion(opcion.trim());
    });
}

function consultarProductos() {
    console.log(`\n--- CATÁLOGO DE PRODUCTOS ---`);
    productos.forEach(p => {
        console.log(`ID: ${p.id} | Nombre: ${p.nombre} | Precio: $${p.precio}`);
    });
    mostrarMenu();
}

function crearPedido() {
    console.log(`\n--- CREAR NUEVO PEDIDO ---`);
    productos.forEach(p => {
        console.log(`${p.id}. ${p.nombre} ($${p.precio})`);
    });

    rl.question('\nIngresa el ID del producto que deseas agregar: ', (idInput) => {
        const idProd = parseInt(idInput);
        const productoEncontrado = productos.find(p => p.id === idProd);

        if (productoEncontrado) {
            const nuevoPedido = {
                idPedido: pedidos.length + 1,
                producto: productoEncontrado.nombre,
                precio: productoEncontrado.precio,
                fecha: new Date().toLocaleTimeString()
            };
            pedidos.push(nuevoPedido);
            console.log(`\n ¡Pedido agregado con éxito! (${productoEncontrado.nombre})`);
        } else {
            console.log('\n Producto no encontrado.');
        }
        mostrarMenu();
    });
}

function listarPedidos() {
    console.log(`\n--- LISTA DE PEDIDOS REALIZADOS ---`);
    if (pedidos.length === 0) {
        console.log('Aún no hay pedidos registrados.');
    } else {
        pedidos.forEach(p => {
            console.log(`Pedido #${p.idPedido} | Producto: ${p.producto} | Total: $${p.precio} | Hora: ${p.fecha}`);
        });
    }
    mostrarMenu();
}

function procesarOpcion(opcion) {
    switch (opcion) {
        case '1':
            consultarProductos();
            break;
        case '2':
            crearPedido();
            break;
        case '3':
            listarPedidos();
            break;
        case '4':
            console.log('\n¡Gracias por usar el sistema! Hasta luego.');
            rl.close();
            break;
        default:
            console.log('\n Opción no válida. Intenta de nuevo.');
            mostrarMenu();
            break;
    }
}

mostrarMenu();