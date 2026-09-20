let productos =[
    {id:1, nombre: "Café Americano", precio: 40},
    {id:2, nombre: "Café Italiano", precio: 45},
    {id:3, nombre: "Pan de muertos", precio: 15}
];
function agregar(nombre, precio){
    productos.push({
        id: productos.length + 1,
        nombre: nombre,
        precio: precio
    });
}
function editar(id, nombre, precio){
    let producto = productos.find(p => p.id === id);

    if(producto){
        producto.nombre = nombre;
        producto.precio = precio;

    }
}
function eliminar(id){
    productos = productos.filter(p => p.id !== id);

}
function listar(){
    console.log("\n---PRODUCTOS---");

    productos.forEach(p => {
        console.log(
    `ID: ${p.id} | Nombre: ${p.nombre} | Precio: ${p.precio}`
        );
    });
}
const readline = require("readline").createInterface({
    input: process.stdin, output: process.stdout
});
readline.question("1 Agregar | 2 Editar | 3 Eliminar | 4 Listar | 5 Salir", opcion =>{
    if (opcion === "1"){
        readline.question("Nombre: ", nombre =>
        readline.question("Precio: ", precio => {
            agregar(nombre, Number(precio));
            listar();
            readline.close();
        }));
}
else if (opcion === "2"){
    readline.question("ID: ", id => 
readline.question("Nombre: ", nombre =>
readline.question("Precio: ", precio => {
    editar(Number(id), nombre, Number(precio));
    listar();
    readline.close();
})));
}
else if (opcion === "3"){
    readline.question("ID: ", id => {
        eliminar(Number(id));
        listar();
        readline.close();
    });
}
else if (opcion === "4"){
    listar();
    readline.close();
}
else if (opcion === "5"){
    readline.close();
}
});