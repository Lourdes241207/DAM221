const readline = requiere('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const productos=[
    { id: 1, nombre: 'café', precio: 80},
    {id: 2, nombre: 'té', precio: 50},
    {id: 3, nombre: 'chocolate', precio: 70}
];
const pedidos= [];
function mostrarMenu(){
    console.log(
        ==========================
          MENÚ PRINCIPAL
        ==========================
          1.Consutar nuestros productos
          2.Crear pedido de productos
          3.Listar los productos
          4.Salir 
    );
    rl.question('Seleccione una opción(1-4): ', (opcion) => {
        procesarOpcion(opcion);
    });
    
}
function consultarProductos(){
    console.log(\n---Catálogo de productos---);
    productos.forEach(p =>{
        console.log(ID: ${p.id}, nombre: ${p.nombre}, precio: $${p.precio});

    });
}