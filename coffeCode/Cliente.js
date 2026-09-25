const readline = require('readline');
const cocina = require ("./cocina");
const caja = require ("./caja");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menuPrincipal(){
    console.log("\n=====================");
    console.log("SISTEMA CAFETERÍA");
    console.log("=======================");
    console.log("1.Clientes");
    console.log("2.Cocina");
    console.log("3.Caja");
    console.log("4.Salir");

    rl.question("\nSeleccione una opcion: ", opcion =>{
        if(opcion === "1"){
            menuClientes();
        }
        else if(opcion === "2"){
            cocina.menuCocina(rl, menuPrincipal);
        }
        else if(opcion === "3"){
            caja.menuCaja(rl, menuPrincipal);
        }
        else if(opcion === "4"){
            console.log("Hasta luego");
        }
        else{
            console.log("Opcion invalida");
            menuPrincipal();
        }
    });
}
const opcionesMenu =[
    {id: "1", nnombre: "Consultar productos"},
    {id: "2", nombre: "Ver promociones"},
    {id: "3", nombre: "Crear pedido"},
    {id: "4", nombre: "Listar pedidos"},
    {id: "5", nombre: "Regresar"}
];

const promociones =[
{productoId: 1, descuento: 20, descripcion: "20% de descuento en Cafésin azucar"},
{productoId: 2, descuento: 15, descripcion: "15% de descuento en Café con leche"}
];

function menuClientes(){
    console.log("\n---MENÚ CLIENTES---");

    opcionesMenu.map(opcion => `${opcion.id}. ${opcion.nombre}`)
    forEach(opcion => console.log(opcion));

    rl.question("\nSelecciona una opcion: ", opcion =>{

        switch(opcion){
            case"1":
            cocina.listar();
            menuClientes();
            break;

            case "2":
                verPromociones();
                break;

                case "3":
                    crearPedido();
                    break;

                    case"4":
                    menuClientes();
                    break;

                    case"5":
                    menuPrincipal();
                    break;

                    default:
                        console.log("Opcion invalida");
                        menuClientes();
        }
    });
}

function verPromociones(){
    console.log("\n--PROMOCIONES--");
    promociones.map(promo =>{
        const producto = cocina.obtenerProducto(promo.productoId);
        const precio = producto.precio * (1-promo.descuento/100);
        return`${promo.descripcion} | Precio: $${precio}`;
    })
    .forEach(promo => console.log(promo));

    menuClientes();
}
function crearPedido(){
    console.log("\n--CREAR PEDIDO--");
    cocina.listar();
    rl.question("\nID del producto", id =>{
        const producto = cocina.obtenerProducto(Number(id));

        if(!producto){
            console.log("Producto no encontrado");
            menuClientes();
            return;
        }
        const pedido = {
            idPedido: caja.pedidos.length + 1,
            producto: producto.nombre,
            precio: producto.precio,
            subtotal: producto.precio,
            estado: "recibido"
        };

        caja.agregarPedido(pedido);
        console.log(`Pedido #${pedido.idPedido}: recibido.`);
        procesarPedido(pedido);
    });
    function procesarPedido(pedido){
        console.log("\n1.Pedido normal");
        console.log("2.Error en cocina");
        console.log("3.Falta ingrediente");
        rl.question("Selecciona: ", opcion =>{
            setTimeout(()=>{
                pedido.estado ="preparando";
                console.log(`Pedido #${pedido.idPedido}: Preparando...`);
                cocina.prepararPedido(pedido, opcion)
                .then(() =>{
                    setTimeout(() =>{
                        pedido.estado ="empacando";
                        console.log(`Pedido #${pedido.idPedido}: Empacando...`);
                        setTimeout(() =>{
                            pedido.estado ="listo";
                            console.log(`Pedido #${pedido.idPedido}: ¡Listo!`);
                            caja.notificarPedidoListo(mensaje => console.log(mensaje));
                            setTimeout(() =>{
                                pedido.estado = "entregado";
                                console.log(`Pedido #${pedido.idPedido}: Entregado.`);
                                menuClientes();
                            },1000);
                        },1000);
                    },1000);
                            })
                            .catch(error =>{
                                pedido.estado ="cancelado";
                                pedido.motivoCancelacion = error;

                                console.log(`Pedido #${pedido.idPedido}: Cancelado.`);
                                console.log(`Motivo: ${error}`);

                                caja.notificarPedidoCancelado(mensaje => console.log(mensaje));
                                menuClientes();
                            });
                        },1000);
                        });

                    }
                }
                menuPrincipal();
            
        
    
